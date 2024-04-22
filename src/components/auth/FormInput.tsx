import { FormInputProps } from '@/types/input';

const FormInput = ({ label, name, type, register, required, pattern, errorMessage }: FormInputProps) => {
  return (
    <div>
      <label className="mt-5 block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full p-2 border-2 border-gray-200 focus:border-black focus:outline-none bg-white focus:bg-white transition-colors rounded-md"
        id={name}
        type={type}
        {...register(name, { required, pattern })}
      />
      {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
