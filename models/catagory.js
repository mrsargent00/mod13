const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('./config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  },

  {
    sequelize,
   timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use underscores instead of camelCase for column names
    modelName: 'category', // Set the model name to 'category'
  }
);

module.exports = Category;