let addProductNotesBtn = document.getElementById('addProductNotesBtn');
let noteList = document.querySelector('.noteList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addProductNotesBtn.addEventListener('click', function () {
  let newProductNotes = ingredeintDiv.cloneNode(true);
  let input = newProductNotes.getElementsByTagName('input')[0];
  input.value = '';
  noteList.appendChild(newProductNotes);
});

/*Menu bar ob mobile device */
$(document).ready(function(){
  $('#menu-icon').click(function(){
    $('#navbar').toggleClass('open')
  });
});
