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

$('.hide-comment').hide()

$('.show-comment').on('click', () => {
  $.ajax({
    url: 'https://sheet.best/api/sheets/34e1e916-ff17-44e7-87fa-4f7868c42d16',
    type: 'get',
    dataType: 'json',
    success: (result) => {
      if (!result) {
        $('.comment-field').html(`
        <h2 class="text-center">Tidak ada Komentar</h2>
        `)
      } else {
        $('.show-comment').toggle()
        $('.hide-comment').toggle()
        $('.comment-field').html('')
        $.each(result, (i, data) => {
          $('.comment-field').append(`
            <div class="row">
              <div class="col">
                <div class="card mb-3">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img src="img/profil.png" alt="Komentar" width="50px">
                      ${data.name}
                    </h5>
                    <h6 class="ms-5">${data.message}</h6>
                    <p class="float-end">Pada tanggal ${data.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          `)
        })
      }
    }
  })
})

$('.hide-comment').on('click', () => {
  $('.comment-field').empty('')
  $('.hide-comment').toggle()
  $('.show-comment').toggle()
})