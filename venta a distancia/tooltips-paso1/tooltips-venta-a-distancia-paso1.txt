const $$ = (element) => document.querySelectorAll(element)

$$('.modal-container')[0].style.display = 'none'

let sim = $$('.simulacion')[0]
sim.insertAdjacentHTML(
  'beforeend',
  `
  <style> .tooltip-info-step-1 { margin: 0; display: flex; align-items: center; position: absolute; background-color: #fff; padding: 18px 26px 20px; box-sizing: border-box; width: 200%; max-width: 496px; border-radius: 5px; z-index: 1; box-shadow: -4px 10px 10px 4px rgb(0 0 0 / 25%); } .tooltip-info-step-1 > img { height: auto; max-width: 97px; margin-right: 14px; } .tooltip-info-step-1 > figcaption { text-align: left; margin-left: 14px; } .tooltip-info-step-1 > figcaption > h5 { color: #007db7; font-size: 24px; line-height: 30px; margin: 0; } .tooltip-info-step-1 > figcaption > p { color: #383838; font-size: 16px; margin: 0; line-height: 25px; } .tooltip-info-step-1 > button { background: #fff0; outline: none; border: none; position: absolute; right: -15%; width: 40%; top: -20px; } .tooltip-info-step-1 > button > img { max-width: 14px; } .desktop-reminder { top: 10%; } .mobile-reminder { display: none; } .seguro-desgravamen { top: -170%; } .desktop-reminder::before { content: ''; width: 27px; height: 27px; position: absolute; bottom: -13px; left: 50%; overflow: hidden; background: #fff; transform: rotate(45deg); box-shadow: 3px 7px 5px 0px rgb(0 0 0 / 25%); } .mobile-reminder::before { content: ''; width: 27px; height: 27px; position: absolute; top: -13px; left: 50%; overflow: hidden; background: #fff; transform: rotate(45deg); box-shadow: -4px -3px 5px 0px rgb(0 0 0 / 25%); } .seguro-desgravamen::before { content: ''; width: 27px; height: 27px; position: absolute; bottom: 40%; left: -13px; overflow: hidden; background: #fff; transform: rotate(45deg); box-shadow: -3px 7px 5px 0px rgb(0 0 0 / 25%); } @media (max-width: 768px) { .desktop-reminder { display: none; } .ejecutivo { display: none; } .mobile-reminder { display: flex; width: 100%; position: inherit; padding: 5px; margin-top: 1rem; } .tooltip-info-step-1 > button { width: 60px; right: -3%; } .mobile-reminder > figcaption { margin-left: 0; } .mobile-reminder > figcaption > p { font-size: 13px; line-height: 1.4; padding: 0 0 0.5rem; } .mobile-reminder > figcaption > h5 { font-size: 13px; font-weight: bold; padding-top: 0.5rem; } .mobile-reminder > img { max-width: 70px; } .seguro-desgravamen { flex-direction: column; padding: 18px 5px 10px; width: 50%; } .seguro-desgravamen > img { max-width: 70px; margin-right: 0; } .seguro-desgravamen > figcaption > p { text-align: center; line-height: 1.5; font-size: 12px; } .seguro-desgravamen > figcaption { margin-left: 0; } .seguro-desgravamen::before { bottom: 58%; } } </style>
  `
)

const ttp1 = $$('.modal-info-step-1')[0].cloneNode(true)

ttp1.classList.remove('modal-info-step-1')

const ttp2 = ttp1.cloneNode(true)

ttp1.classList.add('tooltip-info-step-1', 'desktop-reminder')
ttp2.classList.add('tooltip-info-step-1', 'seguro-desgravamen')

ttp1.lastElementChild.removeAttribute('onclick')
ttp1.lastElementChild.addEventListener(
  'click',
  () => (ttp1.style.display = 'none')
)
ttp2.lastElementChild.removeAttribute('onclick')
ttp2.lastElementChild.addEventListener(
  'click',
  () => (ttp2.style.display = 'none')
)

ttp1.children[1].firstElementChild.textContent = '¡Ahorremos tiempo!'
ttp1.children[1].lastElementChild.innerHTML =
  'Debes tener a mano estos documentos:<br>- Foto cédula de identidad por ambos lados.<br>- 3 últimas liquidaciones.<br>- 3 últimas cotizaciones.<br>- Comprobante de domicilio.'
ttp2.children[1].innerHTML =
  '<p>Este seguro es necesario para la solicitud del crédito. Te recomendamos tomarlo con nosotros para agilizar el proceso.</p>'

const setPosition = () => {
  ttp1.style.left =
    ttp1.parentElement.clientWidth * 0.5 - ttp1.clientWidth * 0.5 + 'px'
  ttp2.style.left =
    ttp2.previousElementSibling.firstElementChild.firstElementChild
      .clientWidth *
      1.45 +
    'px'
}

const ttp3 = ttp1.cloneNode(true)
ttp3.classList.remove('desktop-reminder')
ttp3.classList.add('mobile-reminder')
$$('.ejecutivo')[0].parentElement.append(ttp3)
$$('.movile-off>.card-body')[0].append(ttp1)
$$('div.listaCheck')[0].children[1].append(ttp2)

setPosition()
window.addEventListener('resize', () => setPosition())
