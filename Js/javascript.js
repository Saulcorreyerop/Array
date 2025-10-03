let database =[
    {
        brand : "Volkswagen",
        model : "Golf",
        year : 2021,
        plate : "1111FFF",
        rented: false,
    },

    {
        brand : "BMW",
        model : "Series 1",
        year : 2019,
        plate : "2222KGJ",
        rented: false,
    },

    {
        brand : "Mercedes",
        model : "C Class",
        year : 2021,
        plate : "6987LCP",
        rented: false,
    },

];


function insertCarR(){
    console.log("dentro de la fuunción");
    let brand =  document.getElementById("brand").value;
    let model =  document.getElementById("model").value;
    let year =  parseInt(document.getElementById("year").value);
    let plate =  document.getElementById("plate").value;
    let rented = document.getElementById("rented").value === "true";

    for(n=0;n<database.length;n++){
        console.log(`Brand: ${database[n].brand} | Model: ${database[n].model} | Year: ${database[n].year} | Plate: ${database[n].plate} | Disponible? : ${database[n].rented}`);
    };    

    console.log("Brand:",brand,"|Model:",model,"|Year:",year,"|Plate:",plate,"|Rented:",rented);
}