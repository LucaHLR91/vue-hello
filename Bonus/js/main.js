// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Vue.config.devtools = true;
var app = new Vue({
    el: '#root',
    data: {
        message: 'New Macbook Air',
        foto: "img/macbook.jpg"
    }
})