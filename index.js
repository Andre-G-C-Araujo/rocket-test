const changeBackground = () => {
  const divAstrounat = document.querySelector("#rightContent");

  //   console.log(window.matchMedia(divAstrounat));
  if (divAstrounat.offsetWidth >= 500) {
    console.log("consegui caraio");
  }

  console.log(divAstrounat.offsetWidth);
};

const question = () => {
  if (
    prompt("Voce quer sair comigo, um cara bonito, magico e programador??") ===
    "sim"
  ) {
    prompt("aeee kkkkk, me fala que eu nao sei a resposta :DDDD");
  } else {
    prompt("me bloqueia e me ignora kkkkkkkkkkk");
  }
};
