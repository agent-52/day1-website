// const text = document.querySelector("p")
// text.innerHTML = text.innerText.split("").map((letter, i) => `<span style="transform:rotate(${i*8.9}deg)">${letter}</span>`).join("")
//////








const tl1 = gsap.timeline()
tl1.from(".logo, .nav", {
  y: -200,
  opacity: 0,
  stagger: 0.3,
  duration: 1
})


tl1.from(".mainImage", {
  scale: 0,
  duration: 1
})
tl1.from(".redCircle", {
  y: 200,
  opacity: 0,
})
tl1.from(".circleWrapper", {
  x: -200,
  opacity: 0,
})
tl1.from(".japan", {
  opacity: 0,
  x: 100,
  stagger: 0.2,
  yoyo: true,
  // repeat: -1,
  duration: 0.8,

})
tl1.from(".mainRightBox > div", {
  stagger: 0.3,
  y: -300,
  opacity: 0
})
tl1.from(".footer", {
  y: 200,
  opacity: 0,
})

const mainPage = document.querySelector(".body")
const button = document.querySelector(".circleWrapper")
const video = document.querySelector("video")
const tl = gsap.timeline({paused: true})

// tl.to(mainPage, {
//   clipPath: "polygon(5% 16%, 96% 16%, 96% 95%, 5% 95%)",
//   duration: 0.7, 

// })
tl.to(mainPage, {
  clipPath: "polygon(90% 13%, 90% 13%, 89% 87%, 89% 87%)",
  duration: 1, 

}, "+=0.2")
tl.to(video, {
  opacity: 1
})


button.addEventListener("click", () => {
  tl.play()
})
/////////////////////////////////////

const text = document.querySelector("p")
text.innerHTML = text.innerText.split("").map((letter, i) => `<span style="transform:rotate(${i*8.9}deg)">${letter}</span>`).join("")