import express from 'express';
import * as comicsController from '../controllers/restaurant.controller';

const router = express.Router();

router.route('/restaurant')
  .get(comicsController.findAll)
  .post(comicsController.save);

router.route('/restaurant/:id')
  .get(comicsController.findById)
  .put(comicsController.replace)
  .patch(comicsController.update)
  .delete(comicsController.delete);

export default router;
