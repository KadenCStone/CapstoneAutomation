import { $ } from '@wdio/globals';
import Site from './mySite.js';

class RecentlyViewed extends Site {

    // Selectors
    get goCart() {
        return $('#HeaderCartTrigger');
    }
    get recentTab() {
        return $('[data-section-type="recently-viewed"]');
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
    get checkbox() {
        return $('//div[@class="custom-checkbox  "]');
    }
    get submit() {
        return $('//button[@name="add"]');
    }

    async handleProductSelectors(selectors = {}) {
        if (selectors.design) await $(selectors.design).click();
    }

    async handleProductProperties(properties = {}) {
        for (let [property, value] of Object.entries(properties)) {
            let inputField = $(`[name="properties[${property}]"]`);
            if (inputField) {
                await inputField.setValue(value);
            }
        }
    }

    async handleCartActions() {
        if (this.checkbox) await this.checkbox.click();
        if (this.submit) await this.submit.click();
        await this.bottomConfirm.waitForDisplayed({ timeout: 5000 });
    }

    async addProductToCart(product) {
        if (!product) {
            console.error('Product object is undefined or missing.');
            return;
        }

        const { productHandle, selectors = {}, properties = {} } = product;

        if (!productHandle) {
            console.error('Product handle is missing.');
            return;
        }

        console.log(`Adding product: ${productHandle}`);

        await this.recentTab.scrollIntoView();
        await this.getProductSelector(productHandle).click();
        await this.handleProductSelectors(selectors);
        await this.handleProductProperties(properties);
        await this.handleCartActions();
    }

    async ToCart() {
        let products = [
            {
                productHandle: 'personalized-friendsgiving-stemless-wine-glass', 
                properties: {}
            }
        ];

        if (!Array.isArray(products) || products.length === 0) {
            console.error('Products array is empty or not defined.');
            return;
        }

        for (let product of products) {
            console.log(`Adding product: ${product.productHandle}`);

            await this.goCart.click();

            await browser.waitUntil(
                async () => (await $('.cart__page').isDisplayed()), 
                { timeout: 5000, timeoutMsg: 'Cart page did not load in time.' }
            );

            await this.recentTab.scrollIntoView();

            await this.addProductToCart(product);

            await browser.url('https://www.qualtry.com/');
        }

        let cartNumber = await this.cartConfirm.getText();
        await browser.waitUntil(
            async () => {
                cartNumber = await this.cartConfirm.getText();
                return cartNumber === '8';  
            },
            { timeout: 5000 }
        );
    }

    get itemsToRemove() {
        return [
            {
                name: 'Personalized Friendsgiving Stemless Wine Glass',
                selector: '//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Friendsgiving Stemless Wine Glass")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]'
            },
            {
                name: 'Shot Glass with Initial K',
                selector: '//div[@class="cart__item-details"]/div[@class="cart__item-title"]/span[@class="cart-prs-line"]/b[contains(text(), "K")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]'
            },
            {
                name: 'Personalized Leather Phone Wallets',
                selector: '//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Personalized Leather Phone Wallets")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]'
            },
            {
                name: 'Non-Personalized 11 oz. Christmas Mugs',
                selector: '//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Non-Personalized 11 oz. Christmas Mugs")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]'
            },
            {
                name: 'Rectangle Cutting Board',
                selector: '//div[@class="cart__item-details"]/div[@class="cart__item-title"]/a[contains(text(), "Rectangle Cutting Board")]/ancestor::div[@class="cart__item-details"]//div[@class="cart__remove"]'
            }
        ];
    }

    async removeItems() {
        await browser.url('https://www.qualtry.com/cart'); 

        for (let item of this.itemsToRemove) {
            console.log(`Removing item: ${item.name}`);

            const removeButton = $(item.selector); 
            await removeButton.scrollIntoView(); 

            await removeButton.waitForClickable({ timeout: 5000 });
            await removeButton.click();         
        }

        await browser.url('https://www.qualtry.com');
    }
}

export default new RecentlyViewed();
