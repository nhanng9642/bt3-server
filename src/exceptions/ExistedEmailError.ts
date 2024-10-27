import { HttpException } from "@nestjs/common";

export default class ExistedEmailError extends HttpException {
  constructor(message: string) {
    super(message, 400);
  }
}