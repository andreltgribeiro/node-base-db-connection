import Sequelize, { Model } from 'sequelize';

class Example extends Model {
  static init(sequelize) {
    super.init(
      {
        example: Sequelize.STRING
      },
      { sequelize }
    );

    return this;
  }
}

export default Example;
