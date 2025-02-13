import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'


describe('Login Website', () => {

    beforeEach (async() => {
        await browser.url('https://salingjaga.com');
        expect.stringContaining('Asuransi Kitabisa')
        await LoginPage.loginButton.click()

    });

    it('should pass open website salingjaga.com', async() => {
        await browser.url('https://salingjaga.com');
        expect.stringContaining('Asuransi Kitabisa')
        await LoginPage.loginButton.click()
    })

    it('should pass login with valid whatsapp no', async () => {
        
        await LoginPage.setLogin('085210179448')
        await LoginPage.btnMasuk.click()
        expect.stringContaining('Aktifkan Keanggotaan')
        await browser.pause(3000);
    })

    it('should fail login with invalid whatsapp no - More than 16 digit', async () => {

        await LoginPage.setLogin('0852238674523842123132')
        const isButtonEnabled = await LoginPage.btnMasuk.isEnabled();
        expect(isButtonEnabled).toBe(false);
        expect.stringContaining('Hanya diisi dengan nomor whatsapp yang valid.')
    });

    it('should fail login with invalid whatsapp no - Less than 9 digit', async () => {

        await LoginPage.setLogin('085223')
        const isButtonEnabled = await LoginPage.btnMasuk.isEnabled();
        expect(isButtonEnabled).toBe(false);
        expect.stringContaining('Hanya diisi dengan nomor whatsapp yang valid.')
    });

    it('should fail login with invalid whatsapp no - Contains letter', async () => {

        await LoginPage.setLogin('0852abcde')
        const isButtonEnabled = await LoginPage.btnMasuk.isEnabled();
        expect(isButtonEnabled).toBe(false);
        expect.stringContaining('Hanya diisi dengan nomor whatsapp yang valid.')
    });

    it('should fail login with invalid whatsapp no - Not starts with 08 or +62', async () => {

        await LoginPage.setLogin('12345678919')
        const isButtonEnabled = await LoginPage.btnMasuk.isEnabled();
        expect(isButtonEnabled).toBe(false);
        expect.stringContaining('Hanya diisi dengan nomor whatsapp yang valid.')
    });

    afterEach (async () => {
        await browser.reloadSession();
      }) 
})

