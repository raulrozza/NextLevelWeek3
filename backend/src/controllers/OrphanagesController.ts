import { getRepository } from 'typeorm';

// Libs
import * as Yup from 'yup';

// Models
import Orphanage from '../models/Orphanage';

// Types
import { Request, Response } from 'express';

// Views
import orphanagesView from '../views/orphanages_view';

export default {
  async index(_: Request, res: Response): Promise<unknown> {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return res.json(orphanagesView.renderMany(orphanages));
  },

  async create(req: Request, res: Response): Promise<unknown> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => ({
      path: image.filename,
    }));

    const orphanageData = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(orphanageData, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(orphanageData);

    await orphanagesRepository.save(orphanage);

    return res.status(201).json(orphanage);
  },

  async show(req: Request, res: Response): Promise<unknown> {
    const { id } = req.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return res.json(orphanagesView.render(orphanage));
  },
};
