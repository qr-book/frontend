import * as yup from "yup";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Min symbols is 3")
    .max(20, "Max symbols is 20")
    .required("Please input title"),
  text: yup
    .string()
    .min(3, "Min symbols is 3")
    .max(255, "Max symbols is 255")
    .required("Please input text"),
  quality: yup.string().max(1, "Please choose quality"),
});

export default schema;
