// const { default: axios } = require("axios");

const imagem = document.querySelector('#image');

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((result) =>{
        image.src = result.data.message;
    })
    .catch((error) => {
        console.log(error);
    });