const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const movies = {
    
    {id: 1, title: 'Shrek'},
    {id: 2, title: 'El príncipe de Zamunda'},
    {id: 3, title: 'Con la muerte en los talones'},
    {id: 4, title: 'Titanic'},
    {id: 5, title: 'El Caballero Oscuro'},
    {id: 6, title: 'Mad Max: Fury Road'},
    {id: 7, title: 'Django desencadenado'},
    {id: 8, title: 'Solo en casa'},
    {id: 9, title: 'Casablanca'},
    {id: 10, title: 'The Host'},
    {id: 11, title: 'Donnie Darko'},
    {id: 12, title: 'IT'},
    {id: 13, title: 'Parásitos'},
    {id: 14, title: 'La tostadora valiente'},
    {id: 15, title: 'Una jaula de grillos'},
    {id: 16, title: 'El Padrino'},
    {id: 17, title: 'Forrest Gump'},
    {id: 18, title: 'La Vida es bella'},
    {id: 19, title: 'Intocable'},
    {id: 20, title: 'Cadena Perpetua'},
    
    
    
    
    let m5 = new Movies("ID005", "El caballero oscuro", 2008, "acción", "Christian Bale", "https://pics.filmaffinity.com/El_caballero_oscuro-102763119-large.jpg");
    let m6 = new Movies("Id006", "Mad Max: Fury Road", 2015, "acción", "Charlize Theron", "https://www.websweepuk.com/ebay_images/Mad-Max-Fury-Road-us-one-sheet-buy-original-movie-posters-at-starstills.jpg");
    let m7 = new Movies("ID007", "Solo en casa", 1990, "comedia", "Macaulay Culkin", "https://cartelera.elpais.com/assets/uploads/2018/12/21030155/F_12929.jpg");
    let m8 = new Movies("ID008", "Django desencadenado", 2012, "drama", "Jamie Foxx", "https://images-na.ssl-images-amazon.com/images/I/51dNfU53lNL._AC_.jpg");
    let m9 = new Movies("ID009", "Casablanca", 1942, "drama", "Humpfrey Bogart", "https://e.snmc.io/i/300/w/77330ee70810f141e075acff98852f53/6595852");
    let m10 = new Movies("ID010", "IT", 1990, "terror", "Tim Curry", "https://images-na.ssl-images-amazon.com/images/I/513lqk2Bz9L.jpg");
    let m11 = new Movies("ID011", "Donnie Darko", 2001, "suspense", "Jake Gyllenhaal", "https://pics.filmaffinity.com/Donnie_Darko-454757435-large.jpg");
    
    
    
    
    



app.get('/', (req, res) => res.send('EXPRESS'));

app.listen(PORT, () => console.log('Server is working'))