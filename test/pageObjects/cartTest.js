import addCart from './FirstAddition.js';
import Site from './mySite.js';
import RecentlyViewed from './recentlyViewed.js';
import pageOne from "./AddItems.js";
import CheckingOut from './checkOut.js';


class FullCart extends Site {
    
    async InCart() {
        await browser.url('https://www.qualtry.com');
        await addCart.add();
        
        await expect(browser).toHaveUrl('https://www.qualtry.com/');
        await addCart.Continue();
        await RecentlyViewed.ToCart();
        await RecentlyViewed.removeItems();
        await pageOne.go1();
        await CheckingOut.Check();
    }
   

}
export default new FullCart;