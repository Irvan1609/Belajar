const showComment = (result) => {
  if (!result) {
    $('.comment-field').html(`
        <h2 class="text-center">Tidak ada Komentar</h2>
        `)
  } else {
    $('.comment-field').empty()
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
                    <p class="ms-5 lead">${data.message}</p>
                    <p class="float-end">Pada tanggal
                    ${data.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          `)
    })
  }
}