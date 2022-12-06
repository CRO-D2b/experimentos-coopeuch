let script = document.createElement('script')
script.src =
  'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'
document.head.append(script)

document.querySelector('button').addEventListener('click', () => {
  var element = document.body

  var opt = {
    margin: 1,
    filename: 'resumen.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save()
})
