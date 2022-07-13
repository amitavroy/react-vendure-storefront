import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too short").max(155, "Too long!"),
  firstName: Yup.string().min(2, "Too short").max(155, "Too long!"),
  lastName: Yup.string().min(2, "Too short").max(155, "Too long!"),
  emailAddress: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too short")
    .max(255, "Too long!")
    .required("Password is required"),
  phoneNumber: Yup.string().min(10, "Too short").max(13, "Too long!"),
});
