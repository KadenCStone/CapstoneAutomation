import { $ } from '@wdio/globals'
import Site from './page.js'

class bike extends Site {
    get nextPageBtn() {
        return $('//a[@title="Next"]')
    }
    async cycleThrough () {
        
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=2')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=3')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=4')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=5')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=6')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=7')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=8')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=9')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=10')
        await browser.pause(500)

        await this.nextPageBtn.click()
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1?page=11')
        await browser.pause(500)
    }
}

export default new bike