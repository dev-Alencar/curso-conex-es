function calc()
{
 var resultado = document.getElementById('resposta');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';


 function subtracao(a, b)
 {
   
   return (a-b);
 }

 function soma(a, b)
{
  
  return (a+b);
}

function divisao(a, b)
{
  
  return (a/b);
}

function multiplicacao(a, b)
{
  
  return (a*b);
}



 if(document.getElementById('soma').checked)
  texto = soma(num1, num2);
 if(document.getElementById('subtracao').checked)
  texto = subtracao(num1, num2);
 if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(num1, num2);
 if(document.getElementById('divisao').checked)
  texto = divisao(num1, num2);

 resultado.innerHTML = texto;
}

