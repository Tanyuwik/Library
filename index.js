console.log(
  "1.Верстка валидная +10\n2.Вёрстка семантическая +16\n3.Вёрстка соответствует макету +54\n4.Общие требования к верстке +20\n5.Оценка за задание 100 баллов"
);

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navbar_header");
  const burgerButton = document.getElementById("burger");
  const burgerImage = burgerButton.querySelector("img");
  const menuProfile = document.querySelector(".register_profile");
  const profileButton = document.getElementById("img-profile");
  const profileImage = profileButton.querySelector("img");

  let burgerMenuActive = false;

  burgerButton.addEventListener("click", (event) => {
    burgerMenuActive = !burgerMenuActive;
    profileCard.style.display = "none";
    menu.style.display = "block";
    event.stopPropagation();
    menu.classList.toggle("burger_active");
    toggleBurgerImage(burgerImage);
  });

  document.addEventListener("click", (event) => {
    if (
      burgerMenuActive &&
      !menu.contains(event.target) &&
      event.target !== burgerButton
    ) {
      burgerMenuActive = false;
      menu.classList.remove("burger_active");
      resetBurgerImage(burgerImage);
    }
  });

  profileButton.addEventListener("click", (event) => {
    // Закрыть меню бургера, если оно активно
    if (burgerMenuActive) {
      burgerMenuActive = false;
      menu.classList.remove("burger_active");
      resetBurgerImage(burgerImage);
    }

    
    profileCard.style.display = "block";
    event.stopPropagation();
    menuProfile.classList.toggle("profile_active");
  });

  // Определение функции resetProfileCard
  function resetProfileCard(imageElement) {
    // Ваша логика сброса изображения профиля
    // Например, можно изменить src изображения на изображение по умолчанию
    imageElement.src = "images/icon/profile.svg";
  }

  document.addEventListener("click", (event) => {
    if (!profileCard.contains(event.target) && event.target !== profileButton) {
      profileCard.classList.remove("profile_active");
      resetProfileCard(profileImage);
    }
  });

  // Получаем ссылки и блоки по их классам или ID
  const loginLink = document.querySelector(
    ".profile_links[href='#login-card']"
  );
  const loginButton = document.querySelector(".log_in button");
  const loginWrapper = document.querySelector(".login_wrapper");
  const loginCard = document.getElementById("login-card");
  const profileCard = document.getElementById("register-profile");
  const registerCard = document.getElementById("register-card");
  const registerWrapper = document.querySelector(".register_wrapper");
  const signUpButton = document.querySelector(".sign_up button");
  const buyButton = document.querySelector(".buy_book");

  // Функция для открытия формы "Login" и закрытия "Profile"
  function openLoginForm() {
    // Закрываем блок "Profile"
    profileCard.style.display = "none";

    // Открываем фоновое затемнение
    loginWrapper.style.display = "block";

    // Открываем форму "Login" с анимацией
    loginCard.style.opacity = "1";
    loginCard.style.visibility = "visible";
  }

  // Функция для открытия формы регистрации и закрытия "Profile"
  function openRegisterForm() {
    // Закрываем блок "Profile"
    profileCard.style.display = "none";

    // Открываем фоновое затемнение
    registerWrapper.style.display = "block";

    // Открываем форму регистрации с анимацией
    registerCard.style.opacity = "1";
    registerCard.style.visibility = "visible";
  }

  // Функция для закрытия формы "Login" и открытия "Profile"
  function closeLoginForm() {
    profileCard.style.display = "block";
    loginCard.style.opacity = "0";
    loginCard.style.visibility = "hidden";
    loginWrapper.style.display = "none";
  }

  // Добавляем обработчик события для ссылки "Log In"
  loginLink.addEventListener("click", openLoginForm);
  loginButton.addEventListener("click", openLoginForm);
  buyButton.addEventListener("click", openLoginForm);

  // Добавляем обработчик события для кнопки закрытия
  const closeButton = loginCard.querySelector(".close_btn");
  closeButton.addEventListener("click", closeLoginForm);

  // Добавляем обработчик события для области login_wrapper
  loginWrapper.addEventListener("click", (event) => {
    if (event.target === loginWrapper) {
      closeLoginForm();
    }
  });

  // Функция для закрытия формы "Login" и открытия "Profile"
  function closeRegisterForm() {
    profileCard.style.display = "block";
    loginCard.style.opacity = "0";
    loginCard.style.visibility = "hidden";
    registerWrapper.style.display = "none";
  }

  // Добавляем обработчик события для кнопки закрытия
  const closeBtn = registerCard.querySelector(".close_btn");
  closeBtn.addEventListener("click", closeRegisterForm);

  // Добавляем обработчик события для области register_wrapper
  registerWrapper.addEventListener("click", (event) => {
    if (event.target === registerWrapper) {
      closeRegisterForm();
    }
  });

  // Получаем ссылку на форму регистрации
  const registerLink = document.querySelector(
    ".profile_links[href='#register-card']"
  );

  // Добавляем обработчик события для ссылки "Register"
  registerLink.addEventListener("click", openRegisterForm);

  // Получаем кнопку закрытия (крестик) в форме регистрации
  const registerCloseButton = registerCard.querySelector(".close_btn");

  // Добавляем обработчик события для кнопки закрытия в форме регистрации
  registerCloseButton.addEventListener("click", () => {
    profileCard.style.display = "block";
    registerCard.style.opacity = "0";
    registerCard.style.visibility = "hidden";
    loginCard.style.opacity = "0";
    loginCard.style.visibility = "hidden";
    registerWrapper.style.display = "none";
  });

  // Получаем все ссылки в меню
  const menuLinks = menu.querySelectorAll(".nav__link");

  // Добавляем обработчик события клика для каждой ссылки
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Скрываем меню и возвращаем изображение бургера
      menu.classList.remove("burger_active");
      resetBurgerImage(burgerImage);
    });
  });

  // Функция для переключения изображения бургера
  function toggleBurgerImage(imageElement) {
    const currentImage = imageElement.src;
    const secondImagePath = "images/icon/cross.svg";

    if (currentImage.endsWith("images/icon/burger.svg")) {
      imageElement.src = secondImagePath;
    } else {
      imageElement.src = "images/icon/burger.svg";
    }
  }

  // Функция для возвращения изображения бургера в исходное состояние
  function resetBurgerImage(imageElement) {
    imageElement.src = "images/icon/burger.svg";
  }

  const images = document.querySelectorAll(".images img");
  const carousels = document.querySelectorAll(".carousel");
  const paginationDots = document.querySelectorAll(
    ".carousel_pagination, .carousel_pagination_tablet, .carousel_pagination_tablet2"
  );

  // Функция для обновления активной точки пагинации
  function updatePaginationDots(index) {
    // Удаление класса "active" у всех точек пагинации
    paginationDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Добавление класса "active" к текущей активной точке
    paginationDots[index].classList.add("active");
  }

  carousels.forEach((carousel, index) => {
    carousel.addEventListener("click", () => {
      // Вызываем функцию updatePaginationDots при клике на слайд
      updatePaginationDots(index);
    });
  });

  let currentSlide = 0;

  // Функция для отображения текущего набора слайдов (3 картинки)
  function showSlides(startIndex) {
    for (let i = 0; i < images.length; i++) {
      if (i >= startIndex && i < startIndex + 3) {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
    }
  }

  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      handleDotClick(index);
    });
  });

  // Инициализация слайдера
  showSlides(currentSlide);

  // Добавление обработчиков событий для кнопок "влево" и "вправо"
  const prevButton = document.querySelector(".image_left");
  const nextButton = document.querySelector(".image_right");

  // Функция для обработки клика на точке пагинации
  function handleDotClick(index) {
    currentSlide = index * 1; // Предполагаем, что у вас 1 слайд на экране
    showSlides(currentSlide);
    updatePaginationDots(index); // Обновление активной точки
  }

  // Функция для обработки нажатия на кнопку "влево"
  function handlePrevClick() {
    currentSlide = Math.max(currentSlide - 1, 0); // Предполагаем, что у вас 1 слайд на экране
    showSlides(currentSlide);
    const activeDotIndex = currentSlide / 1;
    updatePaginationDots(activeDotIndex); // Обновление активной точки
  }

  // Функция для обработки нажатия на кнопку "вправо"
  function handleNextClick() {
    currentSlide = Math.min(currentSlide + 1, images.length - 1); // Предполагаем, что у вас 1 слайд на экране
    showSlides(currentSlide);
    const activeDotIndex = currentSlide / 1;
    updatePaginationDots(activeDotIndex); // Обновление активной точки
  }

  // Добавление обработчиков событий для кнопок "влево" и "вправо"
  prevButton.addEventListener("click", handlePrevClick);
  nextButton.addEventListener("click", handleNextClick);

  // Получаем ссылки на радиокнопки и контент для каждого сезона
  const seasonsRadio = document.querySelectorAll(".input_seasons");
  const bookContainers = document.querySelectorAll(".book-container > div");

  // Добавляем обработчик события для радиокнопок
  seasonsRadio.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Определите выбранный сезон
      const selectedSeason = this.value;

      // Переключаем анимацию для всех контейнеров
      bookContainers.forEach((container) => {
        if (container.classList.contains(`book_${selectedSeason}`)) {
          // Отобразить контейнер и добавить анимацию проявления
          container.style.display = "block";
          container.classList.remove("fade-out");
          container.classList.add("fade-in");
        } else {
          // Скрыть контейнер и добавить анимацию затухания
          container.classList.remove("fade-in");
          container.classList.add("fade-out");
          setTimeout(() => {
            container.style.display = "none";
          }, 300); // Подождать 0.5 секунды (время анимации) перед скрытием
        }
      });
    });
  });
});
