let script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

let diaText = document.getElementsByClassName('labelInput')[1]
diaText.innerHTML =
  'DÍa de pago <span class="disclaimer">(Puedes pagar con cuenta vista o Monedero)</span> <style> .disclaimer { color: #666; } </style>'

ERROR_MSG = ' Aumenta la cantidad de cuotas o indica un monto menor'

var target = $('.card-body-condicion')[0]

var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    var newNodes = mutation.addedNodes
    if (newNodes !== null) {
      var $nodes = $(newNodes)
      $nodes.each(() => {
        var $node = $(this)
        if ($node.hasClass('errorCondiciones')) {
          let errorText =
            document.getElementsByClassName('errorCondiciones')[0].firstChild
              .lastChild
          errorText.textContent = ERROR_MSG
        }
      })
    }
  })
})

var config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
}

observer.observe(target, config)
