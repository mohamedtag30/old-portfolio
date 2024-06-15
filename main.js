const menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move")
}

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3600,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
// counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      //console.log(target);

      const calc = +counter.innerText;

      const increment = target / 20;
      //console.log(increment);

      if(calc < target) {
          counter.innerText = `${Math.ceil(calc + increment)}`;
          setTimeout(updateCounter, 25)
      } else {
          counter.innerText = target;
      }
  }
  

  updateCounter();
});

// email js
  function validata () {
    let name = document.getElementsByClassName("name");
    let email = document.getElementsByClassName("email");
    let message = document.getElementsByClassName("message");
    let sendBtn = document.getElementsByClassName("send-btn");

    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if(name.value == ""|| email.value == "" || message.value == "") {
        emptyerror();
      } else {
        sendmail(name.value, email.value, message.value);
        success();
      }
    })

  }

  validata();

  function emptyerror() {
    swal({
      title: "Oh No....!",
      text: "Fields cann't be empty!",
      icon: "error",
    });
  }

  
  function success() {
    swal({
      title: "Oh No....!",
      text: "Fields cann't be empty!",
      icon: "error",
    });
  }