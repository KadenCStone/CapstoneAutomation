import { $ } from '@wdio/globals';
import Site from '../../page.js';
import popup from '../../searchPages/popup.js';

class pageTwo extends Site {
get p2i1 () {
    return $('[data-product-handle="personalized-cotton-stocking-with-tassel-pet-designs-2"]');
}
get p2i2 () {
    return $('[data-product-handle="personalized-drawstring-santa-gift-bags-for-girls"]');
}
get p2i3 () {
    return $('[data-product-handle="personalized-burlap-christmas-tree-skirt"]');
}
get p2i4 () {
    return $('[data-product-handle="personalized-princess-santa-bags"]');
}
get p2i5 () {
    return $('[data-product-handle="personalized-traditional-christmas-pillowcases"]');
}
get p2i6 () {
    return $('[data-product-handle="personalized-kids-christmas-round-ceramic-ornament"]');
}
get p2i7 () {
    return $('[data-product-handle="christmas-boy-superhero-pillowcases"]');
}
get p2i8 () {
    return $('[data-product-handle="personalized-christmas-pillowcases"]');
}
get p2i9 () {
    return $('[data-product-handle="non-personalized-11-oz-christmas-mugs"]');
}
get p2i10 () {
    return $('[data-product-handle="christmas-princess-pillowcases"]');
}
get p2i11 () {
    return $('[data-product-handle="personalized-christmas-silicone-oven-mitts"]');
}
get p2i12 () {
    return $('[data-product-handle="personalized-vintage-christmas-throw-pillow-covers"]');
}
get p2i13 () {
    return $('[data-product-handle="personalized-merry-and-bright-jumbo-santa-gift-bags"]');
}
get p2i14 () {
    return $('[data-product-handle="personalized-festive-holiday-mugs"]');
}
get p2i15 () {
    return $('[data-product-handle="copy-of-personalized-christmas-round-ceramic-ornament"]');
}
get p2i16 () {
    return $('[data-product-handle="personalized-red-truck-christmas-doormat"]');
}
get p2i17 () {
    return $('[data-product-handle="personalized-merry-christmas-with-burlap-gnome-doormat-1"]');
}
get p2i18 () {
    return $('[data-product-handle="personalized-vintage-santa-doormat"]');
}
get p2i19 () {
    return $('[data-product-handle="personalized-welcome-gingham-snowman-garden-flag-1"]');
}
get p2i20 () {
    return $('[data-product-handle="personalized-merry-christmas-truck-garden-flag"]');
}

get addTo() {
    return $('[data-default-text="Add to cart"]');
}
get addVerify() {
    return $('[class="sp-validate-overlay"]');
}
get reviewCheck() {
    return $('.custom-checkbox  ');
}
get topLine () {
    return $('[name="properties[Top line]"]');
}
get bottomLine () {
    return $('#bottom-line-0');
}
get sizeOption() {
    return $('[data-id="size-0"]');
}
get dateOption() {
    return $('[name="properties[Date]"]');
}
get nameOption() {
    return $('[name="properties[Name]"]');
}
get primaryText() {
    return $('#primary-text-0');
}
get secondaryText() {
    return $('#secondary-text-1');
}
get firstText() {
    return $('#first-line-0');
}
get secondText() {
    return $('#second-line-1');
}
get secondSizeOption() {
    return $('//div[@data-value="18x24"]');
}
get personalSkirt() {
    return $('[name="properties[Personalization (Skirt)]"]');
}
get personalCaps() {
    return $('[name="properties[Personalization (All Caps)]"]');
}
get santaPersonal() {
    return $('#Personalization-0-0');
}
get personalLow() {
    return $('#Personalization-1-0');
}
get personal2Low() {
    return $('#Personalization-2-0')
}
get printSide() {
    return $('[data-value="Print One Side"]');
}
get relatedProducts() {
    return $('[id="no-addons"] > [viewBox="0 0 20 20"]');
}

get designDiv() {
    return $('//div[@class="dynamic-preview-form-section extra"]/p[@class="h3"]');
}
get bottomConfirm() {
    return $('[class="bottom-banner confirmation opened"]');
}
get cartConfirm() {
    return $('[class="cart-link__bubble-num"]');
}

    async go2 () {
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');
        
        await this.p2i1.click();
        await this.bottomLine.scrollIntoView();
        await this.bottomLine.setValue('George');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i2.click();
        await this.bottomLine.setValue('Bill');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i3.click();
        await this.personalSkirt.setValue('Heyo');
        await this.addTo.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/cart');


        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i4.click();
        await this.sizeOption.click();
        await this.bottomLine.setValue('Alberty');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i5.click();
        await this.bottomLine.setValue('Benn');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i6.click();
        await this.bottomLine.setValue('Clyde');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i7.click();
        await this.bottomLine.setValue('Deryl');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i8.click();
        await this.nameOption.setValue('Erin');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i9.click();
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();



        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i10.click();
        popup.closePopup();
        await this.primaryText.setValue('GoodChristmas');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();



        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i11.click();
        await this.bottomLine.setValue('StolenValor');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i12.click();
        await this.primaryText.setValue('PrimaryTextLoL');
        await this.relatedProducts.click();
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();

        

        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i13.click();
        await this.bottomLine.setValue('Burts');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();

        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i14.click();
        await this.sizeOption.click();
        await this.nameOption.setValue('Mort');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();


        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        await this.p2i15.click();
        await this.nameOption.setValue('Rick');
        await this.dateOption.setValue('4000');
        await this.reviewCheck.click();
        await this.addTo.click();
        await this.bottomConfirm.waitForDisplayed();

        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');


        //now sold out yay

        // await this.p2i16.click();
        // await this.secondSizeOption.click();
        // await this.personalCaps.setValue('PHILLY');
        // popup.closePopup();
        // await this.addVerify.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/cart')

        
        // await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');
        
        // await this.p2i17.click();
        // await this.secondSizeOption.click();
        // await this.personalCaps.setValue('NotPhil');
        // await this.personalLow.setValue('Cheese');
        // await this.addVerify.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/cart')

        
        // await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        // await this.p2i18.click();
        // await this.secondSizeOption.click();
        // await this.santaPersonal.setValue('BarryPhil');
        // await this.addVerify.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/cart')

        
        // await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        // await this.p2i19.click();
        // await this.printSide.click();
        // await this.personalCaps.setValue('HuluWIth');
        // await this.personalLow.setValue('KingKong');
        // await this.addVerify.click();
        // await expect(browser).toHaveUrl('https://www.qualtry.com/cart')

        
        // await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

        // // await this.p2i20.click();
        // // await this.printSide.click();
        // // await this.personalLow.setValue('holy');
        // // await this.personal2Low.setValue('grail');
        // // await this.addVerify.click();
        // // await expect(browser).toHaveUrl('https://www.qualtry.com/cart')


        const cartNumber = await this.cartConfirm.getText();

        await expect(cartNumber).toBe('52');
        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=2');

    }
}
export default new pageTwo;