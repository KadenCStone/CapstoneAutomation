import { $ } from '@wdio/globals';
import Site from '../page.js';
import pageOne from './theEverythingFiles/christmasPage1.js';

class addEverything extends Site {
    get nextPage() {
        return $('//a[@title="Next"]');
    }
    

    async toCart () {

        
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1');
        // await $('[data-product-handle="personalized-bells-vintage-christmas-ornament"]').waitForDisplayed({ timeout: 2000 });

        await pageOne.go1();

        await this.nextPage.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=2');
        await $('[data-product-handle="personalized-red-truck-christmas-ornaments"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=3');
        // await $('[data-product-handle="personalized-christmas-snowflakes-garden-flag"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=4');
        // await $('[data-product-handle="personalized-merry-and-bright-magnet-yard-set"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=5');
        // await $('[data-product-handle="personalized-joy-to-the-world-round-barky-ornament"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=6');
        // await $('[data-product-handle="personalized-christmas-truck-plaid-gnomes-wall-hanging"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=7');
        // await $('[data-product-handle="personalized-paw-christmas-stocking"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=8');
        // await $('[data-product-handle="personalized-cookies-for-santa-plate"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=9');
        // await $('[data-product-handle="personalized-christmas-plaid-stocking"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=10');
        // await $('[data-product-handle="personalized-merry-christmas-garden-flag"]').waitForDisplayed({ timeout: 2000 });

        // await this.nextPage.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=11');
        // await $('[data-product-handle="personalized-plaid-stocking"]').waitForDisplayed({ timeout: 2000 });
    }
}

export default new addEverything;