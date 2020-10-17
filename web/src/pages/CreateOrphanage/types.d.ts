export interface FormValues {
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

export interface FormDataFields {
  [key: string]: string | Blob;
}
