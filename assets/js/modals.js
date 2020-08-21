var modal = document.getElementById('career-modal')

var btn = document.getElementById('career-button')

var span = document.getElementById('close-career')

btn.onclick = function (event) {
  event.preventDefault();
  modal.style.display = 'block'
}

span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  } else if (event.target === modalTwo) {
    modalTwo.style.display = 'none'
  }
}

var modalTwo = document.getElementById('leadership-modal')

var btnTwo = document.getElementById('leadership-button')

var spanTwo = document.getElementById('close-leadership')

btnTwo.onclick = function () {
  modalTwo.style.display = 'block'
}
spanTwo.onclick = function () {
  modalTwo.style.display = 'none'
}
