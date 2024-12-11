import { $ } from '@wdio/globals';
import Site from '../../page.js';

class pageFive extends Site {
    get p5i1 () {
        return $('[data-product-handle="personalized-merry-and-bright-magnetic-sign-set"]');
    }       
 
    get p5i2 () {
        return $('[data-product-handle="personalized-merry-and-bright-magnet-yard-set"]');
    }       
    get p5i3 () {
        return $('[data-product-handle="personalized-merry-and-bright-grey-cuff-stocking"]');
    }       
    get p5i4 () {
        return $('[data-product-handle="personalized-merry-and-bright-green-cuff-stocking"]');
    }       
    get p5i5 () {
        return $('[data-product-handle="personalized-merry-and-bright-garden-flag"]');
    }       
    get p5i6 () {
        return $('[data-product-handle="personalized-joy-to-the-world-throw"]');
    }       
    get p5i7 () {
        return $('[data-product-handle="personalized-christmas-tree-mason-jar"]');
    }       
    get p5i8 () {
        return $('[data-product-handle="personalized-wreath-hohoho-plush-sherman-bear"]');
    }       
    get p5i9 () {
        return $('[data-product-handle="personalized-elf-help-wine-gift-bag"]');
    }       
    get p5i10 () {
        return $('[data-product-handle="personalized-he-sees-you-when-youre-drinking-wine-gift-bag"]');
    }       
    get p5i11 () {
        return $('[data-product-handle="personalized-until-i-get-blitzen-wine-gift-bag"]');
    }       
    get p5i12 () {
        return $('[data-product-handle="personalized-santa-mason-jar"]');
    }       
    get p5i13 () {
        return $('[data-product-handle="personalized-until-i-get-blitzen-wine-glass"]');
    }       
    get p5i14 () {
        return $('[data-product-handle="personalized-initial-gnome-stocking-with-red-cuff"]');
    }       
    get p5i15 () {
        return $('[data-product-handle="personalized-snowman-garden-flag-1"]');
    }       
    get p5i16 () {
        return $('[data-product-handle="personalized-snowmen-resin-ornament"]');
    }       
    get p5i17 () {
        return $('[data-product-handle="personalized-snowmen-large-resin-ornament"]');
    }       
    get p5i18 () {
        return $('[data-product-handle="personalized-snowman-winter-scene-acrylic-heart-keepsake"]');
    }       
    get p5i19 () {
        return $('[data-product-handle="personalized-dear-santa-pillowcase"]');
    }       
    get p5i20 () {
        return $('[data-product-handle="personalized-snowman-sherpa-blanket"]');
    }       
    get p5i21 () {
        return $('[data-product-handle="personalized-elf-help-wine-glass"]');
    }       
    get p5i22 () {
        return $('[data-product-handle="personalized-snowman-family-doormat"]');
    }       
    get p5i23 () {
        return $('[data-product-handle="personalized-snowman-garden-flag"]');
    }       
    get p5i24 () {
        return $('[data-product-handle="personalized-snowman-large-round-ornament"]');
    }       
    get p5i25 () {
        return $('[data-product-handle="personalized-snowman-family-afghan-throw-blanket"]');
    }       
    get p5i26 () {
        return $('[data-product-handle="personalized-snowman-doormat"]');
    }       
    get p5i27 () {
        return $('[data-product-handle="personalized-stocking-ornament"]');
    }       
    get p5i28 () {
        return $('[data-product-handle="personalized-christmas-bird-ornamnet"]');
    }
    get p5i29 () {
        return $('[data-product-handle="personalized-snowman-afghan-throw-blanket"]');
    }       
    get p5i30 () {
        return $('[data-product-handle="personalized-christmas-llama-ornament"]');
    }       
    get p5i31 () {
        return $('[data-product-handle="personalized-snowflake-ornament"]');
    }       
    get p5i32 () {
     return $('[data-product-handle="personalized-santas-list-afghan-throw-blanket"]');
    }       
    get p5i33 () {
        return $('[data-product-handle="personalized-christmas-tree-dish-towel"]');
    }       
    get p5i34 () {
        return $('[data-product-handle="personalized-ho-ho-ho-santa-train-garen-flag"]');
    }       
    get p5i35 () {
        return $('[data-product-handle="personalized-joy-to-the-world-wood-ornament"]');
    } 


