const scriptURL = 'https://script.google.com/macros/s/AKfycbzutzY0fFRlbhUM9NwcVB9klnuUL0dxUeu_akm3ihb7Oin9A-c3ORqhxJeE1ICVNyGg/exec'
const form = document.forms['form-contact']
const btnSubmit = document.querySelector('.btn-submit')
const btnLoading = document.querySelector('.btn-loading')
const contactAlert = document.querySelector('.contact-alert')

form.addEventListener('submit', e => {
  e.preventDefault()
  btnSubmit.classList.toggle('d-none')
  btnLoading.classList.toggle('d-none')
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      btnSubmit.classList.toggle('d-none')
      btnLoading.classList.toggle('d-none')
      contactAlert.classList.toggle('d-none')
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})