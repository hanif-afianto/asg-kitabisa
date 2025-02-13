import { expect } from '@wdio/globals'
import SimulasiPatungan from '../pageobjects/simulasiPatungan.page'

describe('Simulasi Patungan', () => {

    beforeEach(async() => {
        await browser.url('http://salingjaga.com')
        expect.stringContaining('Asuransi Kitabisa')
        await browser.execute(() => {
            document.body.style.zoom = "75%";
        });

    })

    it('should pass click button Simulasi Patungan', async() => {
        await SimulasiPatungan.btnSimulasi.click()
        await browser.pause(6000)
        await SimulasiPatungan.inputDOB.setValue('31/01/1998')
        await SimulasiPatungan.inputMale.click()
        await SimulasiPatungan.inputSmokerFalse.click()

        const isButtonEnabled = await SimulasiPatungan.btnActivateTrue.isEnabled();
        expect(isButtonEnabled).toBe(true);

    })

    it('should fail click button Simulasi Patungan - Empty field', async() => {
        await SimulasiPatungan.btnSimulasi.click()
        await browser.pause(6000)
        await SimulasiPatungan.inputDOB.setValue('31/01/1998')
        // await SimulasiPatungan.inputMale.click()
        await SimulasiPatungan.inputSmokerFalse.click()

        const isButtonEnabled = await SimulasiPatungan.btnActivateFalse.isEnabled();
        expect(isButtonEnabled).toBe(false);

    })

    afterEach(async() => {
        await browser.pause(3000)
        await browser.reloadSession();
    })

})