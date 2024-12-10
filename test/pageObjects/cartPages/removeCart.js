import { $ } from '@wdio/globals';
import Site from '../page.js';

class removeThese extends Site {
    get byeGlass () { 
       return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Friendsgiving Stemless Wine Glass")]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Reduce item quantity by one"]');
    }
    get byeShot () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/span[@class="cart-prs-line"]/b[contains(text(), "K")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]');

    }
    get removeWallet () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Leather Phone Wallets")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]');
    }
    get removeMug () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Non-Personalized 11 oz. Christmas Mugs")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]');
    }
    get removeCutting () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Rectangle Cutting Board")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]');
    }

    async itemsPlease () {
        await browser.url('https://www.qualtry.com/cart');

        await this.byeGlass.click();
        await this.byeGlass.click();

        await this.byeShot.scrollIntoView();
        await this.byeShot.click();

        await this.removeWallet.click();

        await this.removeMug.click();

        await this.removeCutting.click();

        await browser.url('https://www.qualtry.com');
    }
}
export default new removeThese;