import { defineConfig, devices } from "@playwright/experimental-ct-react";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "./src",
    /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
    snapshotDir: "./snapshots",
    /* Maximum time one test can run for. */
    timeout: 10 * 1000,
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    preserveOutput: "failures-only",
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI ? [["html", { open: "never" }]] : "html",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",

        /* Port to use for Playwright component endpoint. */
        ctPort: 3100,
    },
    testMatch: /.*\.(reg|a11y|func\.test)\.ts*/,
    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
                contextOptions: { reducedMotion: "reduce" },
            },
        },

        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"],
                contextOptions: { reducedMotion: "reduce" },
            },
        },

        {
            name: "webkit",
            use: {
                ...devices["Desktop Safari"],
                contextOptions: { reducedMotion: "reduce" },
            },
        },

        {
            name: "iphone13",
            use: {
                ...devices["iPhone 13"],
                contextOptions: { reducedMotion: "reduce" },
            },
        },
    ],
});
