import * as Yup from 'yup';

export const CreateOrphanageSchema = Yup.object().shape({
  name: Yup.string().required(),
  about: Yup.string().max(300).required(),
  instructions: Yup.string().required(),
  opening_hours: Yup.string().required(),
  open_on_weekends: Yup.bool().required(),
});
