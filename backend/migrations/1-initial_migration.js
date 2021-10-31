'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "notes", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-10-31T14:12:29.290Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "notes",
        {
            "NoteId": {
                "type": Sequelize.INTEGER,
                "field": "NoteId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            },
            "NoteTitle": {
                "type": Sequelize.STRING,
                "field": "NoteTitle",
                "allowNull": false
            },
            "NoteBody": {
                "type": Sequelize.STRING,
                "field": "NoteBody",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "defaultValue": Sequelize.Literal,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
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
