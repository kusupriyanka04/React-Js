// external file contain reusable code
// imported into other js file
// can contain varaible, classes, function...
// introduce as part of ecma 2015

import {PI, getArea, getVolume} from './mathfun.js';

import hello from './mathfun.js';

console.log(PI);

const circum = hello(10);
const area = getArea(7);

console.log(area);
console.log(circum);
console.log(getVolume(4));