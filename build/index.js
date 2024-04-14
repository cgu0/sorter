"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const numberOfCollection = new NumbersCollection_1.NumbersCollection([100000, 300, -50, 0]);
numberOfCollection.sort();
console.log(numberOfCollection.data);
