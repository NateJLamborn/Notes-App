module.exports = function(sequelize, DataTypes) {
    return sequelize.define('note', {
      note_id: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      note_title: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      note_content: {
        type: DataTypes.STRING(2000),
        allowNull: false
      },
      last_update: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      tableName: 'note'
    });
  };