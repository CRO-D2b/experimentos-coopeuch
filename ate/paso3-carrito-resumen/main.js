let script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

const dataCredito = JSON.parse(sessionStorage.getItem('dataCredito'))

let abstract = document.getElementsByClassName('card')[0]
abstract.insertAdjacentHTML(
  'beforebegin',
  `
  <div class="card col-12"> <div class="abstract-header row"> <div class="col-12 txtAlignL"> <div class="info"> <div class="title"> <p>Resumen de tu crédito:</p> </div> <div class="description"> <p> Monto: <span id="Monto"></span><br /><span id="Plazo"></span> cuotas de <span id="ValorCuota"></span> - Tasa <span id="Tasa"></span> </p> </div> </div> <span class="abstractIconAdded"> <img src="https://coopeuch-media.s3.amazonaws.com/coopeuch-svg/otrasImagenes/Icon%20Copy%201.svg" alt="despelgar" /> </span> </div> </div> <div class="row"> <div class="resumenCredito"></div> </div> </div> <style> .abstract-header { padding: 20px 0px 30px 20px; cursor: pointer; display: flex; justify-content: space-between; background-color: #233459; color: #fff; } .abstract-header .info { display: flex; align-items: center; font-size: 20px; } .abstract-header .info .title { font-weight: 300; width: 15%; } .abstract-header .info .description { font-weight: 600; margin-left: 20px; } .abstract-header .abstractIconAdded { position: absolute; width: 22px; top: 43%; right: 3.5%; } .abstract-header .abstractIconAdded img { transform: rotate(-180deg); transition: 0.5s ease-in-out; } .abstract-header .abstractIconAdded img.rotate { transform: rotate(0deg); } @media (max-width: 768px) { .abstract-header .info{ padding: 20px 0px 30px 40px; } .abstract-header .info{ display: block; } .abstract-header .info .description { margin-left: 0; } .abstract-header .info { font-size: 15px; margin-left: -40px; } .abstract-header .info .title { width: 100%; } } </style>
  `
)

const abstractHeader = document.getElementsByClassName('abstract-header')[0]
abstractHeader.nextElementSibling.style.display = 'none'

const header = dataCredito['header']
const headerKeys = Object.keys(header)

headerKeys.forEach((key) => {
  document.getElementById(key).textContent = header[key]
})

const content = dataCredito['content']
const contentKeys = Object.keys(content)

let abstractContent = document.getElementsByClassName('resumenCredito')[0]
contentKeys.forEach((key, i) => {
  abstractContent.insertAdjacentHTML(
    'beforeend',
    `
    <div class="row"> <div class="col-12"> <div class="col-12"> <div class="row"> <div class="col-6"> <p></p> </div> <div class="col-6 txtAlignR"> <p></p> </div> </div> </div> </div> </div>
    `
  )

  if ((i + 1) % 2) abstractContent.lastElementChild.classList.add('rowsGray')

  let row =
    abstractContent.lastElementChild.firstElementChild.firstElementChild
      .firstElementChild
  row.firstElementChild.firstElementChild.textContent = key
  row.lastElementChild.firstElementChild.textContent = content[key]
})

setTimeout(() => {
  $(document).ready(() => {
    abstractHeader.addEventListener('click', () => {
      $header = $(this)
      $header.find('.abstractIconAdded>img').toggleClass('rotate')
      $content = $header.next()
      $content.slideToggle()
      if (document.getElementsByClassName('tooltip')[0])
        document
          .getElementsByClassName('tooltip')[0]
          .classList.remove('visible')
    })
  })
}, 500)
