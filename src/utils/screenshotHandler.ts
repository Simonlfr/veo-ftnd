import { expect } from "@playwright/experimental-ct-react";
import type { Locator, Page } from "playwright-core";

export async function verifyScreenshot(
    component: Locator | Page,
    screenshotName: string
) {
    const fileName = screenshotName.endsWith(".png")
        ? screenshotName
        : `${screenshotName}.png`;

    const locator = component as Locator;
    await locator.evaluate(() => document.fonts.ready);

    await expect(locator).toHaveScreenshot(fileName, {
        threshold: 0,
        maxDiffPixels: 0,
    });
}
