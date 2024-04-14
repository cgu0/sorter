import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberOfCollection = new NumbersCollection([100000, 300, -50, 0]);
numberOfCollection.sort();
console.log(numberOfCollection.data);