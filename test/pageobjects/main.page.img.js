const Page = require('./page');

class MainPageImg extends Page {

    open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    get cookieAcceptButton() { return $('.accept-cookies-button') }
    
    get scrollToImgLocation1() { return $('#ImageWithText-1') }
    get scrollToImgLocation2() { return $('#ProductListCarousel-1') }
    
    get beltImg() { return $('//*[@id="ImageWithText-1"]/section/div[1]/div[1]/div/div/picture/img') }
    get xc90Img() { return $('//*[@id="ProductListCarousel-1"]/section/div[1]/div/div/div/div[1]/div[1]/div/div/div/div[1]/div/a/div[2]/picture/img') }
    get xc60Img() { return $('//*[@id="ProductListCarousel-1"]/section/div[1]/div/div/div/div[1]/div[1]/div/div/div/div[2]/div/a/div[2]/picture/img') }
    get xc40HybImg() { return $('//*[@id="ProductListCarousel-1"]/section/div[1]/div/div/div/div[1]/div[1]/div/div/div/div[3]/div/a/div[2]/picture/img') }
    get xc40ElcImg() { return $('//*[@id="ProductListCarousel-1"]/section/div[1]/div/div/div/div[1]/div[1]/div/div/div/div[4]/div/a/div[2]/picture/img') }

    async acceptCookie() {
        await (await this.cookieAcceptButton).click();
    }
    async getBeltImg() {
        return await this.beltImg
    }
    async getBeltImg() {
        return await this.xc90Img
    }
    async getBeltImg() {
        return await this.xc60Img
    }
    async getBeltImg() {
        return await this.xc40HybImg
    }
    async getBeltImg() {
        return await this.xc40ElcImg
    }

}

module.exports = new MainPageImg();