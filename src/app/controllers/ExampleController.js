import Example from '../models/Example';

class ExampleController {
  async index(req, res) {
    const travelers = await Example.findAll();

    return res.json(travelers);
  }
}

export default new ExampleController();
