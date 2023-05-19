// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


let addProductNotesBtn = document.getElementById('addProductNotesBtn');
let noteList = document.querySelector('.noteList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addProductNotesBtn.addEventListener('click', function () {
  let newProductNotes = ingredeintDiv.cloneNode(true);
  let input = newProductNotes.getElementsByTagName('input')[0];
  input.value = '';
  noteList.appendChild(newProductNotes);
});

