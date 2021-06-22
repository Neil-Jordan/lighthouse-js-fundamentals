const checkAir = function (samples, threshold) {
  let cleanCount = 0;
  let dirtyCount = 0;

  for (var i = 0; i < samples.length; i++) {
    switch(samples[i]) {
      case 'clean':
        cleanCount++;
        break;
      
      case 'dirty':
        dirtyCount++;
        break;
      
    }
  }

  const pollutionProportion = dirtyCount / (cleanCount + dirtyCount);
  
  if (pollutionProportion > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))