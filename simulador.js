let bandera = true
do{
    let nombre = prompt("Ingresa tu nombre")
    let monto = parseFloat(prompt("Cual es el monto a solicitar"))
    let periodo = parseInt(prompt("tiempo a pagar 3, 6, 12 o 24 meses"))
    if( periodo == 3){
        let interes = monto * .10
        let total = monto + interes
        console.log (nombre + " tu prestamo es de "+ monto.toFixed(2)  + " pesos, por un periodo de " + periodo + " meses, con el 10 porciento de interes que es " + interes.toFixed(2) +" , dando una total de "+ total.toFixed(2) +" pesos")
        alert(nombre + " tu prestamo es de "+ monto.toFixed(2) + " pesos, por un periodo de " + periodo + " meses, con el 10 porciento de interes que es " + interes.toFixed(2)  +" , dando una total de "+ total.toFixed(2) +" pesos")
    }else if (periodo == 6){
        let interes = monto * .20
        let total = monto + interes
        console.log (nombre + " tu prestamo es de "+ monto.toFixed(2)  + " pesos, por un periodo de " + periodo + " meses, con el 20 porciento de interes que es " + interes.toFixed(2) +" , dando una total de "+ total.toFixed(2) +" pesos")
        alert(nombre + " tu prestamo es de "+ monto.toFixed(2) + " pesos, por un periodo de " + periodo + " meses, con el 20 porciento de interes que es " + interes.toFixed(2) +" , dando una total de "+ total.toFixed(2) +" pesos")
    }else if (periodo == 12){
        let interes = monto * .30
        let total = monto + interes
        console.log (nombre + " tu prestamo es de "+ monto.toFixed(2)  + " pesos, por un periodo de " + periodo + " meses, con el 30 porciento de interes que es " + interes.toFixed(2) +" , dando una total de "+ total.toFixed(2) +" pesos")
        alert(nombre + " tu prestamo es de "+ monto.toFixed(2)  + " pesos, por un periodo de " + periodo + " meses, con el 30 porciento de interes que es " + interes.toFixed(2)  +" , dando una total de "+ total.toFixed(2) +" pesos")
    }else if(periodo == 24){
        let interes = monto * .40
        let total = monto + interes
        console.log (nombre + " tu prestamo es de "+ monto.toFixed(2) + " pesos, por un periodo de " + periodo + " meses, con el 40 porciento de interes que es " + interes.toFixed(2)  +" , dando una total de "+ total.toFixed(2) +" pesos")
        alert(nombre + " tu prestamo es de "+ monto.toFixed(2)  + " pesos, por un periodo de " + periodo + " meses, con el 40 porciento de interes que es " + interes.toFixed(2)  +" , dando una total de "+ total.toFixed(2) +" pesos")

    }else{
        console.log ("Favor de colocar uno de los Plazos recomendado 3, 6, 12 y 24 meses, Gracias")
        alert("Favor de colocar uno de los Plazos recomendado 3, 6, 12 y 24 meses, Gracias")
    }

    let pregunta = prompt("desea calcular otro prestamo, de lo contrario escriba ESC para salir")
    if(pregunta.toUpperCase() == "ESC"){
        bandera= false
        alert("Gracias por utilizar nuestro codigo")
    }
}while(bandera)
