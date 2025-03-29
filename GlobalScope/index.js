let animal = "Elephant";
let totalNilai = 0;

// Local scope
function demo(){
    let carName = "volvo"; //local variable
    document.getElementById("demo1").innerHTML =  typeof carName + " " + carName;
}

//the result is undifined because carName is declared in bloc scope of demo fuction
document.getElementById("demo2").innerHTML = typeof carName; //undifined

demo()

// Global scope
nameAnimal();

function nameAnimal(){
    document.getElementById("demo3").innerHTML = "Global scope" + " " + animal;
}


let dataNilai = [
    80, 89, 99, 88, 77
];

function CountTotalNilai(){
    dataNilai.forEach(nilai => {
        totalNilai += nilai;
    });
}

CountTotalNilai();
console.log(totalNilai);

// ee



