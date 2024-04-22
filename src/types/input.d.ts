import { FieldValues, UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  pattern?: RegExp;
  errorMessage?: string | boolean;
}
