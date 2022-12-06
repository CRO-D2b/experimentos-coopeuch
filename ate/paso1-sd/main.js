const $$ = (e) => document.querySelectorAll(e)

let domLinks = $$('.link')

let cont = document.getElementsByClassName('container-fluid')[0]
cont.insertAdjacentHTML(
  'beforebegin',
  `
  <div class="pdfview-container"> <iframe class="pdfview" type="application/pdf"></iframe> <div class="pdfview-container-close"> <button name="Cerrar" class="btn btn-secondary" type="button"> Cerrar </button> </div> </div> <style> .pdfview-container { font-family: 'Ubuntu'; position: absolute; display: none; flex-direction: column; z-index: 20000; width: 100%; height: 100%; align-items: center; background-color: rgba(0, 0, 0, 0.6); } .pdfview { position: absolute; top: 15rem; border-radius: 0.5rem; width: 75%; height: 50rem; } .pdfview-container-close { position: absolute; display: block; top: 65rem; } .ptop1 { margin-bottom: 1.5rem; } @media (max-width: 768px) { .pdfview-container { height: 150%; } .pdfview { position: absolute; width: 90%; height: 40rem; top: 40rem; } .pdfview-container-close { position: absolute; display: block; top: 80rem; } } </style>
  `
)

domLinks.forEach((link) => {
  let span = document.createElement('span')
  span.classList.add('view-pdf')
  span.textContent = link.firstElementChild.textContent
  span.style.color = 'red'
  span.style.textDecoration = 'underline'
  span.style.cursor = 'pointer'
  link.insertAdjacentElement('beforebegin', span)
  link.style.display = 'none'
})

let conditions = domLinks[0].parentElement
conditions.insertAdjacentHTML(
  `beforebegin`,
  `
  <p class="ptop0 ptop1"> <strong >Necesitas contratar un Seguro de Desgravamen para solicitar el Crédito de Consumo.</strong > </p> <p class="ptop0 ptop1"> Puedes elegir el seguro que nosotros te ofrecemos para cursar el crédito 100% digital, o traer a nuestras sucursales uno de otra compañía y continuar la solicitud de manera presencial. </p> <style> .ptop1 { margin-bottom: 1.5rem; } </style>
  `
)

const viewpdf = $$('.view-pdf')
const pdfContainer = $$('.pdfview-container')[0]
const pdfview = $$('.pdfview')[0]

viewpdf.forEach((elem) => {
  elem.addEventListener('click', () => {
    let pdfSource = elem.nextElementSibling.firstChild.href
    pdfview.src = pdfSource
    pdfContainer.style.display = 'flex'
  })
})

pdfContainer.addEventListener('click', () => {
  pdfContainer.style.display = 'none'
  pdfview.src = ''
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    pdfContainer.style.display = 'none'
    pdfview.src = ''
  }
})

const check = $$('.customCheck')[0]
const checkClone = check.cloneNode(true)
const checkInput = checkClone.firstElementChild.firstElementChild
checkInput.checked = false
const checkText = checkClone.firstChild.lastElementChild
checkText.textContent = 'Aceptar Seguro Desgravamen'
check.insertAdjacentElement('afterend', checkClone)
check.style.display = 'none'

let segurosDivDesc = checkClone.parentElement.parentElement.parentElement
segurosDivDesc.insertAdjacentHTML(
  'afterend',
  `
  <div id="warning" class="errorCondiciones"> <p> <img src="./static/media/iconAlertDanger.b8e8098d.svg" class="icon" alt="alertPMT" /><span> Necesitas aceptar el seguro de desgravamen para avanzar.</span> </p> </div>
  `
)

const warning = document.getElementById('warning')
warning.style.display = 'none'

const btn = document.getElementsByName('Simular')[0]
const btnClone = btn.cloneNode(true)
btn.insertAdjacentElement('afterend', btnClone)
btn.style.display = 'none'

const segurosDiv = document.getElementsByClassName('card col-12')[1]
segurosDiv.firstElementChild.firstElementChild.firstElementChild.textContent =
  'Seguro de Desgravamen'

btnClone.addEventListener('click', () => {
  if (!checkInput.checked) {
    warning.style.display = 'block'
    segurosDiv.style.boxShadow = '0px 0px 15px rgb(255 0 0 / 50%)'
  }
})

checkInput.addEventListener('change', () => {
  checkInput.checked
    ? (() => {
        btnClone.style.display = 'none'
        btn.style.display = 'block'
      })()
    : (() => {
        btn.style.display = 'none'
        btnClone.style.display = 'block'
      })()
})
