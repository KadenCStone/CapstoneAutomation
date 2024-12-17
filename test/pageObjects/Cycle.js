import { $ } from '@wdio/globals';
import Site from './mySite.js';

class bike extends Site {
    get nextPageBtn() {
        return $('//a[@title="Next"]');
    }

    get gridItems() {
        return $('[class="grid-item grid-product "]');
    }

    pageUrls = [
        'https://www.qualtry.com/collections/christmas-1?page=2',
        'https://www.qualtry.com/collections/christmas-1?page=3',
        'https://www.qualtry.com/collections/christmas-1?page=4',
        'https://www.qualtry.com/collections/christmas-1?page=5',
        'https://www.qualtry.com/collections/christmas-1?page=6',
        'https://www.qualtry.com/collections/christmas-1?page=7',
        'https://www.qualtry.com/collections/christmas-1?page=8',
        'https://www.qualtry.com/collections/christmas-1?page=9',
        'https://www.qualtry.com/collections/christmas-1?page=10',
        'https://www.qualtry.com/collections/christmas-1?page=11'
    ];

    MyValues = ['small', 'large', 'list'];

    async checkDataView(view) {
        const grid = $('div.new-grid.product-grid.collection-grid');
        await grid.waitForExist({ timeout: 5000 }); 

        await browser.waitUntil(async () => {
            const dataView = await grid.getAttribute('data-view');
            return dataView === view;
        }, {
            timeout: 8000,
        });
    }

    async cycleThrough() {
        await expect(browser).toHaveUrl('https://www.qualtry.com/collections/christmas-1');

        let cycleCount = 0; 

       for (let view of this.MyValues) {
            cycleCount++;

            await this.switchToView(view);

            await this.gridItems.waitForDisplayed({ timeout: 5000 });

            for (let i = 0; i < this.pageUrls.length; i++) {
                await this.gridItems.waitForDisplayed({ timeout: 4000 });

                await this.nextPageBtn.click();


                if (i <= 2) {
                    await this.switchToView(view);
                    await this.checkDataView(view);  
                }

                if (i + 0 < this.pageUrls.length) {
                    await expect(browser).toHaveUrl(this.pageUrls[i + 0]);  
                }
            }
            
            await browser.url('https://www.qualtry.com/collections/christmas-1');

            
        }
        if (cycleCount === 3) {
            console.log("Third view cycle completed. Stopping execution.");
            await browser.url('https://www.qualtry.com');  
            return;
        }

        await browser.url('https://www.qualtry.com')
    }

    async switchToView(view) {
        switch (view) {
            case 'small':
                await $('//button[@title="Small"]').click();
                break;
            case 'large':
                await $('//button[@data-view="large"]').click();
                break;
            case 'list':
                await $('//button[@data-view="list"]').click();
                break;
        }

        await this.gridItems.waitForDisplayed({ timeout: 4000 });

        await this.checkDataView(view);
    }
}

export default new bike();
