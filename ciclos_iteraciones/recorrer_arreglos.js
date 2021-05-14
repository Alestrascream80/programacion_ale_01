const recorrer_arreglo = () => {
    let nombres = ['pepe','jose','juan','jaime']
    nombres.forEach(element => {
     console.log(element);
      
    });
}

const boton2 = document.querySelector("#btn_recorrer_arreglos");

boton2.addEventListener("click", recorrer_arreglo);