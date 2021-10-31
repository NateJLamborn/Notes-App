'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "NoteBody" on table "notes"
 *
 **/

var info = {
    "revision": 2,
    "name": "added_NoteBodyLength",
    "created": "2021-10-31T14:16:20.657Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "notes",
        "NoteBody",
        {
            "type": Sequelize.STRING(2000),
            "field": "NoteBody",
            "allowNull": false
        }
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
