let script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
document.getElementsByTagName('head')[0].appendChild(script)
let p =
  document.getElementsByClassName('card-header')[0].childNodes[0].childNodes[1]
p.insertAdjacentHTML(
  'afterend',
  `  <span class="iconAdded">    <img src="https://www.coopeuch.cl/media/imagegallery/images/arrow_down_lightblue.svg" alt="despelgar"> </span>  <style>    .iconAdded {      width: 2rem;      position: absolute;      top: 43%;      right: 2%;      transform: translate(0%, 0%);    }    .rotate {      transform: rotate(180deg);      transition: .5s ease-in-out;    }    .card-header {      cursor: pointer;    }       .card .container-fluid{      display: none;    }  </style>`
)
setTimeout(() => {
  $(document).ready(function () {
    $('.card-header').click(function () {
      $header = $(this)
      $content = $header.next()
      $header.find('.iconAdded>img').toggleClass('rotate')
      $content.slideToggle()
    })
  })
}, 1000)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const button = document.querySelector('button')
const tooltip = document.querySelector('#tooltip')
const exitBtn = document.querySelector('.exit-tooltip-btn')

const calcularPosicionTooltip = () => {
  // Calculamos las coordenadas del icono.
  const x = button.offsetLeft
  const y = button.offsetTop

  // Calculamos el tamaño del tooltip.
  const anchoTooltip = tooltip.clientWidth
  const altoTooltip = tooltip.clientHeight

  // Calculamos donde posicionaremos el tooltip.
  const izquierda = x - anchoTooltip / 2 + 15
  const arriba = y + altoTooltip - 160

  tooltip.style.left = `${izquierda}px`
  tooltip.style.top = `${arriba}px`
}

window.addEventListener('load', () => calcularPosicionTooltip())
window.addEventListener('resize', () => calcularPosicionTooltip())

button.addEventListener('click', () => {
  tooltip.classList.add('active')
  button.classList.add('active')
  calcularPosicionTooltip()
})

exitBtn.addEventListener('click', () => {
  tooltip.classList.remove('active')
  button.classList.remove('active')
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let timer
button.addEventListener('mouseleave', () => {
  timer = setTimeout(() => {
    tooltip.classList.remove('active')
  }, 500)
})

tooltip.addEventListener('mouseenter', () => clearTimeout(timer))
tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('active'))
