import { $ } from '@wdio/globals';
import Site from './mySite.js';

class popup extends Site {

    get alert() {
        return $('//div[@class="yotpo-smsbump-modal__backdrop sc-151px96-2 xDyZz"]');
    }

    get closeButton() {
        return $('//button[@aria-label="Close"]');
    }

    async closePopup() {
        this.alert.waitForDisplayed({ timeout: 5000 });
        this.closeButton.click();
    }
}

export default new popup();
