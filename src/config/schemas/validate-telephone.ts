import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class ValidateTelephoneNumber implements ValidatorConstraintInterface {
  validate(text: string, args?: ValidationArguments): boolean {
    const REGEX_PHONE = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
    return REGEX_PHONE.test(text);
  }
  defaultMessage?(args?: ValidationArguments): string {
    return 'Telefone inválido';
  }
}
