import { test as base, createBdd } from 'playwright-bdd';

const { Before,After } = createBdd();

Before(async()=> {
    console.log("the hooks is created");   
})