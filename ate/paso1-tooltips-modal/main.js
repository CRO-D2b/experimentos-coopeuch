let script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

let p = document.getElementsByClassName('IRMontoCuota')[0]
p.insertAdjacentHTML(
  'beforebegin',
  `
  <span class="help-symbol" id="modify-help"> <img src="https://www.coopeuch.cl/media/wysiwyg/TOOLTIP.png" alt="help symbol" /> </span><div class="tooltip" id="modify-credit-tooltip"> <div class="exit-tooltip-btn-container"> <button type="button" class="exit-tooltip-btn" id="exit-modify-tooltip" > x </button> </div> <p class="title">¿Necesitas modificar tu crédito?</p> <p class="description"> Al editar el monto y/o plazo, recuerda que no puedes superar la cuota indicada. </p> </div> <style> .help-symbol { cursor: pointer; width: 1rem; } .tooltip { font-family: 'Ubuntu'; display: flex; flex-direction: column; padding: 10px 10px 10px 10px; position: absolute; font-size: 12px; top: 0; left: 0; background-color: white; border-radius: 10px; box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2); width: 14rem; height: 7rem; z-index: -1; opacity: 0; transition: 0.2s ease all; } .tooltip.visible { z-index: 1; opacity: 1; } .help-symbol img { width: 5%; } #where-to-pay-tooltip::after { content: ''; display: inline-block; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 15px solid #fff; filter: drop-shadow(0px -4px 5px rgba(0, 0, 0, 0.2)); position: absolute; top: -15px; left: calc(50%); } #modify-credit-tooltip::after { content: ''; display: inline-block; border-left: 15px solid transparent; border-right: 15px solid transparent; border-top: 15px solid #fff; filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2)); position: absolute; bottom: -15px; left: calc(35%); } .tooltip .exit-tooltip-btn-container { display: flex; flex-direction: row; justify-content: end; } .tooltip .exit-tooltip-btn-container .exit-tooltip-btn { font-size: 0.9rem; color: black; background-color: white; border-radius: 5px; box-shadow: 0px 0px 0px; padding: 0px 0px; border-width: 0; width: 5%; margin-top: -6px; min-height: 0; } .exit-tooltip-btn:hover { cursor: pointer; background-color: ghostwhite; } .tooltip .description { text-align: left !important; padding-top: 5px; } .tooltip .title { text-align: left !important; font-weight: 600; padding-top: 0; } </style>
  `
)

let q = document.getElementsByClassName('card-body-condicion')[0].childNodes[1]
  .childNodes[0].childNodes[0]
q.insertAdjacentHTML(
  'beforeend',
  `
  <span class="help-symbol" id="where-help"> <img src="https://www.coopeuch.cl/media/wysiwyg/TOOLTIP.png" alt="help symbol"/> </span><div class="tooltip" id="where-to-pay-tooltip"> <div class="exit-tooltip-btn-container"> <button type="button" class="exit-tooltip-btn" id="exit-where-tooltip" > x </button> </div> <p class="title">¿Dónde se paga la cuota?</p> <p class="description"> Paga la cuota con tu Monedero Digital en la sección Cuenta Vista. </p> </div>
  `
)

const whelp = document.getElementById('where-help')
const wtpttp = document.getElementById('where-to-pay-tooltip')

const mhelp = document.getElementById('modify-help')
const mcttp = document.getElementById('modify-credit-tooltip')

const setPosition = () => {
  wtpttp.style.left = whelp.offsetLeft - wtpttp.clientWidth * 0.52 + 'px'
  wtpttp.style.top = whelp.offsetTop + wtpttp.clientHeight * 0.35 + 'px'

  mcttp.style.left = mhelp.offsetLeft - mcttp.clientWidth * 0.37 + 'px'
  mcttp.style.top = mhelp.offsetTop - mcttp.clientHeight * 1.2 + 'px'
}

window.addEventListener('load', () => setPosition())
window.addEventListener('resize', () => setPosition())

setTimeout(() => {
  setPosition()
  $(document).ready(function () {
    $modify_tooltip = $(this).find('#modify-credit-tooltip')
    $where_tooltip = $(this).find('#where-to-pay-tooltip')

    $('#where-help').click(() => {
      $where_tooltip.toggleClass('visible')
    })
    $('#exit-where-tooltip').click(() => {
      $where_tooltip.removeClass('visible')
    })
    $('#modify-help').click(() => {
      $modify_tooltip.toggleClass('visible')
    })
    $('#exit-modify-tooltip').click(() => {
      $modify_tooltip.removeClass('visible')
    })
  })
}, 500)

let mtimer
let wtimer

mhelp.addEventListener('mouseenter', () => {
  clearTimeout(mtimer)
  $modify_tooltip.addClass('visible')
})

mhelp.addEventListener('mouseleave', () => {
  mtimer = setTimeout(() => {
    $modify_tooltip.removeClass('visible')
  }, 500)
})

mcttp.addEventListener('mouseleave', () => {
  mtimer = setTimeout(() => {
    $modify_tooltip.removeClass('visible')
  }, 500)
})

mcttp.addEventListener('mouseenter', () => clearTimeout(mtimer))

whelp.addEventListener('mouseenter', () => {
  clearTimeout(wtimer)
  $where_tooltip.addClass('visible')
})

whelp.addEventListener('mouseleave', () => {
  wtimer = setTimeout(() => {
    $where_tooltip.removeClass('visible')
  }, 500)
})

wtpttp.addEventListener('mouseleave', () => {
  wtimer = setTimeout(() => {
    $where_tooltip.removeClass('visible')
  }, 500)
})

wtpttp.addEventListener('mouseenter', () => clearTimeout(wtimer))
