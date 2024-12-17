import { $ } from '@wdio/globals';
import Site from './mySite.js';
class CheckingOut extends Site {
    
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
    get backBtn() {
        return $('[aria-label="Back"]');
    }

    async Check () {
        await browser.url('https://www.qualtry.com');

        await this.cartBtn.click();
        
        $('//div[@class="cart__item-row cart__checkout-wrapper"]/div[@class="additional-checkout-buttons"]').waitForEnabled();
        await this.shopPay.click();
        $('[class="_Identity_60hue_83"]').waitForDisplayed();
                      
        await this.backBtn.click();
                
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


    }

}


export default new CheckingOut