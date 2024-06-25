import { IInitialValues } from "../shared/initialValues";

export const validateForm = (value: IInitialValues) => {
  if (value.email === "" || value.password === "") {
    return false;
  }
  return true;
};
