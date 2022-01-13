/*const precioOriginal = 120;
const descuentos = 18;

const porcentajePrecioscondescuentos = 100 - descuentos;
const precioreal = (precioOriginal * porcentajePrecioscondescuentos) / 100 ;
*/


function calcularpreciocondescuento(precio,descuentos){
    const porcentajePrecioscondescuentos = 100 - descuentos;
    const precioreal = (precio * porcentajePrecioscondescuentos) / 100 ;

    return precioreal;
};

function onclickbuttonpricediscount(){
    const inputprice = document.getElementById("inputprice");
    const price = inputprice.value;


    const inputdiscount= document.getElementById("inputdiscount");
    const discount = inputdiscount.value;

    const precioreal = calcularpreciocondescuento(price,discount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El valor del precio con descuento es de $" + precioreal;
}






/*console.log({
    precioOriginal,
    descuentos,
    porcentajePrecioscondescuentos,
    precioreal
});*/