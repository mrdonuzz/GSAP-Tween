let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");
let reverse = document.querySelector(".reverse");
let seek = document.querySelector(".seek");
let speedup = document.querySelector(".speedup");
let slowmo = document.querySelector(".slowmo");

let tween = gsap.to(".box1", {
  x: 300,
  rotate: 360,
  duration: 5,
  yoyo: true,
  repeat: -1,
});

play.addEventListener("click", () => tween.play());
pause.addEventListener("click", () => tween.pause());
restart.addEventListener("click", () => tween.restart());
reverse.addEventListener("click", () => tween.reverse());
seek.addEventListener("click", () => tween.seek(2));
speedup.addEventListener("click", () => tween.timeScale(2));
slowmo.addEventListener("click", () => tween.timeScale(0.5));
