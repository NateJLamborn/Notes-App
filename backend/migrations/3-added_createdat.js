'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "createdAt" on table "notes"
 * changeColumn "createdAt" on table "notes"
 *
 **/

var info = {
    "revision": 3,
    "name": "added_createdat",
    "created": "2021-10-31T14:39:08.728Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "notes",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "defaultValue": Sequelize.Literal
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "notes",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "defaultValue": Sequelize.Literal
            }
        ]
    }
];

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
