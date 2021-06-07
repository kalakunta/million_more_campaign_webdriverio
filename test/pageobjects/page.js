
module.exports = class Page {
    /**    
    * @param path 
    */
    open (path) {
        return browser.url(`https://www.volvocars.com/${path}`)
    }
}
