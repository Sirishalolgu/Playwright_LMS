import {test as base} from 'playwright-bdd';
import { LoginPage } from '../pageObject/LoginPage';

export const test = base.extend({
    loginPageFixture: async({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})