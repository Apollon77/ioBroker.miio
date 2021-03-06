"use strict";

const MiioProp = require("./property");

module.exports = class Aqi extends MiioProp {
    constructor() {
        super("aqi", {
            name: "aqi",
            desc: "Air quality index value",
            unit: "μg/m³",
            type: "number"
        });
    }
};
