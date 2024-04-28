import { test } from "@playwright/experimental-ct-react";
import { verifyScreenshot } from "../../utils/screenshotHandler";
import { AddButton } from "./addButton";

test.describe("AddButton", () => {
    test("should render correctly", async ({ mount }) => {
        const component = await mount(<AddButton primary>Add</AddButton>);
        await verifyScreenshot(component, "AddButton");
    });

    test("AddButton hover state", async ({ mount }) => {
        const component = await mount(<AddButton primary>Add</AddButton>);

        await component.hover();
        await verifyScreenshot(component, "AddButton-hover");
    });
});
