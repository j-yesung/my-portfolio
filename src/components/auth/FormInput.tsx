import { FieldValues, UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  pattern?: RegExp;
  errorMessage?: string;
}

const FormInput = ({ label, name, type, register, required, pattern, errorMessage }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name, { required, pattern })} />
    </div>
  );
};

export default FormInput;
