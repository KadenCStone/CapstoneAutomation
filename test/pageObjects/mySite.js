import { browser } from '@wdio/globals';

export default class Site {
    NavSite () {
        return browser.url('https://www.qualtry.com');
    }
}