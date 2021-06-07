const { expect } = require('chai');

const MainPageTxt = require('../../pageobjects/main.page.txt');

describe('This page relates to testing million more campaign website', () => {

    before( async() => {
        await MainPageTxt.open();
    });

    it('it need to exist exact contents related to the page', async () => {
        
        await MainPageTxt.acceptCookie();

        expect(await MainPageTxt.getHeaderText()).to.have.string('Ideas that change the world are often the most controversial')
        expect(await MainPageTxt.getSubHeaderText()).to.have.string('After we introduced the 3-point safety belt,')

        expect(await MainPageTxt.textStatement_1Text()).to.have.string('A million more')
        expect(await MainPageTxt.textStatement_2Text()).to.have.string('With new and existing safety')

        const location_1 = await MainPageTxt.scrollToIconCallouts
        await location_1.scrollIntoView( );

        expect(await MainPageTxt.headings_1Text()).to.have.string('Speed cap')    
        expect(await MainPageTxt.headings_2Text()).to.have.string('Highway pilot')
        expect(await MainPageTxt.headings_3Text()).to.have.string('Driver monitoring cameras')
        expect(await MainPageTxt.headings_4Text()).to.have.string('Care Key')
    })
    
});


