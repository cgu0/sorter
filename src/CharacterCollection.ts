import { Sorter } from './Sorter';
export class CharacterCollection extends Sorter{
    constructor(public data: string) {
        super()
    }
    get length(): number {
        return this.data.length;
    }
    compare(leftIndex:number, rightIndex:number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    //先将字符串转换为数组，然后交换数组中的元素，最后将数组转换为字符串
    swap(leftIndex:number, rightIndex:number):void{
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
}