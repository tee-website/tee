import { useState, useEffect } from "react";
import { Field, FieldSettings } from "./form.service";
import { useFormRender } from "./form.provider";
import { FormError } from "./form.error";

import { ValidationResult } from "./form.validators";

export type FormOptions = {
  model?: { [key: string]: any };
  numberOfRows?: number;
  editable?: boolean;
  schema: {
    [key: string]: FieldSettings<any, any>;
  };
};

export type FormEvent = "change" | "submit" | "initialize";

export function useForm({
  numberOfRows,
  schema,
  model,
  editable,
}: FormOptions) {
  const [fields, setFields] = useState<Field[]>(
    Object.entries(schema).map(([name, settings]) => {
      return model
        ? settings
            .name(name)
            .default(model[name] ?? "")
            .editable(editable).field
        : settings.name(name).field;
    })
  );
  const [rows] = useState<number>(numberOfRows ?? 1);

  const [event, setEvent] = useState<{ count: number; type: FormEvent }>({
    count: 0,
    type: "initialize",
  });

  const [_errors, setErrors] = useState<{
    [key: string]: ValidationResult;
  } | null>({});

  const trigger = (_event: FormEvent) => {
    setEvent({ type: _event, count: event.count === 10 ? 0 : event.count + 1 });
  };

  const reset = () => {
    const new_fields = fields.map((field) => field.__reset());
    setFields(new_fields);
    trigger("initialize");
  };

  const getValues = () => {
    const data = fields.map((field) => [field.name, field.value]);
    return Object.fromEntries(data);
  };

  const getUpdates = () => {
    if (!model) throw new FormError("A model is required");

    const data = getValues();
    const updates = Object.entries(data).filter(
      ([name, value]) => model[name] !== value
    );

    return Object.fromEntries(updates) ?? {};
  };

  const getField = (name: string) => {
    const field = fields.filter((field) => field.name === name);
    if (field.length === 0) throw new Error("Field not found");
    return field[0];
  };

  const handleSubmission = (
    event: (data: { [key: string]: any }) => void,
    updates = false
  ) => {
    return () => {
      trigger("submit");
      if (_errors === null) {
        event(updates ? getUpdates() : getValues());
      } else {
        console.error(_errors);
      }
    };
  };

  const deriveEvent = (stack: string[]) => {
    fields.forEach((field) => {
      if (field.isDerived) {
        changeEvent(() => field.update("", getValues()), stack);
      }
    });
  };

  const changeEvent = (
    event: () => Field,
    stack: string[] = [],
    allowTrigger: boolean = true
  ) => {
    const field = event();
    const fieldIndex = fields.indexOf(field);

    if (fieldIndex === -1) return;

    const _fields = fields.slice();
    _fields.splice(fieldIndex, 1, field);

    setFields(_fields);
    if (allowTrigger) trigger("change");

    if (!stack.includes(field.name)) deriveEvent([...stack, field.name]);
  };

  const validation = async () => {
    if (event.type === "initialize") return;
    const validations = fields.filter((field) => field.requiresValidation);
    let errors = [];
    for (const field of validations) {
      if (field.validate) {
        const results = (await field.validate(event.type, getValues())).results;
        if (results.length > 0) {
          errors.push([field.name, results[0]]);
          changeEvent(() => field.__error(results[0]), [], false);
        }
      }
    }
    setErrors(errors.length === 0 ? null : Object.fromEntries(errors));
  };

  const { render } = useFormRender({
    data: getValues(),
    fields,
    getField,
    changeEvent,
    options: { rows },
  });

  useEffect(() => {
    validation().then(() => {
      if (event.type === "submit") console.log(event.type);
    });
  }, [event]);

  return {
    data: getValues(),
    updates: () => getUpdates(),
    render,
    reset,
    handleSubmission,
  };
}
