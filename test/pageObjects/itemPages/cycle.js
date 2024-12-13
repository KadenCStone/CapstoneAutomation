import { $ } from '@wdio/globals';
import Site from '../page.js';

class bike extends Site {
    get nextPageBtn() {
        return $('//a[@title="Next"]');
    }
    async cycleThrough () {
        
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1');
        await $('[data-product-handle="personalized-velvet-trimmed-christmas-stockings"]').waitForDisplayed({ timeout: 2000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=2');
        await this.nextPageBtn.scrollIntoView()
        await $('[data-product-handle="personalized-princess-santa-bags"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=3');
        await this.nextPageBtn.scrollIntoView()
        await $('[data-product-handle="personalized-christmas-mugs-for-girls"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=4');
        await $('[data-product-handle="personalized-oh-christmas-tree-grey-cuff-stocking"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=5');
        await $('[data-product-handle="personalized-merry-and-bright-green-cuff-stocking"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=6');
        await $('[data-product-handle="personalized-santa-round-ornament"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=7');
        await $('[data-product-handle="personalized-christmas-memories-cream-leatherette-photo-album"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=8');
        await $('[data-product-handle="personalized-bone-holiday-dog-stocking"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=9');
        await $('[data-product-handle="personalized-cardinal-christmas-hat-garden-flag"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=10');
        await $('[data-product-handle="personalized-candy-canes-bar-mat"]').waitForDisplayed({ timeout: 4000 });

        await this.nextPageBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=11');
        await $('[data-product-handle="personalized-cotton-stocking-with-tassel-monogram"]').waitForDisplayed({ timeout: 4000 });
    }
}

export default new bike;