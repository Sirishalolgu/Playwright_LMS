// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const testDir = defineBddConfig({
  features: ['tests/features/01_login.feature' ,'tests/features/03_01_Navigation_MenuBar_ManageProgramPageValidation.feature','features/*.feature'],
  steps: ['tests/stepDefinition/Login_StepDefinition.js' ,'tests/stepDefinition/Program_Navigation_Menubar_StepDefenition.js', 'tests/hooks/hooks.js','stepDefinition/login.steps.js','stepDefinition/logout.steps.js'],
});

export default defineConfig({
  // testDir: './tests',
 testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],["allure-playwright"],["line"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  expect: {
    timeout: 180*1000
  },
  timeout: 180*1000,
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    // baseURL: 'https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login',
    screenshot: 'only-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    browserName: 'chromium',
   // headless: false,
  
  },

  /* Configure projects for major browsers */
  // globalSetup: require.resolve('./setup/setup.js'),

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }
  ],
});

