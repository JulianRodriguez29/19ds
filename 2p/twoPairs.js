twoPairs() { //Combinación sin repetición -> C(n,r) = n!/(n-r)!*r!
    function factorial(n){
        return n <= 1 ? 1 : n*factorial(n-1);
    }
    //4 ases y 4 reyes -> se multiplican resultados -> 6 * 6 = 36 combinaciones de ases y reyes 
    let cAsesReyes = (factorial(4) / (factorial(4-2)factorial(2)))(factorial(4) / (factorial(4-2)*factorial(2)));
    //Posición libre ocupada por una carta (sin contar A o K) de las 44 restantes
     cAsesReyes *= 44;  //36 * 44 = 1584 parejas dobles de ases y reyes
     //Esta situación se puede repetir con dobles parejas de A y Q, A y J, etc...
     let doblesParejas = factorial(13) / (factorial(13-2)*factorial(2)); //C(13,2) = 78 posibles tipos de dobles parejas
    let combinaciones = cAsesReyes * doblesParejas; //Combinaciones posibles 
    //La posibilidad de doble pareja es: 
    //(Combinaciones posibles de doble pareja / Combinaciones de manos de póquer de 5 cartas) * 100
    let cManos5 = factorial(52) / (factorial(52-5)*factorial(5));//C(52,5) -> 2 598 960
    let resultado = (combinaciones / cManos5)*100; //*100 para obtener el porcentaje
    return resultado.toFixed(4) + "%";
}