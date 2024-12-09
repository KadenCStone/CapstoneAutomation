import itemView from '../pageObjects/itemView';
import searchBar from '../pageObjects/searchBar';
import Cart from '../pageObjects/cart';


describe('Qualtry Capstone Test ', () => {
    it('Should filter through each page with 3 filters, then test the searchbar, then the cart', async() => {
        // await itemView.flow();
        // await searchBar.find();
        await Cart.Complete();
    });
});