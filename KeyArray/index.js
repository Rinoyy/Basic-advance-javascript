let data = {
    teman: ["Alice", "Bob"],
    keluarga: ["Ayah", "Ibu"]
};
let group = "teman";
data[group].forEach(contact => {
    document.getElementById("contactList").innerHTML += `<li>${contact}</li>`;
});
  
let dataFamily = {
    teman: ["Alice", "Bob"],
    keluarga: ["Ayah", "Ibu"]
};

for ( let group in data){
    document.getElementById("forInVariable").innerHTML += `<li>${group}:  ${data[group]}</li>`
    console.log(`${group}: ${data[group]}`);
}