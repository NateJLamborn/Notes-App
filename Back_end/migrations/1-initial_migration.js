'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "note", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-10-11T16:21:29.800Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "note",
        {
            "note_id": {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "note_id",
                "primaryKey": true,
                "allowNull": false
            },
            "note_title": {
                "type": Sequelize.STRING(45),
                "field": "note_title",
                "allowNull": false
            },
            "note_content": {
                "type": Sequelize.STRING(2000),
                "field": "note_content",
                "allowNull": false
            },
            "last_update": {
                "type": Sequelize.DATE,
                "field": "last_update",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
