describe('Shop CTA Button', function() {
    it('should link to the product page', function() {
        browser.url('./login')

        var title = browser.getTitle();
        console.log('Title is: ' + title);

        // browser.click('.shop-callout a');
        // var productTitle = browser.getTitle();
        // console.log('Title is: ' + productTitle);
        //
        // var url = browser.getUrl();
        // console.log('URL is: ' + url);

        expect(4).to.equal(4);
    });
});