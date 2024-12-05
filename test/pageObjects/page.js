import { browser } from '@wdio/globals'

export default class Site {
    open () {
        return browser.url('https://www.qualtry.com')
    }
}