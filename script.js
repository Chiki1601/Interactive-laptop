var files = document.querySelectorAll('#files_5_ > g');
var drawerId = document.getElementById('drawer');
var drawerId2 = document.getElementById('drawer_1_');

gsap.to('#notification', { y: -10, duration: 1, repeat: -1, yoyo: true})


  var openDrawer = gsap.timeline({reversed: true});
  openDrawer.to('#drawer > *', {
  x: -230,
  y: 120,
  transformOrigin: "50% 50%",
})
.to('#everything', {
    scale: 5,
    transformOrigin: "50% 50%"
  }, 0);
  

drawerId.addEventListener('click', () => {
  openDrawer.reversed() ? openDrawer.play() : openDrawer.reverse();
  gsap.to('#notification', { scale: 0, transformOrigin: "50% 50%"});
})

files.forEach(file => {
  const bumpTlm = new gsap.timeline({paused: true, reversed: true});
  bumpTlm
  .to(file, { y: -30, duration: 0.6});
  
  file.addEventListener('mouseenter', () => { bumpTlm.play(); });
  file.addEventListener('mouseleave', () => { bumpTlm.reverse(); });
  
  // file.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   file.removeEventListener("mouseenter", false);
  //   file.removeEventListener("mouseleave"); 
  //   gsap.to(file, {
  //     skewY: -30,
  //     skewX: -5,
  //     scale: 2,
  //     transformOrigin: "50% 50%",
  //     y: 0
  //   }, 0);
  // });
});