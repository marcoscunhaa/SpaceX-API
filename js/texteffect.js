const textDisplay = document.getElementById('efeito') //efeito é o nome do id setado na tag strong do html (exemplo <strong id="efeito"></strong>)
const phrases = ['Gostosa 🥵', 
'Bonita 😳', 
'Diva 🫠',
'Gata 🫣', 
'Sexy 😏', 
'Cremosa 🤤', 
'Magnífica 😵', 
'Sensual 🤤', 
'Esplêndida 😳',
'Atraente 🥵',
'Calorosa 😈',
'Deslumbrante 🥺',
'Iluminada 😲',
'Cheirosa 😍',
'Encantadora 🫣',
'Elegante 🥺',
'Simpática 😚',
'Belezura 🫣',
'Querida 😺',
'Admirável 😌',
'Talentosa 😗',
'Seduzente 😳',
'Perfeita 😍',
'Estudiosa 🫠',
'Gasosa 🤯',
'Amorosa 😻',
'Atensiosa 🥺',
'Empenhada 😳',
'Reluzente 😵‍💫',
'Fofa 🥺',
'Delicia 🥵',
'Pundinzinho 🥺',
'Corpuda 🤤',
'Bunduda 🥵',
'Linda 😍',
'Feliz 😗',
'Peituda 🥵',
'Dengosaaaaa 😻'] // essas são as frases que irão aparecer na tag strong
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 500 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()