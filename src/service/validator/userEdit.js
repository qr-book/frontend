import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Please input email"),
  name: yup.string().required("Please input nickname"),
});

export default schema;
