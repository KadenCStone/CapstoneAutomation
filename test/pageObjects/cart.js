import { $ } from '@wdio/globals';
import Site from './page.js';
import addCart from './cartPages/addToCart.js';
import recentlyViewed from './cartPages/recentlyViewed.js';
import removeThese from './cartPages/removeCart.js';
import addEverything from './cartPages/addingItAll.js';
import cartCheck from './cartPages/checkMyCart.js'
import checkingOut from './cartPages/checkout.js'

class Cart extends Site {



    async Complete () {
        await browser.url('https://qualtry.com');

        await addCart.add();
        await expect(browser).toHaveUrl('https://www.qualtry.com/');

        //open cart and add some from "recently viewed"
        await recentlyViewed.toCart();
        await expect(browser).toHaveUrl('https://www.qualtry.com/')

        //calling "removeCart" from removeCart.js to remove a couple items using the "remove" button and selecting the "-" symbol
        await removeThese.itemsPlease();
        await expect(browser).toHaveUrl('https://www.qualtry.com/')

        //calling in "addEverything" from addingItAll.js to add everything on the site to the cart
        await addEverything.toCart();
        await expect(browser).toHaveUrl('https://www.qualtry.com/')


        //calling in "cartCheck" from checkMyCart.js to check all links in cart to make sure they take me to the same place as when I clicked "add to cart"
        await cartCheck.whatHere();
        await expect(browser).toHaveUrl('https://www.qualtry.com/')

        // selecting "checkout" then going back to cart
        //selecting "shop pay"
        //calling in "checkMessage" from checkbox.js to check the box and write a message

        await checkingOut.check();
        await expect(browser).toHaveUrl('https://www.qualtry.com/')


        

        }



}
export default new Cart;