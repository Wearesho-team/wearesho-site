import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {PhoneInputProps} from "../../src/components/Pages/PartnershipPage/ContactForm/Partials/PhoneInput/PhoneInputProps";
import {PhoneInput} from "../../src/components/Pages/PartnershipPage/ContactForm/Partials/PhoneInput/PhoneInput";

describe("<PhoneInput/>", () => {
    let wrapper: ReactWrapper<PhoneInputProps, undefined>;
    let node: PhoneInput;

    const commonHandler = () => undefined;

    const simulateChange = (value: string) => {
        wrapper.instance().context.value = value;
        wrapper.find("input").simulate("change");
        wrapper.instance().forceUpdate();
    };

    const defaultValue = "380604513512";
    const maskList = ["9999", "(999) 999-99-999", "(999) 999-9999-9999"];

    const onChange = commonHandler;
    const onAttributeChange = commonHandler;
    const onFocus = commonHandler;
    const onMount = commonHandler;
    const onBlur = commonHandler;

    beforeEach(() => {
        const context = {
            onChange, onAttributeChange, onFocus, onMount, onBlur,
            id: "id_test",
            name: "name_test",
            value: defaultValue
        };

        wrapper = mount(<PhoneInput maskList={maskList}/>, {context});

        node = wrapper.instance() as any;
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should set mask according to value length", () => {
        simulateChange("0000");
        expect((wrapper.getDOMNode() as any).value).to.equal("(000) 0");

        simulateChange("0000000000");
        expect((wrapper.getDOMNode() as any).value).to.equal("(000) 000-00-00");

        simulateChange("00000000000000");
        expect((wrapper.getDOMNode() as any).value).to.equal("(000) 000-0000-0000");
    });

    it("Should prevent default on paste", () => {
        let defaultPrevented = false;
        wrapper.simulate("paste", {
            preventDefault: () => defaultPrevented = true
        });

        expect(defaultPrevented).to.be.true;
    });

});
