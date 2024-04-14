"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// abstract class 告诉我们，这个类永远不会被实例化，只会被继承， 也就是说我们永远不会创建一个 Sorter 的实例，而是创建一个继承自 Sorter 的类
// 这个类的目的是为了给我们提供一个 sort 方法，这个方法可以用来对任何类型的数据进行排序
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
