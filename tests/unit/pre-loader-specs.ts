import {PreLoader} from "../../src/components/PreLoader";
import {expect} from "chai";

describe("PreLoader animations", () => {
    const preLoader = new PreLoader();

    it("should add `loaded` class on hiding", async () => {
        await preLoader.hide();
        expect(document.body.className).to.contain("loaded");
    });

    it("should remove classes (`loaded`) on showing", async () => {
        expect(document.body.className).to.contain("loaded");
        await preLoader.show();
        expect(document.body.className).to.not.contain("loaded");
    });
});
