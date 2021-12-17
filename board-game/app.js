const board = document.querySelector('#board');
const SQUARE_NUMBERS = 600;
const colors = ['#6c08fe', '#1d08fe', '#087bfe', '#08fef9', '#08fe16'];

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const squre = document.createElement('div')
  squre.classList.add('square')

  squre.addEventListener('mouseover', () => setColor(squre))

  squre.addEventListener('mouseleave', () => removeColor(squre))

board.append(squre)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = `${color}`
  element.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

// variant 1
// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length)
// return colors[index]
// }

// variant 2
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}