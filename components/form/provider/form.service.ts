import {
  TextValidation,
  Validation,
  EmailValidation,
  NumberValidation,
} from "./form.validators";
import { FormEvent } from "./form.hook";
export type FieldTypes =
  | "text"
  | "password"
  | "date"
  | "datetime"
  | "number"
  | "select"
  | "email"
  | "long";

export type Option = { label: string; value: any };

export abstract class FieldSettings<
  S extends FieldSettings<S, V>,
  V extends Validation
> {
  constructor(protected readonly _field: Field) {}

  private get self() {
    return this as unknown as S;
  }

  get field(): Field {
    return this._field;
  }

  name(name: string): S {
    this._field.name = name;
    return this.self;
  }

  row(rowNumber: number): S {
    this._field.__row(rowNumber);
    return this.self;
  }

  helper(message: string): S {
    this._field.__helper(message);
    return this.self;
  }

  label(label: string): S {
    this._field.__label(label);
    return this.self;
  }

  default(value: string): S {
    this._field.update(value);
    return this.self;
  }

  readonly(): S {
    this._field.__readonly(true);
    return this.self;
  }

  derived(derived: (data: any) => any): S {
    this._field.__derived(derived);
    return this.self;
  }

  editable(allowEditable: boolean): S {
    if (!allowEditable) return this.self;
    this._field.__editable();
    return this.self;
  }

  placeholder(placeholder: string): S {
    this._field.__placeholder(placeholder);
    return this.self;
  }

  validate(validate: (validate: V) => V): S {
    this._field.__validate((event, data) =>
      validate(
        Validation.validate(this.field.type, event, this.field.value, data) as V
      )
    );
    return this.self;
  }
}

export abstract class StringSettings<
  S extends StringSettings<S, V, F>,
  V extends Validation,
  F extends StringField
> extends FieldSettings<S, V> {
  constructor(protected readonly _field: F) {
    super(_field);
  }
}

export class TextSetting extends StringSettings<
  TextSetting,
  TextValidation,
  TextField
> {}

export class EmailSetting extends StringSettings<
  EmailSetting,
  EmailValidation,
  EmailField
> {}

export class PasswordSetting extends StringSettings<
  PasswordSetting,
  TextValidation,
  PasswordField
> {}

export class SelectSetting extends StringSettings<
  SelectSetting,
  TextValidation,
  SelectField
> {}

export class NumberSetting extends FieldSettings<
  NumberSetting,
  NumberValidation
> {
  constructor(protected readonly _field: NumberField) {
    super(_field);
  }
}

export class DateSetting extends FieldSettings<DateSetting, TextValidation> {
  constructor(protected readonly _field: DateField) {
    super(_field);
  }
}

export abstract class Field {
  name: string = "";

  protected _placeholder: string = "";
  protected _row: number = 1;
  protected _touched: boolean = false;
  protected abstract _type: FieldTypes;
  protected abstract _value: any;
  protected _validation:
    | ((event: FormEvent, data: any) => Promise<Validation> | Validation)
    | null = null;
  protected _error: { name: string; message: string } | null = null;
  protected _helper: string | null = null;
  protected _label: string | null = null;
  protected _readonly: boolean = false;
  protected derived: ((data: any) => any) | null = null;
  protected _editable: boolean = false;

  protected abstract __update: (value: any) => void;
  abstract initiate(): FieldSettings<any, any>;

  update(value: any, data?: any) {
    this._error = null;
    data && this.derived ? this.derived(data) : this.__update(value);
    return this;
  }

  get touched(): boolean {
    return this._touched;
  }

  toggleReadOnly() {
    this._readonly = !this._readonly;
    return this;
  }

  __editable() {
    this._editable = true;
  }

  __error(error: { name: string; message: string }) {
    this._error = error;
    return this;
  }

  __readonly(readonly: boolean) {
    this._readonly = readonly;
  }

  __validate(validate: (event: FormEvent, data: any) => Validation) {
    this._validation = validate;
  }

  __derived(_derived: (data: any) => any) {
    this.derived = _derived;
  }

  __row(rowNumber: number) {
    this._row = rowNumber;
  }

  __label(label: string) {
    this._label = label;
  }

  __helper(helper: string) {
    this._helper = helper;
  }

  __placeholder(placeholder: string) {
    this._placeholder = placeholder;
  }

