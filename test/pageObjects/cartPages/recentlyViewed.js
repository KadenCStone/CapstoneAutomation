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


    async toCart () {
        await this.goCart.click();

        await this.recentTab.scrollIntoView();
    
        await this.shotRecent.click();
        await this.designShot.click();
        await this.shotLetter.setValue('B');
        await this.check.click();
        await this.submit.click();

        await this.goCart.click();

        await this.recentTab.scrollIntoView();

        await this.glassRecent.click();
        await this.check.click();
        await this.submit.click();

        await browser.url('https://www.qualtry.com');

    }

}
export default new recentlyViewed;