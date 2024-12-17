import itemView from '../pageObjects/itemView.js';
import SearchBar from '../pageObjects/searchTest.js';
import FullCart from '../pageObjects/cartTest.js';

describe('Qualtry Capstone Test ', () => {
    it('Should filter through each page with 3 filters, then test the searchbar, then the cart', async() => {
        await itemView.flow();
        await SearchBar.find();
        await FullCart.InCart();
    });
});