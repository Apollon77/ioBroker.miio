"use strict";

const MiioProp = require("./property");

module.exports = class BatCharge extends MiioProp {
    constructor() {
        super("bat_charge", {
            name: "bat charge",
            desc: "State of the battery charger",
            type: "string"
        });
    }
};
