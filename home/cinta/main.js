const $ = (e) => document.querySelector(e)
const azulOscuro = '#1BB5EC'
const azulClaro = '#DAF5FF'
const altura = '3.1rem'

let $cinta = $('.sc-jrcTuL.iOycLu')
$cinta.style.padding = '0 30px 0 0'
$cinta.style.background = azulClaro

let $cintaTexto = $('.sc-jrcTuL.iOycLu>div')
let $cintaBoton = $('.sc-jrcTuL.iOycLu>button')

let div = document.createElement('div')
div.className = 'cinta-content'
div.style.width = '96%'
div.style.display = 'flex'
div.style.justifyContent = 'space-between'

$cinta.insertAdjacentElement('afterbegin', div)

let $cintaContent = $('.cinta-content')
$cintaContent.append($cintaTexto, $cintaBoton)

let $blue = document.createElement('div')
$blue.style.background = azulOscuro
$blue.style.width = '10px'
$blue.style.borderRadius = '4px 0 0 4px'
$blue.style.border = '1px 0 0 1px solid rgb(231, 231, 231)'

$cinta.insertAdjacentElement('afterbegin', $blue)

$cinta.insertAdjacentHTML(
  'afterend',
  `
  <style> .sc-jrcTuL.iOycLu { height: 3.1rem; } .sc-jrcTuL.iOycLu>div:nth-child(1) { height: 100%; } @media (max-width: 768px) { .sc-jrcTuL.iOycLu { height: 5.5rem; } .sc-jrcTuL.iOycLu>div:nth-child(1) { height: 100%; } } </style>
  `
)
