import { ChangeEvent } from 'react';
import { FormDataFields } from './types';

export function getImagesFromInputAndSet(
  event: ChangeEvent<HTMLInputElement>,
  setImages: (images: File[]) => void,
): void {
  const { files } = event.target;

  if (files) {
    const images = Array.from(files);

    setImages(images);
  }
}

export function imagesArrayToURL(images: File[]): string[] {
  return images.map(image => URL.createObjectURL(image));
}

export function createFormDataFromObject(formValues: FormDataFields): FormData {
  const data = new FormData();

  const formKeys = Object.keys(formValues);

  formKeys.forEach(key => data.append(key, formValues[key]));

  return data;
}
