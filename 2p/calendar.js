class Calendar {
    isLeapYear(y) {
        return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? true : false;
    }
    todayPlus(d, n) {
        let mod=0;
        switch (d) {
            case "lunes":
                n += 1;
                break;
            case "martes":
                n += 2;
                break;
            case "miercoles":
                n += 3;
                break;
            case "jueves":
                n += 4;
                break;
            case "viernes":
                n += 5;
                break;
            case "sabado":
                n += 6;
                break;
            case "domingo":
                n = n;
                break;
            default:
                "Error";
                break;
        }
        switch (n % 7) {
            case 0:
                n = 7;
                console.log("Domingo");
                break;
            case 1:
                n = 1;
                console.log("Lunes");
                break
            case 2:
                n = 2;
                console.log("Martes");
                break
            case 3:
                n = 3;
                console.log("Miércoles");
                break;
            case 4:
                n = 4;
                console.log("Jueves");
                break;
            case 5:
                n = 5;
                console.log("Viernes");
                break;
            case 6:
                n = 6;
                console.log("Sábado");
                break;
        }
        return n;
    }
    firstDayYear(y) {
        let x;
        let dia;
        x = (y + Math.floor((y - 1) / 4) - Math.floor((y - 1) / 100) + Math.floor((y - 1) / 400)) % 7;
        switch (x) {
            case 0:
                dia = "Domingo";
                break;
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
        }
        return x;
    }
}

let mes = new Calendar();
console.log(mes.isLeapYear(1700)); 
console.log(mes.isLeapYear(1650)); 
console.log(mes.firstDayYear(2014));
console.log(mes.todayPlus("Jueves",5))