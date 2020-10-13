import { getRepository } from 'typeorm';

// Models
import Orphanage from '../models/Orphanage';

// Types
import { Request, Response } from 'express';

export default {
  async index(_: Request, res: Response): Promise<unknown> {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();

    return res.json(orphanages);
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

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanagesRepository.save(orphanage);

    return res.status(201).json(orphanage);
  },

  async show(req: Request, res: Response): Promise<unknown> {
    const { id } = req.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id);

    return res.json(orphanage);
  },
};
