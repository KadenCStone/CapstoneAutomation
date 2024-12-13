import { $ } from '@wdio/globals';
import Site from '../page.js';
class checkingOut extends Site {
    
    get shopPay () {
        return $('//div[@class="cart__item-row cart__checkout-wrapper"]/div[@class="additional-checkout-buttons"]');
    }
    get cartBtn () {
        return $('[href="/cart"]');
    }
    get itsGift () {
        return $('[name="gift"]');
    }
    get giftMessage() {
        return $('#CartNote');
    }
    get checkBtn () {
        return $('//div[@class="cart__item-row cart__checkout-wrapper"]/button[@class="btn cart__checkout"]');
    }

    async check () {
        await browser.url('https://www.qualtry.com');

        await this.cartBtn.click();
        
        $('//div[@class="cart__item-row cart__checkout-wrapper"]/div[@class="additional-checkout-buttons"]').waitForEnabled();
        await this.shopPay.click();
        $('[class="_Identity_60hue_83"]').waitForDisplayed();
                      

        
        await browser.url('https://www.qualtry.com')
        
        $('[href="/cart"]').waitForDisplayed();
        await this.cartBtn.click();

        $('[name="gift"]').waitForDisplayed();
        await this.itsGift.click();

        $('#CartNote').waitForDisplayed();
        await this.giftMessage.setValue('For my beloved Berry');

        $('//div[@class="cart__item-row cart__checkout-wrapper"]/button[@class="btn cart__checkout"]').waitForDisplayed();
        await this.checkBtn.click();
        $('[aria-controls="disclosure_details"]').waitForDisplayed();
        var linkage = await browser.getUrl();  
        expect(linkage).toContain('https://www.qualtry.com/checkouts/');




        await browser.url('https://www.qualtry.com')

    }

}


export default new checkingOut