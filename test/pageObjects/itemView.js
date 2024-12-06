import { $ } from '@wdio/globals';
import Site from './page.js';
import bike from './cycle.js';

class itemView extends Site {
    get viewAll () {
        return $('//div/a[@href="/collections/christmas-1"]');
    }
    get smallView () {
        return $('//button[@title="Small"]');
    }
    get largeVeiw () {
        return $('//button[@data-view="large"]');
    }
    get listView () {
        return $('//button[@data-view="list"]');
    }
    async flow () {

        await this.open();

        await expect(browser).toHaveUrl('https://www.qualtry.com/');

        await this.viewAll.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1');

        await this.smallView.click();
        await bike.cycleThrough();

        await browser.url('https://www.qualtry.com/collections/christmas-1');
        
        await this.largeVeiw.click();
        await bike.cycleThrough();

        await browser.url('https://www.qualtry.com/collections/christmas-1');

        await this.listView.click();
        await bike.cycleThrough();

        await browser.url('https://www.qualtry.com');

    }
    
}

export default new itemView;