  get placeholder() {
    return this._placeholder;
  }

  get row() {
    return this._row;
  }

  get isDerived() {
    return this.derived ? true : false;
  }

  get type() {
    return this._type;
  }

  get value() {
    return this._value;
  }

  get fieldType(): string {
    return this._type as string;
  }

  get fieldValue() {
    return this._value;
  }

  get helper() {
    return this._helper;
  }

  get label() {
    return this._label;
  }

  get requiresValidation() {
    return this._touched && this._validation ? true : false;
  }

  get validate() {
    return this._validation;
  }

  get readonly() {
    return this._readonly;
  }

  get isEditable() {
    return this._editable;
  }

  get isInvalid() {
    return this._error ? true : false;
  }

  get error() {
    return this._error;
  }
}

export abstract class StringField extends Field {
  protected _value: string = "";
  protected __update: (value: any) => void = (value) => {
    this._touched = true;
    this._value = value;
  };
}

export class TextField extends StringField {
  protected __update: (value: string) => void = (value) => {
    this._value = value;
  };
  protected _value: string = "";
  protected _type: "text" | "password" | "email" | "select" | "long" = "text";

  initiate(): TextSetting {
    return new TextSetting(this);
  }
}

export class LongTextField extends TextField {
  protected _type: "text" | "password" | "email" | "select" | "long" = "long";
}

export class EmailField extends StringField {
  protected _type: "email" = "email";

  get fieldType() {
    return "text";
  }

  get setting(): EmailSetting {
    return new EmailSetting(this);
  }

  initiate(): EmailSetting {
    return new EmailSetting(this);
  }
}

export class PasswordField extends StringField {
  protected _type: "password" = "password";
  protected visible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
    return this;
  }

  get fieldType() {
    return this.visible ? "text" : "password";
  }

  initiate(): PasswordSetting {
    return new PasswordSetting(this);
  }
}

export class NumberField extends Field {
  protected _type: FieldTypes = "number";
  protected _value: number = 0;
  protected __update: (value: string) => void = (value) => {
    this._touched = false;
    this._value = Number(value);
  };

  get fieldValue() {
    return String(this.value);
  }

  initiate(): NumberSetting {
    return new NumberSetting(this);
  }
}

export class DateField extends Field {
  protected _value: Date = new Date();
  protected __update: (value: string) => void = (value) => {
    this._touched = true;
    this._value = new Date(value);
  };
  protected _type: "date" | "datetime" = "date";
  protected derived: ((data: any) => Date) | null = null;

  get fieldValue() {
    return `${this.year}-${this.month}-${this.day}`;
  }

  get day(): string {
    const day = this._value.getDate();
    return `${day < 10 ? 0 : ""}${day}`;
  }

  get month(): string {
    const month = this._value.getMonth() + 1;
    return `${month < 10 ? 0 : ""}${month}`;
  }

  get year(): string {
    return String(this._value.getFullYear());
  }

  get fieldType() {
    return this._type as string;
  }

  initiate(): DateSetting {
    return new DateSetting(this);
  }
}

export class DateTimeField extends DateField {
  protected _type: "datetime" = "datetime";

  get type() {
    return this._type;
  }

  get fieldType() {
    return "datetime-local";
  }

  get fieldValue(): string {
    return `${this.year}-${this.month}-${this.day}S${this.hour}:${this.minute}`;
  }

  get hour() {
    const hour = this._value.getHours();
    return `${hour < 10 ? 0 : ""}${hour}`;
  }

  get minute() {
    const minute = this._value.getMinutes();
    return `${minute < 10 ? 0 : ""}${minute}`;
  }
}

export class SelectField extends StringField {
  protected _type: "select" = "select";
  protected _value: string = "";
  protected _options: { label: string; value: string }[] = [];

  get options() {
    return this._options;
  }

  __options(options: Option[]) {
    this._options = options;
  }

  initiate(): SelectSetting {
    return new SelectSetting(this);
  }
}

export const email = () => new EmailField().initiate();

export const text = () => new TextField().initiate();

export const password = () => new PasswordField().initiate();

export const number = () => new NumberField().initiate();

export const select = () => new SelectField().initiate();

export const date = () => new DateField().initiate();

export const datetime = () => new DateTimeField().initiate();

export const long = () => new LongTextField().initiate();
