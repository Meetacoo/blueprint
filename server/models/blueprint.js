const {DataTypes} = require('sequelize');

module.exports = ({sequelize}) => {
    return sequelize.define('Blueprint', {
        id: {
            type: DataTypes.STRING, primaryKey: true
        }, name: {
            type: DataTypes.STRING, allowNull: false
        }, description: {
            type: DataTypes.TEXT
        }
    }, {});
};
