import { Router } from 'express';

import ExampleController from './app/controllers/ExampleController'
const routes = Router();

routes.get('/', ExampleController.index);

export default routes;
