function rectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return (length * width);
  } else {
    return undefined
  }
}

function triangleArea(base, height) {
  if(base > 0 && height > 0) {
    return ((base / 2) * height);
  } 
}

function circleArea (radius){
  if (radius > 0) {
    return (Math.PI * radius * radius);
  }
}