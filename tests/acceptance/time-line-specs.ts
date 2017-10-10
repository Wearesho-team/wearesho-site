// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Time line");

Scenario("Project selection", async (I) => {
    const timeout = 30;
    I.amOnPage("/");
    I.waitForElement("body.loaded", timeout);
    I.wait(2);
    I.waitForElement(".prj-chronology", timeout);

    I.waitForElement(".container .is-filled", timeout);
    I.wait(1);
    I.click(".container .is-filled");

    const offset = await I.executeScript(() => {
        const element = document.querySelector(".container .is-active") as HTMLElement;

        return element.offsetLeft + (element.parentNode as HTMLElement).offsetLeft;
    });

    I.seeCssPropertiesOnElements(".chronology-slider", {left: `${offset}px`});

    return true;
});
