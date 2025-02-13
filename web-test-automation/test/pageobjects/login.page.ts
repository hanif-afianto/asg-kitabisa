import { $ } from '@wdio/globals'

class LoginPage {

    get inputWhatsappNo() {return $('[data-testid="login-input-phone"]')}
    get btnMasuk() {return $('[id="button-login-with-otp-code"]')}

    get loginButton(){
        return $('[data-sentry-component="LoginIcon"]');
    }

    async verifyPageLogin() {
        await this.inputWhatsappNo.waitForDisplayed();
    }

    async setLogin(whatsappNo : string | number) {
        await this.inputWhatsappNo.setValue(whatsappNo)
        
    }
}

export default new LoginPage();
