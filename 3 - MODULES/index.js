//Módulos
//Un modulo normalmente es un archivo
//Son son componenentes que componen una aplicación robusta
//Tenemos nuestra variable

/* Exportar arrays */

const camperName = "Carlos Florez";
const camperAge = 20

export {camperName, camperAge}

/* Exportar funciones */
export function showInformation(camperName, camperAge) {
    return `El camper: ${camperName} tiene ${camperAge} años.`
}

export function beHiring(camperAge){
    if (camperAge > 16) {
        console.log(`Camper can be hired`);        
    }else{
        console.log(`Camper can't be hired`);
    }
}

/* Exportar clases */
export class Camper{
    constructor(camperName, camperAge){
        this.name = camperName;
        this.age = camperAge;
    }
}

/* Export default - !SOLAMENTE SE PUEDE EXPORTAR UNO SOLO¡ */
export default function exportingDefault(){
    console.log('Function with Export Default');
}