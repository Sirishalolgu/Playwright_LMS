import {test as base} from 'playwright-bdd';
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

