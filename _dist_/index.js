const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

//Intl de price
const formatPricec = (price) =>{
    const newPrice = new window.Intl.NumberFormat('es-MX',{
        style:  "currency",
        currency: "MXN"
    })//se instancia la API
    .format(price); //se da formato
    return newPrice;
};
//Web API
//coenctarnos al servidor
window.fetch(`${baseUrl}/api/avo`)// se utiliza para traer recursos desde cualquier API
//procesar respuesta y convertirla en Json
.then((respuesta) => respuesta.json())
// json => Data => Renderizar info
.then((ResponseJson) => {
    ResponseJson.data.forEach(element => {
        //Se crean dos contenedores para dividir la imagen y su informacion
        const containerImg = document.createElement("div");
        containerImg.className = "containerImg"
        const containerInf = document.createElement("div");
        containerInf.className = "containerInf"
        const container = document.createElement("div");

        //creat imagen
        const imagen  = document.createElement("img");
        imagen.src = baseUrl + element.image;
        imagen.className= "image";

        //crear titulo
        const title = document.createElement("h2");
        title.textContent = element.name;
        title.className = "title"

        //crear precio
        const price = document.createElement("p");
        price.textContent = formatPricec( element.price);
        price.className="price"
        price.color = "color: var(--gray);";

        //Se agrega image title y precio a los contenedores
        containerImg.appendChild(imagen);
        containerInf.append(title,price)
        container.append(containerImg,containerInf);
        container.className = "product-container "

        appNode.appendChild(container);
    });
});
