import { $ } from '@wdio/globals';
import Site from '../page.js';


class recentlyViewed extends Site {

    get goCart () {
        return $('#HeaderCartTrigger');
    }
    get shotRecent() {
        return $('[data-product-handle="personalized-shot-glasses-2"]')
    }
    get glassRecent() {
        return $('[data-product-handle="personalized-friendsgiving-stemless-wine-glass"]')
    }
    get designShot() {
        return $('//img[@alt="719"]');
    }
    get shotLetter() {
        return $('[id="initial-0"]');
    }
    get check () {
        return $('//div[@class="custom-checkbox  "]');
    }
    get submit() {
        return $('//button[@name="add"]');
    } 
    get recentTab() {
        return $('[data-section-type="recently-viewed"]')
    }
    get cartConfirm() {
        return $('[class="cart-link__bubble-num"]');
    }
    get bottomConfirm() {
        return $('[class="bottom-banner-buttons"]');
    }


    async toCart () {
        await this.goCart.click();

        await this.recentTab.scrollIntoView();
    
        await this.shotRecent.click();
        await this.designShot.click();
        await this.shotLetter.setValue('B');
        await this.check.click();
        await this.submit.click();
        await this.bottomConfirm.waitForDisplayed({ timeout: 5000 });


        await this.goCart.click();

        await this.recentTab.scrollIntoView();

        await this.glassRecent.click();
        await this.check.click();
        await this.submit.click();
        await this.bottomConfirm.waitForDisplayed({ timeout: 5000 });


        await browser.url('https://www.qualtry.com');

        var cartNumber = await this.cartConfirm.getText();
        await browser.waitUntil(
            async () => {
                cartNumber = await this.cartConfirm.getText();
                return cartNumber === '9';
            },
            {
                timeout: 6000,
            }
        );

    }

}
export default new recentlyViewed;