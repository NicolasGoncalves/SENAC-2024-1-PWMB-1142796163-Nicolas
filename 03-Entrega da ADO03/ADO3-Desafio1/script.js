function verificar(){
    var ano = new Date().getFullYear();
    var nascimento = document.getElementById('ano');
    var molde = document.querySelector('div.resultado');
    if(nascimento.value.length == 0 || nascimento.value > ano || nascimento.value < 1900){
        alert('Verifique os dados e tente novamente!');
    }else{
        var idade = ano - Number(nascimento.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var generoSelecionado = document.querySelector('input[name="sexo"]:checked');
        if (generoSelecionado) {
            genero = generoSelecionado.value;
            if (genero === 'Homem') {
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', '/assets/menino.jpg');
                } else if (idade <= 25) {
                    img.setAttribute('src', '/assets/Hjovem.jpg');
                } else if (idade <= 60) {
                    img.setAttribute('src', '/assets/homem.jpg');
                } else {
                    img.setAttribute('src', '/assets/velho.jpg');
                }
            } else if (genero === 'Mulher') {
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', '/assets/menina.jpg');
                } else if (idade <= 25) {
                    img.setAttribute('src', '/assets/Mjovem.jpg');
                } else if (idade <= 60) {
                    img.setAttribute('src', '/assets/mulher.jpg');
                } else {
                    img.setAttribute('src', '/assets/velha.jpg');
                }
            }
        } else {
            alert('Selecione o sexo!');
            return;
        }

        molde.style.textAlign = 'center';
        idade.innerHTML = idade;
        genero.innerHTML = genero;
        molde.innerHTML = `Gênero: ${genero}, com ${idade} anos de idade`;
        molde.appendChild(img);
    }
}