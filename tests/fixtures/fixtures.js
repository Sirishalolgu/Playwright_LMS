import {test as base} from 'playwright-bdd';
<<<<<<< HEAD
import { LoginPage } from '../../pageObject/LoginPage';
import { ClassPage } from '../pageObject/ClassPage';

export const test = base.extend({
    loginPageFixture: async({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    classPageFixture: async({page},use)=>{
            const classPage = new ClassPage(page);
            await use(classPage);
        }
    
})

=======

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
>>>>>>> 4f080269b604a8129e81b238d0d09c4296bbdb46
