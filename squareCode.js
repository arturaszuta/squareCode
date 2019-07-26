const smallArrays = function(str, size) {
  return str.match(new RegExp('.{1,' + size + '}', 'g'));
};

const stringify = function(str, n) {
  let ret = [];
  let i;
  let len;

  for (i = 0, len = str.length; i < len; i += n) {
    ret.push(str.substr(i, n));
  }
  return ret;
};

const squareCode = function(message) {
  const newMessage = message.replace(/ /g, '');
  const rowLength = Math.ceil(Math.sqrt(newMessage.length));
  const newArray = smallArrays(newMessage, rowLength);
  let answerString = '';
  
  for(let i = 0; i <= newArray.length; i++) {
    let indicator = 0;
    while(indicator < newArray.length) {
      if(newArray[indicator][i] !== undefined) {
        answerString += newArray[indicator][i];    
      }
      indicator ++;
    }
  }
  
  return smallArrays(answerString, rowLength).join(' ');
  
  
  
};

const sample = 'if man was meant to stay on the ground god would have given us roots';

console.log(squareCode(sample));