const dataSheet = 'https://script.google.com/macros/s/AKfycbzutzY0fFRlbhUM9NwcVB9klnuUL0dxUeu_akm3ihb7Oin9A-c3ORqhxJeE1ICVNyGg/exec'
const form = document.forms['form-comment']
const sheetAPI = 'https://sheet.best/api/sheets/34e1e916-ff17-44e7-87fa-4f7868c42d16'
const btnSubmit = document.querySelector('.btn-submit')
const btnLoading = document.querySelector('.btn-loading')
const commentAlert = document.querySelector('.comment-alert')
$('.hide-comment').hide()

$.getJSON('data/projects.json', result => {
  if (result) {
    let projects = result.projects
    $.each(projects, (i, data) => {
      $('.projects-field').append(`
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="img/projects/${data.img}" class="card-img-top" alt="${data.alias}">
          <div class="card-body">
            <p class="card-text">${data.desk}</p>
          </div>
        </div>
      </div>
    `)
    })
  }
})

$('.fixednav div a').click(function () {
  $('.fixednav div a').removeClass('active');
  $(this).addClass('active');
});

form.addEventListener('submit', e => {
  e.preventDefault()
  btnSubmit.classList.toggle('d-none')
  btnLoading.classList.toggle('d-none')

  let formVal = new FormData(form)
  const comment = Object.fromEntries(formVal.entries());
  console.log(comment)

  fetch(dataSheet, { method: 'POST', body: formVal })
    .then(response => {
      btnSubmit.classList.toggle('d-none')
      btnLoading.classList.toggle('d-none')
      commentAlert.classList.toggle('d-none')
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

$('.hide-comment').on('click', () => {
  $('.comment-field').empty('')
  $('.hide-comment').toggle()
  $('.show-comment').toggle()
})

$('.show-comment').on('click', () => {
  $.getJSON(sheetAPI, result => {
    if (result) {
      showComment(result)
    } else {
      $.getJSON('data/comment.json', result => {
        let comments = result.comments
        showComment(comments)
      })
    }
  })

})