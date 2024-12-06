import { $ } from '@wdio/globals';
import Site from './page.js';
import { textOne } from './searchValues.js';
import popup from './popup.js';
import { Glass, Mug, Shot, Wallet } from './cartItems.js';

class addCart extends Site {
    get searchBar() {
        return $('//div[@class="header-item header-item--search small--hide"]/form/input[@placeholder="Search..."]');
    }
    get searchGo () {
        return $('//div[@class="header-item header-item--search small--hide"]/form/button[@class="text-link site-header__search-btn site-header__search-btn--submit"]');
    }
    get addCutBoard () {
        return $('[data-product-handle="personalized-11x17-rectangle-maple-cutting-board-with-groove"]');
    }
    get selectColor () {
        return $('[data-id="color-1"]');
    }
    get selectDesign () {
        return $('[src="https://qualtry-applications.com/static/images/thumbs/7awx9fgni3423.jpg"]');
    }
    get firstLine () {
        return $('[name="properties[First line]"]');
    }
    get secondLine () {
        return $('[name="properties[Second line]"]');
    }
    get thirdLine () {
        return $('[name="properties[Third line]"]');
    }
    get addGlass () {
        return $('[data-product-handle="personalized-friendsgiving-stemless-wine-glass"]');
    }
    get addMug () {
        return $('[data-product-handle="non-personalized-11-oz-christmas-mugs"]');
    }
    get addShot () {
        return $('[data-product-handle="personalized-shot-glasses-2"]');
    }
    get fillShot () {
        return $('[id="initial-0"]');
    }
    get shotSelect () {
        return $('//img[@alt="719"]');
    }
    get addWallet() {
        return $('[data-product-handle="leather-phone-wallets"]');
    }
    get walletColor() {
        return $('//div[@data-value="Gray"]');
    }
    get walletLetter() {
        return $('[placeholder=" Willow"]')
    }
    get checkbox() {
        return $('//div[@class="custom-checkbox  "]');
    }
    get submitCart () {
        return $('//button[@name="add"]');
    }
    get continueShopping () {
        return $('//button[contains(text(), "CONTINUE SHOPPING")]');
    }


    async add () {
        //search for first item
        await this.searchBar.setValue(textOne);
        await this.searchGo.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Cutting+Board');

        //adding of first item (cutting board)
        await this.addCutBoard.click();
        await browser.pause(2000);
        await this.selectDesign.click();
        await this.selectColor.click();
        await this.firstLine.setValue('Caw Caw');
        await this.secondLine.setValue('Eagle');
        await this.thirdLine.setValue('est. 7.4.1776');
        await this.checkbox.click();
        await this.submitCart.click();
        await this.continueShopping.click();

        //refresh page
        await browser.url('https://www.qualtry.com');

        //adding of next 4 items (Coasters, Mug, Shot Glass, and Wallet)

        await this.searchBar.setValue(Glass);
        await this.searchGo.click();

        popup.closePopup();

        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Glass');

        await this.addGlass.click();
        await this.checkbox.click();
        await this.submitCart.click();

        await browser.url('https://www.qualtry.com');

        await this.searchBar.setValue(Mug);
        await this.searchGo.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Mug');

        await this.addMug.click();
        await this.checkbox.click();
        await this.submitCart.click();
        await this.continueShopping.click();

        await browser.url('https://www.qualtry.com');

        


        await this.searchBar.setValue(Shot);
        await this.searchGo.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Shot+Glass');

        await this.addShot.click();
        await browser.pause(2000);
        await this.shotSelect.click();
        await this.fillShot.setValue('K');
        await this.checkbox.click();
        await this.submitCart.click();


        await browser.url('https://www.qualtry.com');



        await this.searchBar.setValue(Wallet);
        await this.searchGo.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Wallet');

        await this.addWallet.click();
        await browser.pause(2000);
        await this.walletColor.click();
        await this.walletLetter.setValue('TysonLupus');
        await this.checkbox.click();
        await this.submitCart.click();
        await this.continueShopping.click();

        await browser.url('https://www.qualtry.com')


        //open cart and add some from "recently viewed"

        
        //calling "removeCart" from removeCart.js to remove a couple items using the "remove" button and selecting the "-" symbol

        //moving to cart to select "+" on some items and select "continue shopping"

        //calling in "addEverything" from addingItAll.js to add everything on the site to the cart 

        //calling in "cartCheck" from checkMyCart.js to check all links in cart to make sure they take me to the same place as when I clicked "add to cart"

        //calling in "checkMessage" from checkbox.js to check the box and write a message

        // selecting "checkout" then going back to cart

        //selecting "shop pay"

       
       
       
       
        //test end :D


        
    }
}
export default new addCart;