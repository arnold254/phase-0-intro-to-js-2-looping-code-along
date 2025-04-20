function writeCards(names, eventName) {

    let thankYouMessages = [];
    
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }

    return thankYouMessages;
  }

  function countDown(myNumber) {


    if (myNumber <= 0) {
      console.log("not a positive integer");
    }
    
    while (myNumber >= 0) {
      console.log(myNumber);
      myNumber--;
    }
  }

console.log(countDown(10));
