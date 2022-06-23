import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';

export class ValidateTelephonePattern implements ValidatorConstraintInterface {
  validate(text: string, args?: ValidationArguments): boolean | Promise<boolean> {
    const REGEX_PHONE = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
    return REGEX_PHONE.test(text);
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'Telefone inválido';
  }
}
