let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ffcab0;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#f0ab8d;">Enseño electrónica y programación web .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

