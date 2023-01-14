export class FormError extends Error {
  constructor(message: string) {
    super(message);
    console.error("Form Error Occurred: ", this);
  }
}
