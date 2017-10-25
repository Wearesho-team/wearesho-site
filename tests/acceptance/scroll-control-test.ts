// tslint:disable-next-line
/// <reference path="./steps.d.ts" />
// tslint:disable:no-magic-numbers
Feature("Scroll control");

Scenario("Scrolling", async (I) => {
    const timeout = 30;
    const size = {
        w: 1024,
        h: 768
    };

    I.amOnPage("/");

    I.resizeWindow(size.w, size.h);
    I.waitForElement("body.loaded", timeout);
    I.wait(5);
    I.click("body");

    const count = 24;

    for (let i = 0; i < count; i++) {
        I.pressKey("ArrowDown");
    }

    I.wait(1);
    I.seeInCurrentUrl("/partnership");

    for (let i = 0; i < count; i++) {
        I.pressKey("ArrowUp");
    }

    I.wait(1);
    I.seeInCurrentUrl("/");
});
