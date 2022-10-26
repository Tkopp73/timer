let input = process.argv;
let array = input.slice(2).sort((a,b) => a - b).filter(Number);

const alarm = (arr) => {
  for(let x = 0; x < arr.length; x++) {
    if(arr[x] < 0){
      continue;
    } else if(!arr){
      return;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, arr[x]*1000);
    };
  }
};

alarm(array);