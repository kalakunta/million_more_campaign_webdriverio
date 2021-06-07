const Page = require('./page');

class MainPageVdo extends Page {

    open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    get cookieAcceptButton() { return $('.accept-cookies-button') }

    get pageMainVideoButton() { return $('//*[@id="Video-1"]/section/div/div/div/button') }
    get iframeMainVideo() { return $('//*[@id="Video-1"]/section/div/iframe') }
    get playerMainVideo() { return $('//*[@id="movie_player"]/div[1]/video') }
    get pauseMainVideo() { return $('.ytp-play-button') }

    get scrollToVideoTestimonial() { return $('#VideoTestimonials-1') }

    get amyVideoButton() { return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[1]/div[1]/div/button') }
    get summerVideoButton() { return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[2]/div[1]/div/button') }
    get lindaVideoButton() { return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[3]/div[1]/div/button') }
    get alexVideoButton() { return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[4]/div[1]/div/button') }
    
    async acceptCookie() {
        await (await this.cookieAcceptButton).click();
    }
    async getPlayerMain() {
        return await (await this.playerMainVideo);
    }


}

module.exports = new MainPageVdo();