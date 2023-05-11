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
