const { expect } = require('chai');

const MainPageVdo = require('../../pageobjects/main.page.vdo');

describe('A million more campaign application page', () => {

    before( async() => {
        await MainPageVdo.open();
    });

    it ('need to have proper video contents in the page', async () => {
        
        await MainPageVdo.acceptCookie();

        const videoMain = await MainPageVdo.pageMainVideoButton
        expect(await videoMain).to.exist;
        await videoMain.click()
       
        const videoIframe = await MainPageVdo.iframeMainVideo
        await browser.switchToFrame(await videoIframe)

        const playPauseButton = await MainPageVdo.pauseMainVideo
        expect(await playPauseButton).to.exist;
        await playPauseButton.click()

        await browser.switchToParentFrame();

        const location_1 = await MainPageVdo.scrollToVideoTestimonial
        await location_1.scrollIntoView({ behavior: 'smooth', block: 'center' });

        const amyVideoButton = await MainPageVdo.amyVideoButton
        expect(await amyVideoButton).to.exist;
        await amyVideoButton.click()

        const summerVideoButton = await MainPageVdo.summerVideoButton
        expect(await summerVideoButton).to.exist;
        await summerVideoButton.click()

        await browser.pause(2000);
        
        const lindaVideoButton = await MainPageVdo.lindaVideoButton
        expect(await lindaVideoButton).to.exist;
        await lindaVideoButton.click()    

        const alexVideoButton = await MainPageVdo.alexVideoButton
        expect(await alexVideoButton).to.exist;
        await alexVideoButton.click()       
        
    })    
});