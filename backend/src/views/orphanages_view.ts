import Orphanage from '../models/Orphanage';
import imagesView, { ImageRender } from './images_view';

interface OrphanageRender extends Omit<Orphanage, 'images'> {
  images: ImageRender[];
}

export default {
  render(orphanage: Orphanage): OrphanageRender {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },
  renderMany(orphanages: Orphanage[]): OrphanageRender[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
