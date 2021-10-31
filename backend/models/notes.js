'use strict';
module.exports = (sequelize, DataTypes) => {
  var notes = sequelize.define(
    'notes',
    {
      NoteId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      NoteTitle: {
          type: DataTypes.STRING,
          allowNull: false
      },
      NoteBody: {
          allowNull: false,
          type: DataTypes.STRING(2000)
      },
      updatedAt:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt:{
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {}
  );

  return notes;
};