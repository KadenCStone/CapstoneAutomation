import { $ } from '@wdio/globals';
import Site from '../page.js';
import pageOne from './theEverythingFiles/christmasPage1.js';
import pageTwo from './theEverythingFiles/christmasPage2.js';
import pageThree from './theEverythingFiles/christmasPage3.js';
import pageFour from './theEverythingFiles/christmasPage4.js';

class addEverything extends Site {
    get nextPage() {
        return $('//a[@title="Next"]');
    }
    

    async toCart () {

        await browser.url('https://www.qualtry.com/collections/christmas-1')

        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1');
        await $('[data-product-handle="personalized-bells-vintage-christmas-ornament"]').waitForDisplayed({ timeout: 2000 });

        await pageOne.go1();

        await this.nextPage.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=2');
        await $('[data-product-handle="personalized-merry-christmas-truck-garden-flag"]').waitForDisplayed({ timeout: 4000 });

        await pageTwo.go2();

        await this.nextPage.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=3');
        await this.nextPage.scrollIntoView()
        await $('[data-product-handle="personalized-christmas-snowflakes-garden-flag"]').waitForDisplayed({ timeout: 4000 });

        await pageThree.go3();

        await this.nextPage.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=4');
        await $('[data-product-handle="personalized-welcome-gingham-gnome-doormat"]').waitForDisplayed({ timeout: 4000 });

        await pageFour.go4();

        await this.nextPage.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=5');
        await $('[data-product-handle="personalized-until-i-get-blitzen-wine-gift-bag"]').waitForDisplayed({ timeout: 4000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=6');
        // await $('[data-product-handle="personalized-christmas-truck-plaid-gnomes-garden-flag"]').waitForDisplayed({ timeout: 4000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=7');
        // await $('[data-product-handle="personalized-happy-dog-stocking"]').waitForDisplayed({ timeout: 4000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=8');
        // await $('[data-product-handle="personalized-cookies-and-milk-for-santa-plate"]').waitForDisplayed({ timeout: 4000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=9');
        // await $('[data-product-handle="personalized-seasons-greetings-cardinal-coffee-mug"]').waitForDisplayed({ timeout: 4000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=10');
        // await $('[data-product-handle="personalized-merry-christmas-garden-flag"]').waitForDisplayed({ timeout: 4000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=11');
        // await $('[data-product-handle="personalized-plaid-stocking"]').waitForDisplayed({ timeout: 4000 });
    }
}

export default new addEverything;