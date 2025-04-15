let start = document.querySelector(".start");
let tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });

tl.to(".box1", {
  x: 200,
  duration: 1,
})
  .to(
    ".box2",
    {
      y: 100,
      duration: 1,
    },
    "<"
  )
  .fromTo(
    ".box3",
    {
      opacity: 0,
      scale: 0,
    },
    { opacity: 1, scale: 1, duration: 1 },
    ">>0.5"
  );

start.addEventListener("click", () => {
  tl.play();
});
