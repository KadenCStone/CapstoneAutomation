import { browser } from '@wdio/globals';

export default class Site {
    pullUp () {
        return browser.url('https://www.qualtry.com');
    }
}