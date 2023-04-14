function convertPoundsintoKilograms(pound){
    kilogram = pound / 2,205
    ;
return kilogram;
}

function convertInchesintoCentimetres(inches){
   centimetres = inches * 2,54

   return centimetres
}

function convertfahrenheitintoCelcius(fahrenheit){
   celcius = (fahrenheit - 32) * 5/9;
   return celcius
}
function convertfeetintoMeter(feet){
   meter = feet / 3,281
   return meter
}


console.log(convertPoundsintoKilograms(10))
console.log(convertInchesintoCentimetres(20))
console.log(convertfahrenheitintoCelcius(40))
console.log(convertfeetintoMeter(10))
