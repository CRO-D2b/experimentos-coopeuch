const resumen = Array.from(
  document.getElementsByClassName('resumenCredito')[0].childNodes
)

const dataCredito = { header: {}, content: {} }

const header = resumen.shift().firstElementChild

const monto = header.firstElementChild.lastElementChild.textContent
dataCredito['header']['Monto'] = monto

const valorCuota = header.lastElementChild.lastElementChild.textContent
dataCredito['header']['ValorCuota'] = valorCuota

resumen.pop()

resumen.forEach((row) => {
  let key =
    row.firstElementChild.firstElementChild.firstElementChild.firstElementChild
      .firstElementChild.textContent
  let val =
    row.firstElementChild.firstElementChild.firstElementChild.lastElementChild
      .firstElementChild.textContent
  dataCredito['content'][key] = val
  if (key === 'Tasa') dataCredito['header'][key] = val
  if (key === 'Plazo') dataCredito['header'][key] = val.split(' ')[0]
})

sessionStorage.setItem('dataCredito', JSON.stringify(dataCredito))
