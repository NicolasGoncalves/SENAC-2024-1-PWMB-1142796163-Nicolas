let nuns = [];
let lista=[];

function adicionar() {
  const num = document.getElementById("num");
  let numero = parseInt(num.value);

 if (numero < 1 ||numero > 100 ||isNaN(numero) || nuns.includes(numero)) {
    alert(`O numero ${numero} é invalido ou já foi adicionado.`);
    return;
  }

  nuns.push(numero);

  const area=document.getElementById("nuns");
  const valor=`Valor ${numero} adicionado`;
  
  lista.push(valor);
  area.value=lista.join("\n");
}

function calcular() {
    let qtd=nuns.length;

    if (qtd === 0) {
        alert("Adicione valores antes de finalizar.");
        return;
    }

    let maior,menor,soma=0,media;
    maior=menor=nuns[0];

    for (let i = 0; i < nuns.length; i++) {
        if (maior<nuns[i]) {
            maior=nuns[i];
        }
        if (menor>nuns[i]) {
            menor=nuns[i];
        }

        soma=soma+nuns[i];
    }

    media=soma/qtd;

    const tot=document.getElementById("total");
    const mai=document.getElementById("maior");
    const men=document.getElementById("menor");
    const som=document.getElementById("soma");
    const med=document.getElementById("media");

    tot.innerHTML=qtd;
    mai.innerHTML=maior;
    men.innerHTML=menor;
    som.innerHTML=soma;
    med.innerHTML=media;

}
