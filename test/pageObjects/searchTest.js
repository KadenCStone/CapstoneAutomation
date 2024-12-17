import { $ } from '@wdio/globals';
import Site from './mySite.js';
import { textEight, eightUrl, textNine, nineUrl, textTen, tenUrl } from './SearchValues.js';
import popup from './Popup.js';

class SearchBar extends Site {
    get Bar() {
        return $('//div[@class="header-item header-item--search small--hide"]/form/input[@placeholder="Search..."]');
    }
    get searchBtn() {
        return $('//div[@class="header-item header-item--search small--hide"]/form/button[@class="text-link site-header__search-btn site-header__search-btn--submit"]');
    }

    async searchQuery(query, expectedUrl, waitForElement) {
        await this.Bar.setValue(query);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl(expectedUrl);
        await waitForElement.waitForDisplayed({ timeout: 2000 });
    }

    async find() {
    await browser.url('https://qualtry.com');
    
    const searchQueries = [
        { query: "Cutting Board", expectedUrl: 'https://www.qualtry.com/search?type=product&q=Cutting+Board', waitForElement: $('[data-product-handle="personalized-cutting-board-11x17-bamboo"]') },
        { query: "@Cutting*Board)", expectedUrl: 'https://www.qualtry.com/search?type=product&q=%40Cutting*Board%29', waitForElement: $('[data-product-handle="personalized-11x17-christmas-bamboo-cutting-boards-1"]') },
        { query: "Stocking3", expectedUrl: 'https://www.qualtry.com/search?type=product&q=Stocking3', waitForElement: $('[data-product-handle="personalized-merry-and-bright-velvet-trimmed-christmas-stockings"]') },
        { query: "#&*(@($", expectedUrl: 'https://www.qualtry.com/search?type=product&q=%23%26*%28%40%28%24', waitForElement: $('[data-product-handle="personalized-plaid-christmas-stockings-1"]') },
        { query: "97459187358913847", expectedUrl: 'https://www.qualtry.com/search?type=product&q=97459187358913847', waitForElement: $('.hr--medium') },
        { query: "Ω", expectedUrl: 'https://www.qualtry.com/search?type=product&q=%CE%A9', waitForElement: $('.hr--medium') },
        { query: "Space Station", expectedUrl: 'https://www.qualtry.com/search?type=product&q=Space+Station', waitForElement: $('.hr--medium') },
        { query: textEight, expectedUrl: eightUrl, waitForElement: $('.hr--medium') },
        { query: textNine, expectedUrl: nineUrl, waitForElement: $('.hr--medium') },
        { query: textTen, expectedUrl: tenUrl, waitForElement: $('body') },
    ];

    for (const { query, expectedUrl, waitForElement } of searchQueries) {
        await this.Bar.setValue(query);

        const isPopupDisplayed = await popup.alert.isDisplayed();
        if (isPopupDisplayed) {
            await popup.closePopup();
        }

        await this.searchBtn.click();
        await expect(browser).toHaveUrl(expectedUrl);
        await waitForElement.waitForDisplayed({ timeout: 2000 });

        if (query === textNine || query === textTen) {
            const isPopupDisplayed = await popup.alert.isDisplayed();
            if (isPopupDisplayed) {
                await popup.closePopup();
            }
        }

        await browser.url('https://qualtry.com');
    }
}
}

export default new SearchBar();
