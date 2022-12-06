const $ = (e) => document.querySelectorAll(e)

const info = $('.IRInfo')[0]

info.insertAdjacentHTML(
  'afterend',
  `
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div class="wtsp">
  <button class="wtsp-cta href=''">
    <i class="fa fa-whatsapp"></i> Deseo un monto mayor
  </button>
</div>

<style>
  .wtsp {
    display: flex;
    justify-content: center;
  }
  .wtsp-cta {
    width: 40%;
    border-width: 2px;
    border-color: white;
    color: white;
    background: transparent;
    padding: 0.5rem 1rem;
  }
  .wtsp-cta:hover {
    border-color: white;
    background: white;
    color: #233459;
  }
</style>

  `
)
