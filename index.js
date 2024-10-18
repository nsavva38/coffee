console.log(`test`);


const li = document.querySelector(`ul`);
li.addEventListener(`click`, (event) => {
  const target = event.target
  console.log(`click`);

  target.style.color = `aqua`;
})