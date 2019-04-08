describe('Basic auth', function() {
    it('should be able to sign in via basic auth to website', function() {
        browser.url('./forgot_password');

        $('#email').setValue('test@email.com');
        browser.click('#form_submit');

        expect(browser.getText('#content')).to.equal("Your e-mail's been sent!");
    });
});