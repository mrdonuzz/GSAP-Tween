//1
const box1 = document.querySelector("#box1");
gsap.to(box1, {
  duration: 1,
  x: 300,
  repeat: -1,
  yoyo: true,
});

//2
const box2 = document.querySelector("#box2");
gsap.from(box2, {
  duration: 1.5,
  scale: 0,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});

//3
const box3 = document.querySelector("#box3");
gsap.fromTo(
  box3,
  {
    scale: 2,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 2,
    repeat: -1,
    yoyo: true,
  }
);
