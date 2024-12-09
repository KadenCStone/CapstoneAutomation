import { $ } from '@wdio/globals';
import Site from '../page.js';


class addPlus extends Site {
    get plusFirst () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[@href="/products/non-personalized-11-oz-christmas-mugs?variant=41164117213372"]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Increase item quantity by one"]');
        
    }
    get plusSecond () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Friendsgiving Stemless Wine Glass")]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Increase item quantity by one"]');
    }
    async Continue () {

        await browser.url('https://www.qualtry.com/cart');

        await $('.cart__page').waitForDisplayed({ timeout: 2000 });
 
        await this.plusFirst.click();

        await this.plusSecond.scrollIntoView();
        await this.plusSecond.click();

        await browser.url('https://www.qualtry.com');
    }
}
export default new addPlus;