describe('Login success suite', function() {
    it('should select the first value in the dropdown', function() {
        browser.url('./dropdown');

        browser.selectByValue('#dropdown', 1);

        expect(browser.getValue('#dropdown')).to.equal('1');
    });

    it('should select the second value in the dropdown', function() {
        browser.url('./dropdown');

        browser.selectByValue('#dropdown', 2);

        expect(browser.getValue('#dropdown')).to.equal('2');
    });
});