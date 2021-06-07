const Page = require('./page');

class MainPageTxt extends Page {

    open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    get cookieAcceptButton() { return $('.accept-cookies-button') }
    
    get pageHeader() { return $("section[data-autoid='ModelIntro'] > h2") }
    get pageSubHeader() { return $("section[data-autoid='ModelIntro'] > p") }
    get textStatement_1() { return $("p.eu.ev > span.fg") }
    get textStatement_2() { return $("p.eu.ev > span.fh") }

    get scrollToIconCallouts() { return $('#IconCallouts-1') } 

    get headings_1() { return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[1]/div[2]/em') }
    get headings_2() { return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[2]/div[2]/em') }
    get headings_3() { return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[3]/div[2]/em') }
    get headings_4() { return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[4]/div[2]/em') }
    
    async acceptCookie() {
        await (await this.cookieAcceptButton).click();
    }

    
    async getHeaderText() {
        return await (await this.pageHeader).getText();
    }
    async getSubHeaderText() {
        return await (await this.pageSubHeader).getText();
    }
    async textStatement_1Text() {
        return await (await this.textStatement_1).getText();
    } 
    async textStatement_2Text() {
        return await (await this.textStatement_2).getText();
    }
    async headings_1Text() {
        return await (await this.headings_1).getText();
    }
    async headings_2Text() {
        return await (await this.headings_2).getText();
    }
    async headings_3Text() {
        return await (await this.headings_3).getText();
    } 
    async headings_4Text() {
        return await (await this.headings_4).getText();
    }


}

module.exports = new MainPageTxt();