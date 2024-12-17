import { $ } from '@wdio/globals';
import Site from './mySite.js';
import bike from './Cycle.js';  // Import the 'bike' class

class itemView extends Site {
    // Selectors for the different view options
    get viewAll() {
        return $('//div/a[@href="/collections/christmas-1"]');
    }
    get smallView() {
        return $('//button[@title="Small"]');
    }
    get largeView() {
        return $('//button[@data-view="large"]');
    }
    get listView() {
        return $('//button[@data-view="list"]');
    }

    async flow() {
        await this.NavSite();
        await expect(browser).toHaveUrl('https://www.qualtry.com/');

        // View All and navigate
        await this.viewAll.click();
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1');

        await bike.cycleThrough('small');  // Pass 'small' view type to cycle through

        // Go back to the main page after finishing
        await browser.url('https://www.qualtry.com');
    }
}

export default new itemView();
