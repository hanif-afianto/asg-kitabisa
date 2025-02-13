import { expect } from '@wdio/globals'
import Register from '../pageobjects/register.page'

describe('Registrasi Keanggotaan - Pertanyaan Kesehatan', () => {

    beforeEach (async() => {

        await browser.url('https://salingjaga.com');
        expect.stringContaining('Asuransi Kitabisa')
        await browser.execute(() => {
            document.body.style.zoom = "75%";
        });
        
    });

    it('should pass open page "Aktikan Keanggotaan" from button "Daftar Sekarang"', async() => {

        await Register.btnRegister.click()

    })

    it('should pass click "Lanjut" from Data Diri page (Male Customer)', async() => {

        await Register.btnRegister.click()
        await Register.inputMale.click()
        await Register.inputHeight.setValue('180')
        await Register.inputWeight.setValue('70')
        await Register.inputSmokerFalse.click()
        await Register.inputCriticalFalse.click()
        await Register.inputHospitalizedFalse.click()
        await Register.btnSubmit.click()
        

    });

    it('should pass click "Lanjut" from Data Diri page (Female Customer)', async() => {

        await Register.btnRegister.click()
        await Register.inputFemale.click()
        await Register.inputHeight.setValue('180')
        await Register.inputWeight.setValue('70')
        await Register.inputSmokerFalse.click()
        await Register.inputCriticalFalse.click()
        await Register.inputHospitalizedFalse.click()
        await Register.inputPregnantFalse.click()
        await Register.btnSubmit.click()

    });

    it('should fail click "Lanjut" from Data Diri page (Empty Field)', async() => {

        await Register.btnRegister.click()
        await Register.inputMale.click()
        await Register.inputHeight.setValue('180')
        await Register.inputWeight.setValue('70')
        await Register.inputSmokerFalse.click()
        await Register.inputCriticalFalse.click()
        // await Register.inputHospitalizedFalse.click()
        await Register.btnSubmit.click()
        expect.stringContaining('Pilih salah satu yang sesuai denganmu.')
        

    });

    afterEach (async () => {
        await browser.pause(3000)
        await browser.reloadSession();
        
    }) 
})

