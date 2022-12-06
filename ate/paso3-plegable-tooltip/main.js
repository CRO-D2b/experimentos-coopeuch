let script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

let p =
  document.getElementsByClassName('card-header')[0].childNodes[0].childNodes[1]
p.insertAdjacentHTML(
  'afterend',
  `  <span class="iconAdded">    <img src="https://www.coopeuch.cl/media/imagegallery/images/arrow_down_lightblue.svg" alt="despelgar"> </span>  <style>    .iconAdded {      width: 2rem;      position: absolute;      top: 43%;      right: 2%;      transform: translate(0%, 0%);    }    .rotate {      transform: rotate(180deg);      transition: .5s ease-in-out;    }    .card-header {      cursor: pointer;    }       .card .container-fluid{      display: none;    }  </style>`
)

let card = document.getElementsByClassName('card-header')[0].parentElement
card.insertAdjacentHTML(
  'beforeend',
  `
  <div class="tooltip"> <div class="thumb"> <img src="https://www.coopeuch.cl/media/wysiwyg/Ilustracion_tooltips2_1.png" alt="" /> </div> <div class="info"> <div class="exit-tooltip-btn-container"> <button type="button" class="exit-tooltip-btn">x</button> </div> <p class="description">¡Recuerda revisar tus contratos aqui!</p> </div> </div> <style> .tooltip { font-family: 'Ubuntu'; display: flex; position: absolute; top: 0; right: 0; background-color: white; border-radius: 10px; box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2); width: 22rem; height: 4rem; z-index: -1; opacity: 0; transition: 0.5s ease all; } .tooltip.visible { z-index: 1; opacity: 1; } .tooltip::after { content: ''; display: inline-block; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 15px solid #fff; filter: drop-shadow(0px -4px 5px rgba(0, 0, 0, 0.2)); position: absolute; top: -15px; left: calc(81%); } .tooltip .thumb { display: flex; align-items: center; width: 25%; justify-content: space-around; } .tooltip .thumb img { width: 90%; height: 90%; object-fit: contain; vertical-align: top; } .tooltip .exit-tooltip-btn-container { display: flex; flex-direction: row; justify-content: end; } .tooltip .exit-tooltip-btn-container .exit-tooltip-btn { font-size: 0.9rem; color: black; background-color: white; border-radius: 5px; box-shadow: 0px 0px 0px; padding: 0px 0px; border-width: 0; width: 5%; margin-top: -6px; min-height: 0; } .exit-tooltip-btn:hover { cursor: pointer; } .tooltip .info { width: 75%; padding: 10px 10px 10px 10px; display: flex; flex-direction: column; } .tooltip .info .description { font-size: 14px; padding-top: 0; } @media (max-width: 768px) { .pbottom20 { width: 90% } .tooltip { width: 20rem; height: 4rem; } .tooltip .info .description { font-size: 12px; } } </style>
  `
)

const setPosition = () => {
  let arrow =
    document.getElementsByClassName('iconAdded')[0].parentElement.parentElement
  let ttp = document.getElementsByClassName('tooltip')[0]
  ttp.style.left = arrow.offsetLeft + ttp.clientWidth * 1.42 + 'px'
  ttp.style.top = arrow.offsetTop + ttp.clientHeight * 1.7 + 'px'
}

window.addEventListener('load', () => setPosition())
window.addEventListener('resize', () => setPosition())

const cardHeader = document.getElementsByClassName('card-header')[0]

setTimeout(() => {
  setPosition()
  $(document).ready(() => {
    card.style.border = '2px solid #00a1df'
    $tooltip = $(this).find('.tooltip')
    $tooltip.addClass('visible')
    cardHeader.addEventListener('click', () => {
      card.style.border = '0'
      $tooltip.removeClass('visible')
      $header = $(this)
      $content = $header.next()
      $header.find('.iconAdded>img').toggleClass('rotate')
      $content.slideToggle()
    })
    $('.exit-tooltip-btn').click(() => {
      card.style.border = '0'
      $tooltip.removeClass('visible')
    })
  })
}, 500)
