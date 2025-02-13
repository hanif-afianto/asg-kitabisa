import { $ } from '@wdio/globals'

class SimulasiPatungan{

    get btnSimulasi() {return $('button[style="background: transparent; color: rgb(16, 168, 229);"]')}
    get btnActivateTrue() {return $('button[class="py-3 px-5 rounded-lg w-full font-bold flex items-center text-sm bg-[#FF7614] text-white justify-center mt-5"]')}
    get btnActivateFalse() {return $('button[class="py-3 px-5 rounded-lg w-full font-bold flex items-center text-sm !bg-mercury !text-dustygrey cursor-not-allowed justify-center mt-5"]')}
    get inputDOB() {return $('input[id="dob_ID"')}
    get inputMale() {return $('label[for="Laki-laki_ID_gender_0"]')}
    get inputFemale() {return $('label[for="Perempuan_ID_gender_1"]')}
    get inputSmokerTrue() {return $('label[for="smoker_ID_smoker_0"]')}
    get inputSmokerFalse() {return $('label[for="no-smoker_ID_smoker_1"]')}

}

export default new SimulasiPatungan