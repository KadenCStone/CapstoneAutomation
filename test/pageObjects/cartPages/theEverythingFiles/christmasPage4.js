import { $ } from '@wdio/globals';
import Site from '../../page.js';

class pageFour extends Site {
    get p4i1 () {
        return $('[data-product-handle="personalized-christmas-ornaments"]');
    }    
    get p4i2 () {
        return $('[data-product-handle="personalized-christmas-pillowcases-for-girls"]');
    } 
    get p4i3 () {
        return $('[data-product-handle="personalized-christmas-mason-jar-glasses"]');
    } 
    get p4i4 () {
        return $('[data-product-handle="personalized-reindeer-with-name-ornament-1"]');
    } 
    get p4i5 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-santa-sack-1"]');
    } 
    get p4i6 () {
        return $('[data-product-handle="personalized-merry-christmas-santa-with-holly-velour-hand-towel"]');
    } 
    get p4i7 () {
        return $('[data-product-handle="personalized-merry-and-bright-santa-sack-1"]');
    } 
    get p4i8 () {
        return $('[data-product-handle="personalized-gnome-family-throw-pillow-1"]');
    } 
    get p4i9 () {
        return $('[data-product-handle="personalized-berry-bow-snowman-ornament-1"]');
    } 
    get p4i10 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-grey-cuff-stocking"]');
    } 
    get p4i11 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-green-cuff-stocking"]');
    } 
    get p4i12 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-magnetic-sign-set"]');
    } 
    get p4i13 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-large-ornament"]');
    } 
    get p4i14 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-magnet-yard-set"]');
    } 
    get p4i15 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-ceramic-mug"]');
    } 
    get p4i16 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-red-cuff-stocking"]');
    }
    get p4i17 () {
        return $('[data-product-handle="personalized-merry-and-bright-ceramic-mug"]');
    }
    get p4i18 () {
        return $('[data-product-handle="personalized-welcome-gingham-gnome-doormat"]');
    }
    get p4i19 () {
        return $('[data-product-handle="personalized-welcome-gingham-snowman-doormat"]');
    }
    get p4i20 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-garden-flag"]');
    }
    get p4i21 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-wine-gift-bag"]');
    }
    get p4i22 () {
        return $('[data-product-handle="personalized-merry-and-bright-wine-gift-bag"]');
    }
    get p4i23 () {
        return $('[data-product-handle="personalized-christmas-tree-cream-garden"]');
    }
    get p4i24 () {
        return $('[data-product-handle="personalized-oh-christmas-tree-stainless-steel-camp-mug"]');
    }
    get p4i25 () {
        return $('[data-product-handle="personalized-merry-and-bright-stainless-steel-camp-mug"]');
    }
    get p4i26 () {
        return $('[data-product-handle="personalized-colorful-trees-large-ornament"]');
    }
    get p4i27 () {
        return $('[data-product-handle="personalized-welcome-gingham-gnome-wall-hanging"]');
    }
    get p4i28 () {
        return $('[data-product-handle="personalized-christmas-tree-grey-garden"]');
    }
    get p4i29 () {
        return $('[data-product-handle="personalized-welcome-gingham-gnome-potholder"]');
    }
    get p4i30 () {
        return $('[data-product-handle="personalized-happy-holidays-snowman-garden-flag"]');
    }
    get p4i31 () {
        return $('[data-product-handle="personalized-merry-and-bright-red-cuff-stocking"]');
    }

    
    get primaryText() {
        return $('#primary-text-0');
    }
    get bottomLine () {
        return $('#bottom-line-0');
    }
    get personalMod () {
        return $('#Personalization-0-0');
    }
    get personalCaps() {
        return $('[name="properties[Personalization (All Caps)]"]');
    }
    get personalSecond() {
        return $('#Personalization-0-1');
    }
    get famFirst () {
        return $('[id="Family Last Name-0-0"]');
    }
    get famName() {
        return $('[id="Family Member Name(s)-0-1"]');
    }
    get addVerify() {
        return $('[class="sp-validate-overlay"]');
    }
    get sizeOption() {
        return $('//div[@data-value="18x24"]');
    }
    get printSide() {
        return $('[data-value="Print One Side"]');
    }
    get addVerify() {
        return $('[class="sp-validate-overlay"]');
    }
    get addTo() {
        return $('[data-default-text="Add to cart"]');
    }
    get reviewCheck() {
        return $('.custom-checkbox  ');
    }
    get bottomConfirm() {
        return $('[class="bottom-banner confirmation opened"]');
    }
    get cartConfirm() {
        return $('[class="cart-link__bubble-num"]');
    }
    

    async go4 () {

    await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    await this.p4i1.click();
    await this.primaryText.setValue('OHenry');
    await this.reviewCheck.click();
    await this.addTo.click();
    await this.bottomConfirm.waitForDisplayed();
    

    await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    await this.p4i2.click();
    await this.bottomLine.setValue('Cherry');
    await this.reviewCheck.click();
    await this.addTo.click();
    await this.bottomConfirm.waitForDisplayed();

    await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    await this.p4i3.click();
    await this.reviewCheck.click();
    await this.addTo.click();
    await this.bottomConfirm.waitForDisplayed();

    await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

        //sold out yay

    // await this.p4i4.click();
    // await this.personalMod.setValue('NameHereFolks');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i5.click();
    // await this.personalMod.setValue('hereWEGO');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i6.click();
    // await this.personalCaps.setValue('INCOMING');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i7.click();
    // await this.personalMod.setValue('nextplease');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i8.click();
    // await this.famFirst.setValue('Buckingham');
    // await this.famName.setValue('YOOO');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4'); 

    // await this.p4i9.click();
    // await this.personalMod.setValue('HeyGuys');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i10.click();
    // await this.personalMod.setValue('GuyHey');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i11.click();
    // await this.personalMod.setValue('HeyYouGuys');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i12.click();
    // await this.personalMod.setValue('GuysGuys');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i13.click();
    // await this.personalMod.setValue('HEyHey');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i14.click();
    // await this.personalMod.setValue('HelloGuys');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i15.click();
    // await this.personalMod.setValue('GuysHello');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i16.click();
    // await this.personalMod.setValue('Guyshere');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i17.click();
    // await this.personalMod.setValue('heresguys');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');


    // await this.p4i18.click();
    // await this.sizeOption.click();
    // await this.personalMod.setValue('Worthington');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i19.click();
    // await this.sizeOption.click();
    // await this.personalMod.setValue('Worthington');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i20.click();
    // await this.printSide.click();
    // await this.personalMod.setValue('Bunny');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i21.click();
    // await this.personalMod.setValue('Fox');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i22.click();
    // await this.personalMod.setValue('TrotFox');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i23.click();
    // await this.printSide.click();
    // await this.personalMod.setValue('Bunny');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i24.click();
    // await this.personalMod.setValue('hound');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');
    
    // await this.p4i25.click();
    // await this.personalMod.setValue('wolf');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i26.click();
    // await this.personalMod.setValue('rabbit');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i27.click();
    // await this.personalMod.setValue('mole');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i28.click();
    // await this.printSide.click();
    // await this.personalMod.setValue('Fly');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i29.click();
    // await this.personalMod.setValue('bear');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i30.click();
    // await this.printSide.click();
    // await this.personalMod.setValue('Fly');
    // await this.personalSecond.setValue('herring');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    // await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');

    // await this.p4i31.waitForExist();
    // await this.p4i31.click();
    // await this.personalMod.setValue('bear');
    // await this.addVerify.click();
    // await expect(browser).toHaveUrl('https://www.qualtry.com/cart');

    await browser.url('https://www.qualtry.com/collections/christmas-1?page=4');



    const cartNumber = await this.cartConfirm.getText();
        await expect(cartNumber).toBe('95');

    };


}

export default new pageFour;