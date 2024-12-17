import { $ } from '@wdio/globals';
import Site from './mySite.js';
import popup from './Popup.js';

class AddCart extends Site {
    get plusFirst () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Non-Personalized 11 oz. Christmas Mugs")]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Increase item quantity by one"]');        
    }
    get plusSecond () {
        return $('//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Friendsgiving Stemless Wine Glass")]/ancestor::div[@class="cart__item-details"]//div[@class="js-qty__wrapper"]/button[@aria-label="Increase item quantity by one"]');
    }
    get continueShopping () {
        return $('//a[@href="/collections/karis-test"]');
    }

    get searchBar() {
        return $('//div[@class="header-item header-item--search small--hide"]/form/input[@placeholder="Search..."]');
    }

    get searchGo() {
        return $('//div[@class="header-item header-item--search small--hide"]/form/button[@class="text-link site-header__search-btn site-header__search-btn--submit"]');
    }

    get cartConfirm() {
        return $('[class="cart-link__bubble-num"]');
    }

    get bottomConfirm() {
        return $('[class="bottom-banner-buttons"]');
    }

    getProductSelector(productHandle) {
        return $(`[data-product-handle="${productHandle}"]`);
    }

    getInputField(name) {
        return $(`[name="properties[${name}]"]`);
    }

    get checkbox() {
        return $('//div[@class="custom-checkbox  "]');
    }

    get submitCart() {
        return $('//button[@name="add"]');
    }

    async handleProductSelectors(selectors = {}) {
        if (selectors.color) await $(selectors.color).click();
        if (selectors.design) await $(selectors.design).click();
        if (selectors.size) await $(selectors.size).click();  
    }

    async handleProductProperties(properties = {}) {
        for (let [property, value] of Object.entries(properties)) {
            let inputField = this.getInputField(property);
            await inputField.setValue(value);
        }
    }

    async handleCartActions() {
        if (this.checkbox) await this.checkbox.click();
        if (this.submitCart) await this.submitCart.click();
        await this.bottomConfirm.waitForDisplayed({ timeout: 2000 });
    }

    async addProductToCart(product) {
        let { searchText, productHandle, selectors = {}, properties = {} } = product;

        await this.searchBar.setValue(searchText);
        await this.searchGo.click();
        popup.closePopup(); 

        await $(productHandle).click();
        await $('#DynamicPreviewFormWrap').waitForDisplayed({ timeout: 5000 });

        await this.handleProductSelectors(selectors);

        await this.handleProductProperties(properties);

        await this.handleCartActions();
    }

    async add() {
        let products = [
            {
                searchText: "Cutting Board",
                productHandle: '[data-product-handle="personalized-11x17-rectangle-maple-cutting-board-with-groove"]',
                selectors: {
                    color: '[data-id="color-1"]',
                    design: '[src="https://qualtry-applications.com/static/images/thumbs/7awx9fgni3423.jpg"]'
                },
                properties: {
                    'First line': 'Caw Caw',
                    'Second line': 'Eagle',
                    'Third line': 'est. 7.4.1776'
                }
            },
            {
                searchText: "Glass",
                productHandle: '[data-product-handle="personalized-friendsgiving-stemless-wine-glass"]',
            },
            {
                searchText: "Mug",
                productHandle: '[data-product-handle="non-personalized-11-oz-christmas-mugs"]',
            },
            {
                searchText: "Shot",
                productHandle: '[data-product-handle="personalized-shot-glasses-2"]',
                properties: {
                    'Initial': 'K',
                    'Middle line': 'P'
                }
            },
            {
                searchText: "Wallet",
                productHandle: '[data-product-handle="leather-phone-wallets"]',
                selectors: {
                    color: '//div[@data-value="Gray"]'
                },
                properties: {
                    'Name': 'GabeT'
                }
            }
        ];

        // Loop through all products
        for (let product of products) {
            console.log(`Searching for: ${product.searchText}`);

            await this.addProductToCart(product);

            await browser.url('https://www.qualtry.com/');
        }

        let cartNumber = this.cartConfirm.getText();
        await browser.waitUntil(
            async () => {
                cartNumber = await this.cartConfirm.getText();
                return cartNumber === '5';
            },
            { timeout: 5000 }
        );

    }

    async Continue () {

        await browser.url('https://www.qualtry.com/cart');

        await $('.cart__page').waitForDisplayed({ timeout: 2000 });
        
        let cartNumber = await this.cartConfirm.waitForDisplayed({ timeout: 5000 }).then(() => this.cartConfirm.getText());
        await expect(cartNumber).toBe('5');
        

        await this.plusFirst.waitForClickable({ timeout: 5000 }); 
        await this.plusFirst.waitForEnabled({ timeout: 5000 });
    

        await this.plusFirst.waitForClickable();
        await this.plusFirst.click();

        await this.plusFirst.waitForClickable();
        await this.plusSecond.click();

        await this.continueShopping.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/karis-test');



        await browser.url('https://www.qualtry.com');

        await browser.waitUntil(
            async () => {
                cartNumber = await this.cartConfirm.getText();
                return cartNumber === '7';
            },
            {
                timeout: 5000,
            }
        );
    }
}

export default new AddCart();
