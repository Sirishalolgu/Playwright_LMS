import {test as base} from 'playwright-bdd';

exports.customTest = base.extend({
    loginPageFixture: {
        username: "Palywright@gmail.com",
        password: "March@2025"
    },

    addProgramFixture: {
        programName: "dataWithJson",
        programDescription: "free",
        programStatus : "Active"
    }
})