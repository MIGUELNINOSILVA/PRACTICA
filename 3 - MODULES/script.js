import alias,{ camperName, camperAge, showInformation, beHiring, Camper,  } from "./index.js";
//Export default NO VA con llaves {}
/* import exportingDefault from "./index.js"; */

console.log(camperName, camperAge);
console.log(showInformation(camperName, camperAge));;

beHiring(camperAge);

//Instanciar un objeto
const camper1 = new Camper(camperName, camperAge);

console.log(camper1);
console.log(alias);
