import { toast } from 'react-toastify';

export const useToast = () => {
  const notify = ({ type, text }: Record<string, string>) => {
    switch (type) {
      case 'default':
        toast(text);
        break;
      case 'success':
        toast.success(text);
        break;
      case 'warning':
        toast.warning(text);
        break;
      case 'error':
        toast.error(text);
        break;
    }
  };

  return {
    notify,
  };
};
