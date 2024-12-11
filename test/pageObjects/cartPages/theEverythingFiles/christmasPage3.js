import { $ } from '@wdio/globals';
import Site from '../../page.js';
import popup from '../../searchPages/popup.js';

class pageThree extends Site {
    get p3i1 () {
        return $('[data-product-handle="personalized-merry-christmas-mugs"]');
    }
    get p3i2 () {
        return $('[data-product-handle="kids-elf-watch-white-cotton-bags-small"]');
    }
    get p3i3 () {
        return $('[data-product-handle="personalized-animal-print-mugs"]');
    }
    get p3i4 () {
        return $('[data-product-handle="personalized-plaid-stockings-monogram"]');
    }
    get p3i5 () {
        return $('[data-product-handle="personalized-merry-and-bright-christmas-mugs"]');
    }
    get p3i6 () {
        return $('[data-product-handle="personalized-christmas-mugs-for-girls"]');
    }
    get p3i7 () {
        return $('[data-product-handle="personalized-red-truck-christmas-ornaments"]');
    }
    get p3i8 () {
        return $('[data-product-handle="personalized-christmas-snowflakes-garden-flag"]');
    }



    get bottomLine () {
        return $('#bottom-line-0');
    }
    get diameterOption () {
        return $('//label[@for="ProductSelect-template--16366570766524__main-8588015173820-option-choose-size-2.8%22+Diameter"]');
    }
    get sizeOption() {
        return $('[data-id="size-0"]');
    }
    get personalCaps() {
        return $('[name="properties[Personalization (All Caps)]"]');
    }
    get personalLow() {
        return $('#Personalization-1-0');
    }
    get personal2() {
        return $('#Personalization-2-0');
    }
    get printSide() {
        return $('[data-value="Print One Side"]');
    }
    get reviewCheck() {
        return $('.custom-checkbox  ');
    }
    get addTo() {
        return $('[data-default-text="Add to cart"]');
    }
    get initial() {
        return $('#initial-0')
    }
    get bottomConfirm() {
        return $('[class="bottom-banner confirmation opened"]');
    }
    get cartConfirm() {
        return $('[class="cart-link__bubble-num"]');
    }
    get addVerify() {
        return $('[class="sp-validate-overlay"]');
    }

    async go3 () {

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i1.click();
        await this.bottomLine.waitForExist();
        await this.bottomLine.setValue('Henery');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i2.click();
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i3.click();
        await this.sizeOption.click();
        await this.bottomLine.setValue('James');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i4.click();
        await this.initial.setValue('O');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();



        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i5.click();
        await this.bottomLine.setValue('Harold');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i6.click();
        await this.bottomLine.setValue('Jennery');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i7.click();
        await this.diameterOption.click();
        await this.personalCaps.setValue('aBILLion');
        await this.addVerify.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/cart')



        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        await this.p3i8.click();
        await this.printSide.click();
        await this.personalCaps.setValue('aljsefhau');
        await this.personal2.setValue('againLInesHEREWO');
        await this.addVerify.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/cart');


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=3');

        const cartNumber = await this.cartConfirm.getText();
        await expect(cartNumber).toBe('63');

    }
}
export default new pageThree;