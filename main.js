/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let reg =  registrada.value;
  let km = distancia.value;
  let costo;
  if(reg === 'si' &&  km <= 3){ costo = "$715.24" ;}
  
  if (reg === 'si' && km >= 3 && km <= 6){costo = "$794.74";}

  if (reg === 'si' && km  >= 6 && km <= 12){costo = "$855.97";}

  if (reg === 'si' && km  >= 12 && km <= 27){costo = "$917.24";}

  else if (reg === 'no' &&  km <= 3){ costo = "1137.23";}

  else if (reg === 'no' && km >= 3 && km <= 6){costo = "$1263.64";}

  else if (reg === 'no' && km  >= 6 && km <= 12){costo = "1360.99";}

  else if (reg === 'no' && km  >= 12 && km <= 27){costo = "1458.41";}

  tarifa.innerText = costo;



});


