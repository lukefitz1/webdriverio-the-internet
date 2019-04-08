describe('Login success suite', function() {
    it('should select the first value in the dropdown', function() {
        browser.url('./add_remove_elements/');

        browser.click('#content > div > button');

        expect(browser.isVisible('#elements > button')).to.be.true;
    });

    it('should select the first value in the dropdown', function() {
        browser.url('./add_remove_elements/');

        // add element to page
        browser.click('#content > div > button');

        // wait for new element, then delete it
        browser.waitForVisible('#elements > button');
        browser.click('#elements > button');

        expect(browser.isVisible('#elements > button')).to.be.false;
    });
});