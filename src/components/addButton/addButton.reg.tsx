import { test } from "@playwright/experimental-ct-react";
import { verifyScreenshot } from "../../utils/screenshotHandler";
import { AddButton } from "./addButton";

test.describe("AddButton", () => {
    test("should render with primary", async ({ mount }) => {
        const text = "AddButton-primary";
        const component = await mount(<AddButton primary>{text}</AddButton>);
        await verifyScreenshot(component, text);
    });

    test("should render without primary", async ({ mount }) => {
        const text = "AddButton-without-primary";
        const component = await mount(<AddButton>{text}</AddButton>);
        await verifyScreenshot(component, text);
    });

    test("AddButton hover state", async ({ mount }) => {
        const text = "AddButton-hover";
        const component = await mount(<AddButton primary>{text}</AddButton>);
        await component.hover();
        await verifyScreenshot(component, text);
    });
});
