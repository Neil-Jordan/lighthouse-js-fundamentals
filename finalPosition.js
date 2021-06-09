const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  
const output = [-1, 4];

const finalPosition = (moves) => {
  let xTotal = 0;
  let yTotal = 0;

  for(let i=0; i < moves.length; i++){
    if(moves[i] === 'north') {
      yTotal++;

    } else if (moves[i] === 'south') {
      yTotal--;

    } else if (moves[i] === 'east') {
      xTotal++;

    } else if (moves[i] === 'west') {
      xTotal--;
      
    }
  }
  
  return [xTotal,yTotal];
};

console.log(finalPosition(moves));