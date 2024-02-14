// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        contextOptions: {
          permissions: ['geolocation', 'notifications'], // Set permissions if needed
          // Emulate touch events and high device pixel ratio
          // @ts-ignore
          viewport: { width: 1920, height: 1080, deviceScaleFactor: 2 },
          touch: true,
        },
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        contextOptions: {
          permissions: ['geolocation', 'notifications'], // Set permissions if needed
          // Emulate touch events and high device pixel ratio
          // @ts-ignore
          viewport: { width: 1920, height: 1080, deviceScaleFactor: 2 },
          touch: true,
        },
      },
    },

    // Other projects can be configured similarly here...

  ],
});
