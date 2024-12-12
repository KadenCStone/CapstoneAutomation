import { $ } from '@wdio/globals';
import Site from '../page.js';


class addPlus extends Site {
    get plusFirst () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Non-Personalized 11 oz. Christmas Mugs")]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Increase item quantity by one"]');        
    }
    get plusSecond () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Friendsgiving Stemless Wine Glass")]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Increase item quantity by one"]');
    }
    get continueShopping () {
        return $('//a[@href="/collections/karis-test"]');
    }
    get cartConfirm() {
        return $('[class="cart-link__bubble-num"]');
    }


    async Continue () {

        await browser.url('https://www.qualtry.com/cart');

        await $('.cart__page').waitForDisplayed({ timeout: 2000 });
        
        const cartNumber = await this.cartConfirm.getText();
        await expect(cartNumber).toBe('5');
        

        await this.plusFirst.waitForClickable({ timeout: 5000 }); 
        await this.plusFirst.waitForEnabled({ timeout: 5000 });
    

        await this.plusFirst.waitForClickable();
        await this.plusFirst.click();

        await this.plusFirst.waitForClickable();
        await this.plusSecond.click();

        await this.continueShopping.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/karis-test')


        await browser.url('https://www.qualtry.com');
    }
}
export default new addPlus;