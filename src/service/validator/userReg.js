import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Please input login"),
  password: yup.string().min(8, "Min password sybols is 8").required("Please input password"),
});

export default schema;
