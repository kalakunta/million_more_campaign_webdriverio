const { expect } = require('chai');

const MainPageImg = require('../../pageobjects/main.page.img');

describe('A million more campaign application page', () => {

    beforeEach( async() => {
        await MainPageImg.open();
    });

    it('should save some screenshots', async () => {
        
        await MainPageImg.acceptCookie();
        browser.saveFullPageScreen('fullScreenSnapshot', {});

        const location_1 = await MainPageImg.scrollToImgLocation1
        await location_1.scrollIntoView({ behavior: 'smooth', block: 'center' });

        browser.saveElement(MainPageImg.getBeltImg, 'firstImageElement', {});

        const location_2 = await MainPageImg.scrollToImgLocation2
        await location_2.scrollIntoView({ behavior: 'smooth', block: 'center' });

        browser.saveElement(MainPageImg.xc90Img, 'xc90ImageElement', {});
        browser.saveElement(MainPageImg.xc60Img, 'xc60ImageElement', {});
        browser.saveElement(MainPageImg.xc40HybImg, 'xc40HybImageElement', {});
        browser.saveElement(MainPageImg.xc40ElcImg, 'xc40ElcImageElement', {});

    })

    it('should compare successful with a baseline', () => {
    
        expect(browser.checkFullPageScreen('fullScreenSnapshot', {})).to.exist;
        expect(browser.checkElement(MainPageImg.getBeltImg, 'firstImageElement', {})).to.exist;
        expect(browser.checkElement(MainPageImg.xc90Img, 'xc90ImageElement', {})).to.exist;
        expect(browser.checkElement(MainPageImg.xc60Img, 'xc60ImageElement', {})).to.exist;
        expect(browser.checkElement(MainPageImg.xc40HybImg, 'xc40HybImageElement', {})).to.exist;
        expect(browser.checkElement(MainPageImg.xc40ElcImg, 'xc40ElcImageElement', {})).to.exist;
    });
    
        
});


