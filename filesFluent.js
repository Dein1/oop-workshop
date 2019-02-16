import fs from 'fs';

class FilesFluent {
  constructor(files) {
    this.arr = files;
  }

  getMiddleElement() {
    this.string = this.arr[Math.ceil(this.arr.length / 2)];
    return this;
  }

  addS() {
    this.string = this.string[this.string.length - 1] === 's' ? this.string : `${this.string}s`;
    return this;
  }

  toUpperCase() {
    this.string = this.string.toUpperCase();
    return this;
  }

  toString() {
    return this.string;
  }

  sort() {
    this.arr = this.arr.sort();
    return this;
  }

  filter(fn) {
    this.arr = this.arr.filter(fn);
    return this;
  }
}

const files = fs.readdirSync('.');
const coll = new FilesFluent(files);
const result = coll
  .filter(el => el[0] !== '.')
  .sort()
  .getMiddleElement()
  .addS()
  .toUpperCase()
  .toString();

console.log(result);
