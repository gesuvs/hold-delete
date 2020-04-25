const card = document.querySelector(".card");
let contador = 0;
let tempo = null;
let root = document.documentElement;

card.addEventListener("mousedown", (ev) => {
  console.log("iniciou");
  let x = (ev.clientX - card.offsetLeft) / card.offsetWidth;
  let y = (ev.clientY - card.offsetTop) / card.offsetHeight;
  root.style.setProperty("--ripple-x", x);
  root.style.setProperty("--ripple-y", y);

  tempo = setInterval(() => {
    console.log(++contador);
    if (contador === 2) {
      reset();
      return;
    }
  }, 1000);
});

card.addEventListener("mouseup", () => {
  reset();
});

function reset() {
  clearInterval(tempo);
  contador = 0;
}
