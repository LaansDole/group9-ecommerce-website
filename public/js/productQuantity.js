// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


// This part is for the quantity counter
document.querySelectorAll(".qtyminus").forEach(function (element) {
    element.addEventListener("click", function () {
        var now = document.querySelector(".qty").value;
        if (!isNaN(now)) {
            if (parseInt(now) - 1 > 0) {
                now--;
            }
            document.querySelector(".qty").value = now;
        }
    });
});

document.querySelectorAll(".qtyplus").forEach(function (element) {
    element.addEventListener("click", function () {
        var now = document.querySelector(".qty").value;
        if (!isNaN(now)) {
            document.querySelector(".qty").value = parseInt(now) + 1;
        }
    });
});
