import { $ } from '@wdio/globals';
import Site from './page.js';
import addCart from './cartPages/addToCart.js';
import recentlyViewed from './cartPages/recentlyViewed.js';
import removeThese from './cartPages/removeCart.js';
import addEverything from './cartPages/addingItAll.js';

class Cart extends Site {



    async Complete () {
        await browser.url('https://qualtry.com');

        await addCart.add();

        await expect(browser).toHaveUrl('https://www.qualtry.com/');

        //open cart and add some from "recently viewed"
        await recentlyViewed.toCart();

        
        //calling "removeCart" from removeCart.js to remove a couple items using the "remove" button and selecting the "-" symbol
        await removeThese.itemsPlease();

        // calling in "addEverything" from addingItAll.js to add everything on the site to the cart
        await addEverything.toCart();

        //calling in "cartCheck" from checkMyCart.js to check all links in cart to make sure they take me to the same place as when I clicked "add to cart"

        //calling in "checkMessage" from checkbox.js to check the box and write a message

        // selecting "checkout" then going back to cart

        //selecting "shop pay"
    }
}
export default new Cart;