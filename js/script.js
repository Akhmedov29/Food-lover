window.addEventListener("DOMContentLoaded", () => {
  let tab_content = document.querySelectorAll(".tab_content"),
    tabheader = document.querySelectorAll(".tabheader__item"),
    tabParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tab_content.forEach((tabs) => {
      tabs.classList.add("hide");
      tabs.classList.remove("show");
    });
    tabheader.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(index = 0) {
    tab_content[index].classList.add("show", "fade");
    tab_content[index].classList.remove("hide");
    tabheader[index].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent(0);

  tabParent.addEventListener("click", (nishon) => {
    const target = nishon.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabheader.forEach((item, index) => {
        if (item === target) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  // loader start
  const loader = document.querySelector(".load-container");
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);

  const deadline = "2025-12-31";

  function getTimeRemaining(tugashvaqti) {
    const time = Date.parse(tugashvaqti) - Date.parse(new Date());

    let days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((time / (1000 * 60)) % 60),
      seconds = Math.floor((time / 1000) % 60);

    return { total: time, days, hours, minutes, seconds };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      interval = setInterval(updateClock, 1000);

    function formatNumber(raqam) {
      return raqam < 10 ? `0${raqam}` : raqam;
    }

    function updateClock() {
      const time = getTimeRemaining(endtime);
      days.textContent = formatNumber(time.days);
      hours.textContent = formatNumber(time.hours);
      minutes.textContent = formatNumber(time.minutes);
      seconds.textContent = formatNumber(time.seconds);

      if (time.total <= 0) {
        clearInterval(interval);
      }
    }
    updateClock();
  }
  setClock(".timer", deadline);

  // modal start
  let modalOpenBtns = document.querySelectorAll(".data-modal"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector(".modal__close");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }
  function closemodal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
  modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  modalCloseBtn.addEventListener("click", closemodal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closemodal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closemodal();
    }
  });

  // form
  const form = document.querySelector("form"),
    telegram_token = "7247212975:AAGNYQaKIjNeiaNuk91EGkKmXZcxQS6-fkc",
    chat_id = 6905298211;

  const message = {
    loading: "Loading...",
    success: "Thanks for contact us!",
    failure: "Something went wrong!",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMessage = document.createElement("div");
    statusMessage.textContent = message.loading;
    form.append(statusMessage);

    const formData = new FormData(form);
    const objects = {};
    formData.forEach((value, key) => {
      objects[key] = value;
    });

    fetch(`https://api.telegram.org/bot${telegram_token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id,
        text: `Ismi: ${objects.name} \nTelefon Raqam: ${objects.phone}`,
      }),
    })
      .then(() => (statusMessage.textContent = message.success))
      .catch(() => (statusMessage.textContent = message.failure))
      .finally(() =>
        setTimeout(() => {
          statusMessage.remove();
        }, 2000)
      );
  });

  // slider
  const slides = document.querySelectorAll(".offer__slide"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total")

  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(index) {
    if (index > slides.length) slideIndex = 1;
    if (index < 1) slideIndex = slides.length;

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";

    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
    total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;
  }

  function moveSlides(n) {
    showSlides((slideIndex += n));
  }

  prev.addEventListener("click", () => {
    moveSlides(-1);
  });

  next.addEventListener("click", () => {
    moveSlides(1);
  });
});