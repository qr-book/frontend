import * as yup from "yup";

const schema = yup.object().shape({
  text: yup.string().min(3, "Min symbols is 3").max(255, "Max symbols is 255"),
  rating: yup.number().typeError("Put a rating, please").required(),
});

export default schema;
