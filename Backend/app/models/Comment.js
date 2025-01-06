const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/dbConfig');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  videoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Comment;
