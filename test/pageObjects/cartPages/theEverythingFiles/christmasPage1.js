import { $ } from '@wdio/globals';
import Site from '../../page.js';

class pageOne extends Site {
get p1i1 () {
    return $('[data-product-handle="personalized-plaid-christmas-stockings-1"]');
}
get i1Color () {
    return $('[data-value="Red"]');
}
get i1Design () {
    return $('//span[@class="product-customizer-select-wrap"]/select/option[@data-index="3"]');
}
get i1Change() {
    return $('[name="properties[Personalization (stocking)]"]');
}

get p1i2 () {
    return $('[data-product-handle="personalized-velvet-trimmed-christmas-stockings"]');
}
get i2Text() {
    return $('#primary-text-0');
}



get p1i3 () {
    return $('[data-product-handle="personalized-christmas-santa-bags"]');
}
get sizeOption() {
    return $('[data-id="size-0"]');
}


get p1i4 () {
    return $('[data-product-handle="personalized-christmas-santa-bags-cotton"]');
}
get i4TextOne() {
    return $('[name="properties[First line]"]');
}
get i4TextTwo() {
    return $('[name="properties[Second line]"]');
}


get p1i5 () {
    return $('[data-product-handle="customized-velvet-christmas-stockings"]');
}
get i5Text() {
    return $('[name="properties[Personalization]"]')
}


get p1i6 () {
    return $('[data-product-handle="personalized-christmas-serving-boards-4-designs"]');
}


get p1i7 () {
    return $('[data-product-handle="personalized-kids-santa-bags-cotton"]');
}
get p1i8 () {
    return $('[data-product-handle="personalized-red-and-green-plaid-stockings-printed"]');
}
get i8Initial() {
    return $('#initial-0')
}


get p1i9 () {
    return $('[data-product-handle="personalized-holiday-bamboo-cutting-board-11x14-rounded-edge"]');
}
get notTop() {
    return $('[name="properties[Bottom line]"]')
}


get p1i10 () {
    return $('[data-product-handle="personalized-photo-ceramic-christmas-ornaments"]');
}


get p1i11 () {
    return $('[data-product-handle="personalized-drawstring-santa-gift-bag-1"]');
}


get p1i12 () {
    return $('[data-product-handle="personalized-kids-santa-bags"]');
}
get p1i13 () {
    return $('[data-product-handle="jumbo-santa-bag"]');
}
get p1i14 () {
    return $('[data-product-handle="personalized-merry-and-bright-velvet-trimmed-christmas-stockings"]');
}
get relatedProducts() {
    return $('[id="no-addons"] > [viewBox="0 0 20 20"]');
}


get p1i15 () {
    return $('[data-product-handle="personalized-woodland-christmas-throw-pillow-covers"]');
}
get p1i16 () {
    return $('[data-product-handle="personalized-farmhouse-christmas-tea-towels"]');
}
get p1i17 () {
    return $('[data-product-handle="santa-s-nice-or-naughty-list-throw-pillow-covers"]');
}
get p1i18 () {
    return $('[data-product-handle="personalized-2020-drawstring-santa-gift-bags"]');
}
get p1i19 () {
    return $('[data-product-handle="personalized-christmas-tea-towels-1"]');
}
get p1i20 () {
    return $('[data-product-handle="personalized-jumbo-santa-gift-bags-santa-s-workshop-collection"]');
}
get p1i21 () {
    return $('[data-product-handle="personalized-cotton-stocking-with-tassel-printed-name-2"]');
}
get p1i22 () {
    return $('[data-product-handle="personalized-11x17-christmas-bamboo-cutting-boards-1"]');
}
get p1i23 () {
    return $('[data-product-handle="personalized-velvet-trimmed-christmas-pet-stockings"]');
}
get p1i24 () {
    return $('[data-product-handle="personalized-small-christmas-season-gift-bags"]');
}
get p1i25 () {
    return $('[data-product-handle="personalized-princess-santa-bags-cotton"]');
}
get p1i26 () {
    return $('[data-product-handle="personalized-merry-and-bright-christmas-drawstring-santa-gift-bags"]');
}
get p1i27 () {
    return $('[data-product-handle="santa-s-nice-or-naughty-list-personalized-tea-towels"]');
}
get p1i28 () {
    return $('[data-product-handle="personalized-merry-and-bright-christmas-gift-bags"]');
}

get p1i29 () {
    return $('[data-product-handle="personalized-is-it-christmas-yeti-ornament"]');
}
get p1i30 () {
    return $('[data-product-handle="personalized-red-ribbon-santa-gift-bags-santa-s-workshop-collection"]');
}
get p1i31 () {
    return $('[data-product-handle="personalized-snowman-vintage-christmas-tea-towel"]');
}
get p1i32 () {
    return $('[data-product-handle="personalized-holiday-tea-towels"]');
}
get p1i33 () {
    return $('[data-product-handle="personalized-velvet-trimmed-christmas-stockings-for-girls"]');
}
get p1i34 () {
    return $('[data-product-handle="personalized-holiday-gift-bags"]');
}
get p1i35 () {
    return $('[data-product-handle="personalized-bells-vintage-christmas-ornament"]');
}


get addTo() {
    return $('[data-default-text="Add to cart"]');
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

async go1 () {
    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i1.click();
    await this.i1Color.click();
    await this.i1Design.click();
    await this.i1Change.setValue('Benny');
    await this.addTo.click();
    
    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i2.click();
    await this.i2Text.setValue('Merica')
    await this.reviewCheck.click();
    await this.addTo.click();

    
    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i3.click();
    await this.sizeOption.click();
    await this.bottomLine.setValue('Turner');
    await this.reviewCheck.click();
    await this.addTo.click();


    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i4.click();
    await this.sizeOption.click();
    await this.bottomLine.setValue('Jimmothy');
    await this.reviewCheck.click();
    await this.addTo.click();


    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i5.click();

    await this.i1Color.click();

    await this.i1Design.click();

    await this.i5Text.setValue('Harry');

    await this.addTo.click();


    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i6.click();
    await this.bottomLine.setValue('Jorge');
    await this.reviewCheck.click();
    await this.addTo.click();


    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i7.click();
    await this.sizeOption.click();
    await this.bottomLine.setValue('Jimmothy');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i8.click();
    await this.i8Initial.setValue('K');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i9.click();
    await this.sizeOption.click();
    await this.topLine.setValue('Hello');
    await this.notTop.setValue('JohnSon');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i10.click();
    await this.dateOption.setValue('3000');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i11.click();
    await this.primaryText.setValue('Benjamin');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');


    await this.p1i12.click();
    await this.sizeOption.click();
    await this.bottomLine.setValue('HelloAgain');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i13.click();
    await this.primaryText.setValue('Beth');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i14.click();
    await this.bottomLine.setValue('harold');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i15.click();
    await this.bottomLine.setValue('JJ')
    await this.reviewCheck.click();
    await this.relatedProducts.isClickable();
    await this.relatedProducts.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i16.click();
    await this.primaryText.setValue('Bernie');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i17.click();
    await this.primaryText.setValue('The impaled');
    await this.nameOption.setValue('Vlad');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i18.click();
    await this.nameOption.setValue('Flula');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i19.click();
    await this.primaryText.setValue('Barry');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i20.click();
    await this.primaryText.setValue('Henry');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i21.click();
    await this.nameOption.setValue('Jerry');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i22.click();
    await this.bottomLine.setValue('Jimmothy');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i23.click();
    await this.bottomLine.setValue('aiefja');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');


    await this.p1i24.click();
    await this.bottomLine.setValue('asdlfjaef');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');


    await this.p1i25.click();
    await this.sizeOption.click();
    await this.bottomLine.setValue('princessing');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i26.click();
    await this.bottomLine.setValue('Karen');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i27.click();
    await this.primaryText.setValue('nice');
    await this.nameOption.setValue('Henry');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i28.click();
    await this.bottomLine.setValue('Timmy');
    await this.reviewCheck.click();
    await this.addTo.click();
    

    await browser.url('https://www.qualtry.com/collections/christmas-1');


    await this.p1i29.click();
    await this.primaryText.setValue('homeslice');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i30.click();
    await this.firstText.setValue('aeoaf');
    await this.secondText.setValue('werwev');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i31.click();
    await this.primaryText.click();
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i32.click();
    await this.primaryText.setValue('auewhoh');
    await this.secondaryText.setValue('aeuhaie')
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');


    await this.p1i33.click();
    await this.bottomLine.setValue('asejfaliejf');
    await this.reviewCheck.click();
    await this.addTo.click();
    
    await browser.url('https://www.qualtry.com/collections/christmas-1');


    await this.p1i34.click();
    await this.firstText.setValue('barry');
    await this.secondText.setValue('harry');
    await this.reviewCheck.click();
    await this.addTo.click();

    await browser.url('https://www.qualtry.com/collections/christmas-1');

    await this.p1i35.click();
    await this.primaryText.setValue('suitcase');
    await this.reviewCheck.click()
    await this.addTo.click();
    
    await browser.url('https://www.qualtry.com/collections/christmas-1');




}

}

export default new pageOne;