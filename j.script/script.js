var msg1 = document.getElementById("m1");
var msg2 = document.getElementById("m2");
var msg3 = document.getElementById("m3");

var resposta = Math.floor(Math.random()*30) + 1;
var quant_resp = 0;
var num_digit = [];

function play(){
    var user_resp = document.getElementById("resposta").value;
    if(user_resp < 1 || user_resp > 30){
        alert("Entre com um número de 1 a 30.");
    }
    else{
        num_digit.push(user_resp);
        quant_resp+= 1;

        if(user_resp < resposta){
            msg1.textContent = "*Dica: tente um número mais alto";
            msg2.textContent = "Quantidade de respostas: " + quant_resp;
            msg3.textContent = "Números digitados: " +
            num_digit;
        }
        else if(user_resp > resposta){
            msg1.textContent = "*Dica: tente um número mais baixo";
            msg2.textContent = "Quantidade de respostas: " + quant_resp;
            msg3.textContent = "Números digitados: " +
            num_digit;
        }
        else if(user_resp == resposta){
            msg1.textContent = "Parabéns, você acertou!";
            msg2.textContent = "O número correto é: " + resposta;
            msg3.textContent = "Você adivinhou em "+ quant_resp + " tentativas";
            document.getElementById("my_btn").disabled = true;
        }
    }
}