import { $ } from '@wdio/globals';
import Site from './mySite.js';
import Popup from './Popup.js';  

class pageOne extends Site {
  get addTo() { return $('[data-default-text="Add to cart"]'); }
  get addVerify() { return $('[class="sp-validate-overlay"]'); }
  get reviewCheck() { return $('.custom-checkbox'); }
  get bottomConfirm() { return $('[class="bottom-banner confirmation opened"]'); }
  get cartConfirm() { return $('[class="cart-link__bubble-num"]'); }
  get viewBtn() { return $('[class="icon icon-view-list"]'); }
  get ListView() {return $('[data-view="list"]')}

  get personalizationSelectors() {
    return {
      initialOption: '[name="properties[Initial]"]',
      relatedProducts: '[id="no-addons"] > [viewBox="0 0 20 20"]',
      nameOption: '[name="properties[Name]"]',
      primaryText: '[name="properties[Primary text]"]',
      secondaryText: '[name="properties[Secondary text]"]',
      bottomLine: '[name="properties[Bottom line]"]',
      dateOption: '[name="properties[Date]"]',
      spacingOption: '[value="spaces"]',
      firstLine: '[name="properties[First line]"]',
      secondLine: '[name="properties[Second line]"]',
      thirdLine: '[name="properties[Third line]"]',
      dropdownDesign: '[value="3129"]',
      middleLine: '[id="middle-line-0"]',
      printColor: '[data-id="artworkColor-1"]',
    };
  }

  async _waitForClickable(element) {
    await element.waitForDisplayed({ timeout: 10000 });
    await element.waitForClickable({ timeout: 10000 });
  }

  async _isPersonalizationAvailable(field) {
    const selector = this.personalizationSelectors[field];
    if (selector) {
      const element = await $(selector);
      return await element.isDisplayed();
    }
    return false;
  }

  async closePopupIfPresent() {
    try {
      await Popup.closePopup();
    } catch (e) {
      console.log("No popup found or an error occurred:", e);
    }
  }

  async _checkAddToCartButton() {
    const addToCartButton = await this.addTo;
    
    await addToCartButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const buttonText = await addToCartButton.getText();
  
    if (buttonText !== 'Add to cart') {
      return false;
    }
    
    await addToCartButton.moveTo();
    return true;
  }

  async go1() {
    const pages = ['https://www.qualtry.com/collections/black-november-tea-towels?sort_by=best-selling'];
    await this.ListView.click()
    const pageItemCounts = [30];
  
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      await browser.url(pages[pageIndex]); 
  
      for (let i = 1; i <= pageItemCounts[pageIndex]; i++) {
        const item = await $(`[class="grid-item grid-product "]:nth-child(${i})`);
        await item.click(); 
  
        await this.closePopupIfPresent();
  
        if (!(await this._checkAddToCartButton())) {
          await browser.back(); 
          continue;
        }
  
        let dynamicPreviewDisplayed = false;
        try {
          dynamicPreviewDisplayed = await $('[id="DynamicPreviewFormWrap"]').waitForDisplayed({ timeout: 10000 });
          console.log('DynamicPreviewFormWrap displayed');
        } catch (err) {
          console.log('DynamicPreviewFormWrap not displayed, checking for [data-product-blocks].');
        }
  
        if (!dynamicPreviewDisplayed) {
          try {
            dynamicPreviewDisplayed = await $('[class="thumbnails"]').waitForDisplayed({ timeout: 10000 });
            console.log('Found [class="thumbnails"]');
          } catch (err) {
            console.log('[class="thumbnails"] not displayed, moving on.');
          }
        }
  
        if (!dynamicPreviewDisplayed) {
          console.log('Neither [id="DynamicPreviewFormWrap"] nor [class="thumbnails"] were displayed within the timeout. Moving on.');
          continue;
        }
  
        if (await this._isPersonalizationAvailable('initialOption')) {
          await $(this.personalizationSelectors.initialOption).setValue('C');
        }
  
        if (await this._isPersonalizationAvailable('primaryText')) {
          await $(this.personalizationSelectors.primaryText).setValue('PrimaryText HERE');
        }
  
        if (await this._isPersonalizationAvailable('secondaryText')) {
          await $(this.personalizationSelectors.secondaryText).setValue('TextTwoHere');
        }
  
        if (await this._isPersonalizationAvailable('bottomLine')) {
          await $(this.personalizationSelectors.bottomLine).setValue('BheE');
        }
  
        if (await this._isPersonalizationAvailable('dateOption')) {
          await $(this.personalizationSelectors.dateOption).setValue('3242');
        }
  
        if (await this._isPersonalizationAvailable('nameOption')) {
          await $(this.personalizationSelectors.nameOption).setValue('balgo');
        }
  
        if (await this._isPersonalizationAvailable('spacingOption')) {
          await $(this.personalizationSelectors.spacingOption).click();
        }
  
        if (await this._isPersonalizationAvailable('firstLine')) {
          await $(this.personalizationSelectors.firstLine).setValue('firsthere');
        }
  
        if (await this._isPersonalizationAvailable('secondLine')) {
          await $(this.personalizationSelectors.secondLine).setValue('secondLine');
        }
  
        if (await this._isPersonalizationAvailable('thirdLine')) {
          await $(this.personalizationSelectors.thirdLine).setValue('kero');
        }
  
        if (await this._isPersonalizationAvailable('dropdownDesign')) {
          await $(this.personalizationSelectors.dropdownDesign).click();
        }
  
        if (await this._isPersonalizationAvailable('relatedProducts')) {
          await $(this.personalizationSelectors.relatedProducts).click();
        }
  
        if (await this._isPersonalizationAvailable('middleLine')) {
          await $(this.personalizationSelectors.middleLine).setValue('middlename');
        }
  
        if (await this._isPersonalizationAvailable('printColor')) {
          await $(this.personalizationSelectors.printColor).click();
        }
  
        if (await this.reviewCheck.isDisplayed()) {
          await this.reviewCheck.click();
        }
  
        await this.addTo.click();
  
        const bottomConfirmationDisplayed = await this.bottomConfirm.isDisplayed();
        const cartConfirmationDisplayed = await this.cartConfirm.isDisplayed();
  
        if (bottomConfirmationDisplayed) {
          await this.bottomConfirm.waitForDisplayed({ timeout: 5000 });
        } else if (cartConfirmationDisplayed) {
          await this.cartConfirm.waitForDisplayed({ timeout: 5000 });
        }
  
        await browser.url(pages[pageIndex]); 
      }
    }
  }
}

export default new pageOne();
