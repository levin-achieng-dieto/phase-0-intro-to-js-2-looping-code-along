const names = ["Guadalupe", "Ollie", "Aki"];

 function writeCards(names){
  var cardMessages = []
  for (let i = 0; i < names.length; i++){
    var messages = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    cardMessages.push(messages);

    debugger;
  }
  return cardMessages;
 }
 writeCards(names);

function countDown(number) {
  let x = number;
  while (x >= 0) {
    console.log(x);
    x--;
  }
}