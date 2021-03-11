import { toast } from 'react-toastify';

export const toastifySuccess = () => {
  toast.success('Form sent!', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: 'success',
  });
};

export const toastifyError = () => {
  toast.error('Error occured!', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: 'error',
  });
};
