import { FormEvent } from "./form.hook";
import { FieldTypes } from "./form.service";

export type Validator = (value: any, data: any) => Promise<boolean> | boolean;
export type ValidationResult = {
  name: string;
  message: string;
};

export abstract class Validation {
  protected _results: ValidationResult[] = [];
  constructor(
    protected readonly value: any,
    protected readonly data: any,
    protected readonly currentEvent: FormEvent
  ) {}

  protected isEvent(event: FormEvent): boolean {
    return event === this.currentEvent;
  }

  custom(
    name: string,
    message: string,
    validate: Validator,
    event: FormEvent = "change"
  ) {
    if (!this.isEvent(event)) return this;
    if (!validate(this.value, this.data)) this._results.push({ name, message });
    return this;
  }

  async customAsync(
    name: string,
    message: string,
    validate: Validator,
    event: FormEvent = "submit"
  ) {
    if (!this.isEvent(event)) return this;
    if (!(await validate(this.value, this.data)))
      this._results.push({ name, message });
    return this;
  }

  get results() {
    return this._results;
  }

  static validate(
    type: FieldTypes,
    event: FormEvent,
    value?: any,
    data?: any
  ): Validation {
    switch (type) {
      case "number":
        return new NumberValidation(value ?? 0, data ?? {}, event);
      case "email":
        return new EmailValidation(value ?? "", data ?? {}, event).email();
      default:
        return new TextValidation(value ?? "", data ?? {}, event);
    }
  }
}

export class TextValidation extends Validation {
  protected regex(regex: RegExp): boolean {
    return regex.test(this.value);
  }

  maxLength(maxLength: number, message?: string, event: FormEvent = "change") {
    const name = "max.length";
    if (!this.isEvent(event)) return this;
    if (this.value.length > maxLength)
      this._results.push({ name, message: message ?? "Too long" });
    return this;
  }

  minLength(minLength: number, message?: string, event: FormEvent = "change") {
    const name = "min.length";
    if (!this.isEvent(event)) return this;
    if (this.value.length < minLength)
      this._results.push({ name, message: message ?? "Too short" });
    return this;
  }
}

export class EmailValidation extends TextValidation {
  email(message?: string, event: FormEvent = "change"): EmailValidation {
    const name = "email";
    const expression = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!this.isEvent(event)) return this;
    if (!this.regex(expression))
      this._results.push({ name, message: message ?? "Invalid email address" });
    return this;
  }
}

export class NumberValidation extends Validation {
  min(min: number, message?: string, event: FormEvent = "change") {
    return this;
  }

  max(max: number, message?: string, event: FormEvent = "change") {
    return this;
  }
}
