const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// This part is for the quantity counter
document.querySelectorAll(".qtyminus").forEach(function(element) {
    element.addEventListener("click", function() {
      var now = document.querySelector(".qty").value;
      if (!isNaN(now)) {
        if (parseInt(now) - 1 > 0) {
          now--;
        }
        document.querySelector(".qty").value = now;
      }
    });
  });
  
  document.querySelectorAll(".qtyplus").forEach(function(element) {
    element.addEventListener("click", function() {
      var now = document.querySelector(".qty").value;
      if (!isNaN(now)) {
        document.querySelector(".qty").value = parseInt(now) + 1;
      }
    });
  });
  