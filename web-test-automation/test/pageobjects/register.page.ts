import { $ } from '@wdio/globals'

class Register {
    get btnRegister() {return $('[data-sentry-component="Button"]')}
    get btnSubmit() {return $('button[type="submit"')}
    get inputMale() {return $('label[for="male_ID_KESEHATAN.gender_0"]')}
    get inputFemale() {return $('label[for="female_ID_KESEHATAN.gender_1"]')}
    get inputHeight() {return $('input[name="KESEHATAN.height"]')}
    get inputWeight() {return $('input[name="KESEHATAN.weight"]')}
    get inputSmokerTrue() {return $('label[for="true_ID_KESEHATAN.is_smoker_0"]')}
    get inputSmokerFalse() {return $('label[for="false_ID_KESEHATAN.is_smoker_1"]')}
    get inputCriticalTrue() {return $('label[for="true_ID_KESEHATAN.is_diagnosed_critical_illness_last5y_0"]')}
    get inputCriticalFalse() {return $('label[for="false_ID_KESEHATAN.is_diagnosed_critical_illness_last5y_1"]')}
    get inputHospitalizedTrue() {return $('label[for="true_ID_KESEHATAN.is_hospitalized_last5y_0"]')}
    get inputHospitalizedFalse() {return $('label[for="false_ID_KESEHATAN.is_hospitalized_last5y_1"]')}
    get inputPregnantTrue() {return $('label[for="true_ID_KESEHATAN.is_pregnant_0"]')}
    get inputPregnantFalse() {return $('label[for="false_ID_KESEHATAN.is_pregnant_1"]')}
}

export default new Register