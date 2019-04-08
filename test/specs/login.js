describe('Login success suite', function() {
    it('should log in to the site successfully', function() {
        browser.url('./login')

        $('#username').setValue('tomsmith');
        $('#password').setValue('SuperSecretPassword!');
        browser.click('#login > button');

        let logoutButton = $('#content > div > a');
        let successMessage = $('#flash');
        let successMessageText = successMessage.getText();
        let n = successMessageText.includes('You logged into a secure area!');

        expect(logoutButton.isVisible()).to.be.true;
        expect(n).to.be.true;
    });

    it('should not be logged in to the site', function() {
        browser.url('./login')

        $('#username').setValue('test');
        $('#password').setValue('test');
        browser.click('#login > button');

        let loginButton = $('#login > button');
        let failureMessage = $('#flash');
        let failureMessageText = failureMessage.getText();
        let n = failureMessageText.includes('Your username is invalid!');

        expect(loginButton.isVisible()).to.be.true;
        expect(n).to.be.true;
    });
});