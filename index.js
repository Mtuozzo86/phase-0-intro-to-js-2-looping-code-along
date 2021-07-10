function writeCards(names, event){
    let cards = []
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(numb){
    while(numb >= 0){
      console.log(numb--)
    }
    
  }
  
countDown(10)