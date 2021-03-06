"use strict";

const MiioProp = require("./property");

module.exports = class Menu extends MiioProp {
    constructor() {
        super("menu", {
            name: "menu",
            desc: "Selected recipe id",
            type: "string"
        });
    }
};
