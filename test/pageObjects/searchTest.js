import { $ } from '@wdio/globals';
import SearchGo from './SearchValues.js';  
import Site from './mySite.js';
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

    const element = await $(waitForElement); 
    await element.waitForDisplayed({ timeout: 2000 });
  }

  async find() {
    await browser.url('https://qualtry.com');

    const searchQueries = SearchGo.getSearchQueries();

    for (let index = 0; index < searchQueries.length; index++) {
      const { query, expectedUrl, waitForElement } = searchQueries[index];

      await this.Bar.setValue(query);

      const isPopupDisplayed = await popup.alert.isDisplayed();
      if (isPopupDisplayed) {
        await popup.closePopup();
      }

      if (index === 8 || index === searchQueries.length - 1) {
        const isPopupDisplayed = await popup.alert.isDisplayed();
        if (isPopupDisplayed) {
          await popup.closePopup();
        }
      }

      await this.searchBtn.click();

      await expect(browser).toHaveUrl(expectedUrl);

      const element = await $(waitForElement); 
      await element.waitForDisplayed({ timeout: 2000 });

      if (index < searchQueries.length - 1) { 
        await browser.url('https://qualtry.com');
      }
    }
  }
}

export default new SearchBar();
