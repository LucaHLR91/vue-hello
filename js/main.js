// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Vue.config.devtools = true;
var app = new Vue({
    el: '#root',
    data: {
        message: 'Ciao a tutti',
        foto: "https://www.smartworld.it/wp-content/uploads/2021/05/macbook-air-leak-render-2-1280x720.jpg"
    }
})