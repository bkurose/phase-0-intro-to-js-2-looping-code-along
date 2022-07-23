const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

let greetingsStored = []

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        greetingsStored.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return greetingsStored;
}

function countDown(i) {
    while (i >= 0) {
        console.log( i )
        i -= 1
    }
}

countDown(4)