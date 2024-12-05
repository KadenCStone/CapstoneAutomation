import itemView from '../pageObjects/itemView';


describe('Qualtry Capstone Test ', () => {
    it('Should filter through each page with 3 filters, then test the searchbar, then the cart', async() => {
        await itemView.flow()
    });
});