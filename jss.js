const robot = document.getElementById("robot");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

const leftEye = document.querySelector(".eye.left .pupil");
const rightEye = document.querySelector(".eye.right .pupil");
const arms = document.querySelectorAll(".arm");

// Función para mover los ojos
function moveEyes(state) {
  switch (state) {
    case "bothOpen":
      leftEye.style.transform = "translate(0, 0) scale(1)";
      rightEye.style.transform = "translate(0, 0) scale(1)";
      break;
    case "oneOpen":
      leftEye.style.transform = "translate(0, 0) scale(1)";
      rightEye.style.transform = "translate(0, 0) scale(0.1, 1)";
      break;
    case "closed":
      leftEye.style.transform = "scale(0.1, 1)";
      rightEye.style.transform = "scale(0.1, 1)";
      break;
  }
}

// Función para mover los brazos
function moveArms(action) {
  arms.forEach((arm) => {
    if (action === "coverEyes") {
      arm.style.transform = "translateY(-30px) rotate(-20deg)";
    } else if (action === "rest") {
      arm.style.transform = "translateY(0) rotate(0deg)";
    }
  });
}

// Animaciones según el campo
usernameField.addEventListener("focus", () => {
  moveEyes("bothOpen");
  moveArms("rest");
});

passwordField.addEventListener("focus", () => {
  moveEyes("closed");
  moveArms("coverEyes");
});

showPasswordCheckbox.addEventListener("change", () => {
  if (showPasswordCheckbox.checked) {
    moveEyes("oneOpen");
    moveArms("rest");
  } else {
    moveEyes("closed");
    moveArms("coverEyes");
  }
});

// Animación de parpadeo automático
function blinkEyes() {
  moveEyes("closed");
  setTimeout(() => moveEyes("bothOpen"), 200);
}

setInterval(blinkEyes, 4000); // Parpadeo cada 4 segundos

// Movimiento sutil de la cabeza
function animateHead() {
  robot.style.transform = "rotate(2deg)";
  setTimeout(() => {
    robot.style.transform = "rotate(-2deg)";
    setTimeout(() => {
      robot.style.transform = "rotate(0deg)";
    }, 300);
  }, 300);
}

setInterval(animateHead, 5000); // Movimiento cada 5 segundos
