var kittens = ["Milo", "Otis", "Garfield"] //define your array here

var element = 'Katie'

// Add your functions and code here
function destructivelyAppendKitten (element) {
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten (element) {
  kittens.pop(element)
  return kittens
}

function destructivelyRemoveFirstKitten (element) {
  kittens.shift(element)
  return kittens
}

function appendKitten(element) {
  var newKittens = [... kittens, element]
  return newKittens
}

function prependKitten(element) {
  var newKittens = [element, ...kittens]
  return newKittens
}