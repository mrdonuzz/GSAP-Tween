//1
// gsap.from(".circle", {
//   y: 100,
//   opacity: 0,
//   yoyo: true,
//   repeat: -1,
//   stagger: {
//     each: 0.1,
//   },
// });

//2
// gsap.from(".circle", {
//   y: 100,
//   opacity: 0,
//   yoyo: true,
//   repeat: -1,
//   stagger: {
//     amount: 2,
//     from: "center",
//   },
// });

//3
gsap.from(".circle", {
  y: 100,
  opacity: 0,
  rotate: 360,
  scale: 0,
  transformOrigin: "center center",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 1.5,
    from: "random",
  },
});
