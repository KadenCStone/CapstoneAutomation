import { $ } from '@wdio/globals';
import Site from './page.js';
import addCart from './addToCart.js';

class Cart extends Site {

    get goCart () {
        return $('#HeaderCartTrigger');
    }


    async Complete () {
        await browser.url('https://qualtry.com');

        await addCart.add();
        await browser.pause(1500);

        await expect(browser).toHaveUrl('https://www.qualtry.com/');
        await browser.pause(1500);

        await this.goCart.click();
        await browser.pause(5000);
    }
}
export default new Cart;