describe('Dynamic content', function() {
    it('should wait for the content to load after clicking the button 1', function() {
        browser.url('./dynamic_loading/1');

        browser.click('#start > button');

        let pageText = $('#finish > h4');
        pageText.waitForVisible(10000);

        let text = browser.getText('#finish > h4');
        expect(text).to.equal('Hello World!');
    });

    it('should wait for the content to load after clicking the button 2', function() {
        browser.url('./dynamic_loading/2');

        browser.click('#start > button');

        let pageText = $('#finish > h4');
        pageText.waitForVisible(10000);

        let text = browser.getText('#finish > h4');
        expect(text).to.equal('Hello World!');
    });
});