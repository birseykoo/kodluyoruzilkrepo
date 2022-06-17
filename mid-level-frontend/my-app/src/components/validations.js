import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),
  
});

export default validations;