    get personalHere() {
        return $('[name="properties[Personalization]"]');
    }
    get initialHere() {
        return $('[name="properties[Initial]"]')
    }
    get personalDup() {
        return $('[name="properties[Personalization_1_io_duplicate]"]');
    }
    get printSide() {
        return $('[data-value="Print One Side"]');
    }
    get sizeFam () {
        return $('[value="3"]');
    }
    get secondSizeOption() {
        return $('//div[@data-value="18x24"]');
    }
    get snowmenClick() {
        return  $('[id="Number of Snowmen-0-1"]')
    }
    get numberSnowmen() {
        return $('[value="4"]');
    }
    get yearDate() {
        return $('[name="properties[Year]"]');
    }
    get famFirst () {
        return $('[id="Family Last Name-0-0"]');
    }
    get famName() {
        return $('[id="Family Member Name(s)-0-1"]');
    }
    get addThis() {
        return $('[class="sp-validate-overlay"]');
    }
    get cartConfirm() {
        return $('[class="cart-link__bubble-num"]');
    }


    async go5() {   

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5')

            await this.p5i1.click();
            await this.personalHere.setValue('Yellow');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart')

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5')

            await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');
            await this.p5i2.click();
            await this.personalHere.setValue('Red');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i3.click();
            await this.personalHere.setValue('Green');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i4.click();
            await this.personalHere.setValue('Blue');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i5.click();
            await this.printSide.click();
            await this.personalHere.setValue('Purple');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i6.click();
            await this.personalHere.setValue('Gray');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i7.click();
            await this.personalHere.setValue('Teal');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i8.click();
            await this.personalHere.setValue('Iron');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');


        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i9.click();
            await this.personalHere.setValue('Men');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i10.click();
            await this.personalHere.setValue('Snowmen');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i11.click();
            await this.personalHere.setValue('Snow');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i12.click();
            await this.personalHere.setValue('menofSnow');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i13.click();
            await this.personalHere.setValue('heather');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i14.click();
            await this.initialHere.setValue('Christmas');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');
        
        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i15.click();
            await this.printSide.click();
            await this.personalHere.setValue('albert');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');
            await this.p5i16.click();
            await this.sizeFam.click();
            await this.personalHere.setValue('Snowmen');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i17.click();
            await this.sizeFam.click();
            await this.personalHere.setValue('Snowmen');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i18.click();
            await this.personalHere.setValue('Jenry');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');
            
            await this.p5i19.click();
            await this.personalHere.setValue('barold');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i20.click();
            await this.personalHere.setValue('greyWolf');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i21.click();
            await this.personalHere.setValue('darkgrey');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i22.click();
            await this.snowmenClick.click();
            await this.numberSnowmen.click();
            await this.personalHere.setValue('baewulf');
            await this.personalDup.setValue('isABook');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i23.click();
            await this.printSide.click();
            await this.personalHere.setValue('jerrisa');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i24.click();
            await this.personalHere.setValue('barold');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i25.click();
            await this.snowmenClick.click();
            await this.numberSnowmen.click();
            await this.personalHere.setValue('hereisme');
            await this.personalDup.setValue('burrowing');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i26.click();
            await this.secondSizeOption.click();
            await this.personalHere.setValue('mehere');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');
            
            await this.p5i27.click();
            await this.personalHere.setValue('igohere');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i28.click();
            await this.personalHere.setValue('marryme');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i29.click();
            await this.personalHere.setValue('harrybee');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i30.click();
            await this.personalHere.setValue('jerryg');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');
            
            await this.p5i31.click();
            await this.yearDate.setValue('4000');
            await this.personalHere.setValue('barryP');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i32.click();
            await this.famFirst.setValue('Kobe');
            await this.famName.setValue('Brian');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i33.click();
            await this.personalHere.setValue('barryP');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i34.click();
            await this.printSide.click();
            await this.personalHere.setValue('finally');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');

            await this.p5i35.click();
            await this.personalHere.setValue('finally');
            await this.addThis.click();
            await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

        await browser.url('https://www.qualtry.com/collections/christmas-1?page=5');


        const cartNumber = await this.cartConfirm.getText();
        await expect(cartNumber).toBe('131');

    };



    }

export default new pageFive;