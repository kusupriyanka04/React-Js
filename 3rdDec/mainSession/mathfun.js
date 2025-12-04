export const PI = 3.14;
export default function getCircumfrence(radius){  // named module
    return 2*PI*radius;
}

export function getArea(radius){
    return PI*radius*radius;
}

export function getVolume(radius){
    return 4*PI*radius*radius;
}