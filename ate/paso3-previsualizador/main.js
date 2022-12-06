let script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

let cont = document.getElementsByClassName('container-fluid')[0]
cont.insertAdjacentHTML(
  'beforebegin',
  `
  <div class="pdfview-container"> <iframe class="pdfview" type="application/pdf"></iframe> </div> <style> .pdfview-container { font-family: 'Ubuntu'; position: absolute; display: none; top: 0; z-index: 20000; width: 100%; height: 100%; justify-content: center; background-color: rgba(0, 0, 0, 0.5); } .pdfview { position: absolute; top: 20rem; border-radius: 0.5rem; width: 75%; height: 50rem; } @media (max-width: 768px) { .pdfview-container { height: 150%; } .pdfview { width: 90%; height: 40rem; top: 25rem } } </style>
  `
)

let links = Array.from(document.getElementsByClassName('icon-link'))
links.forEach((link) =>
  link.insertAdjacentHTML(
    'beforebegin',
    `
    <div class="view-pdf"> <img src="https://coopeuch-media.s3.amazonaws.com/coopeuch-svg/otrasImagenes/eye%20open%201.png" alt="svgpreview" /> </div> <style> .view-pdf { display: inline-flex; cursor: pointer; } .view-pdf img { width: 20px; } .view-pdf::after { content: 'Previsualizar'; font-size: 13px; color: #f42534; padding-right: 10px; padding-left: 10px; } @media (max-width: 768px) { .view-pdf{ display:none; } } </style>
    `
  )
)

const pdfcontainer = document.getElementsByClassName('pdfview-container')[0]
const pdfview = document.getElementsByClassName('pdfview')[0]

setTimeout(() => {
  $(document).ready(() => {
    $pdfcont = $(this).find('.pdfview-container')
    $previewbtn = $(this).find('.view-pdf')
    $previewbtn.on('click', (e) => {
      let pdfSource = e.currentTarget.parentElement.lastChild.firstChild.href
      pdfContainer.src = pdfSource
      pdfContainer.style.display = 'flex'
    })
    $pdfcont.on('click', () => {
      pdfContainer.style.display = 'none'
    })
    $(document).on('keydown', (e) => {
      if (e.keyCode === 27) pdfContainer.style.display = 'none'
    })
  })
}, 600)
