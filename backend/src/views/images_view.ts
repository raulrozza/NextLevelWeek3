import Image from '../models/Image';

export interface ImageRender extends Omit<Image, 'path' | 'orphanage'> {
  url: string;
}

export default {
  render(image: Image): ImageRender {
    return {
      id: image.id,
      url: `http://192.168.16.103:5000/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]): ImageRender[] {
    return images.map(image => this.render(image));
  },
};
