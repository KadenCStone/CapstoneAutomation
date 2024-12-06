import { $ } from '@wdio/globals';
import Site from './page.js';
import {textOne, textTwo, textThree, textFour, textFive, textSix, textSeven, textEight, eightUrl, textNine, nineUrl, textTen, tenUrl, textBomb} from './searchValues.js';
import popup from './popup.js';


class searchBar extends Site {
    get Bar () {
        return $('//div[@class="header-item header-item--search small--hide"]/form/input[@placeholder="Search..."]');
    }
    get searchBtn() {
        return $('//div[@class="header-item header-item--search small--hide"]/form/button[@class="text-link site-header__search-btn site-header__search-btn--submit"]');
    }
    async find () {
        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textOne);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Cutting+Board');
        await browser.pause(500);

        await browser.url('https://qualtry.com');
        
        await this.Bar.setValue(textTwo);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=%40Cutting*Board%29');
        await browser.pause(500)

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textThree);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Stocking3');
        await browser.pause(500);

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textFour);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=%23%26*%28%40%28%24');
        await browser.pause(500)

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textFive);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=97459187358913847');
        await browser.pause(500);

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textSix);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=%CE%A9');
        await browser.pause(500);

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textSeven);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/search?type=product&q=Space+Station');
        await browser.pause(500);

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textEight);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl(eightUrl);
        await browser.pause(500);

        await browser.url('https://qualtry.com');

        await this.Bar.setValue(textNine);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl(nineUrl);
        await browser.pause(500);

        await browser.url('https://qualtry.com');

        popup.closePopup();

        await this.Bar.setValue(textTen);
        await this.searchBtn.click();
        await expect(browser).toHaveUrl(tenUrl);

        await browser.url('https://qualtry.com');


        await this.Bar.setValue(textBomb);
        await browser.pause(500);

        await browser.url('https://qualtry.com');

    }
}

export default new searchBar;