import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {LayoutContext, LayoutContextTypes} from "../../src/components/Layout/LayoutContext";
import {RouterContext, RouterContextTypes} from "../../src/data/RouterContext";
import {ProcessPage} from "../../src/components/Pages/ProcessPage/ProcessPage";
import {Languages} from "../../src/data/Languages";
import {useFakeTimers, SinonFakeTimers} from "sinon";

describe("<ProcessPage/>", () => {
    let wrapper: ReactWrapper<any, any>;
    let timer: SinonFakeTimers;

    const commonHandler = () => undefined;

    const context: LayoutContext & RouterContext = {
        language: Languages.en,
        setLanguage: commonHandler,
        router: {
            history: {
                push: commonHandler,
                createHref: commonHandler,
                replace: commonHandler,
                listen: commonHandler,
                location: "test"
            },
            route: {
                location: "test"
            }
        }
    };

    beforeEach(() => {
        wrapper = mount(
            <ProcessPage/>,
            {context, childContextTypes: {...LayoutContextTypes, ...RouterContextTypes}}
        );

        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("Should ignore mouse events when ref for stages container not exist", () => {
        (wrapper.instance() as any).stagesContainer = null;
        wrapper.getDOMNode().dispatchEvent(new MouseEvent("mousemove"));

        expect(wrapper.instance().state.currentIndex).to.equal(0)
    });

    it("Should set current index -1 when cursor leave hover zone", () => {
        wrapper.getDOMNode().dispatchEvent(new MouseEvent("mousemove", {
            clientX: -100
        }));
        expect(wrapper.instance().state.currentIndex).to.equal(-1);

        wrapper.unmount().mount();
        expect(wrapper.instance().state.currentIndex).to.equal(0);

        wrapper.getDOMNode().dispatchEvent(new MouseEvent("mousemove", {
            clientX: 100
        }));

        expect(wrapper.instance().state.currentIndex).to.equal(-1);
    });

    it("Should ignore mouse events when cursor over grid that already hovered", () => {
        (wrapper.instance() as any).stagesContainer.getBoundingClientRect = () => {
            return {
                width: 100,
                left: 0
            }
        };
       wrapper.setState({
           currentIndex: 0
       });

        wrapper.getDOMNode().dispatchEvent(new MouseEvent("mousemove"));
        expect(wrapper.instance().state.className).to.equal(ProcessPage.baseClassName);
    });

    it("Should set class according to grid index on hover", () => {
        (wrapper.instance() as any).stagesContainer.getBoundingClientRect = () => {
            return {
                width: 920,
                left: 730
            }
        };

        wrapper.getDOMNode().dispatchEvent(new MouseEvent("mousemove", {
            clientX: 1000
        }));

        expect(wrapper.instance().state.className).to.equal(ProcessPage.baseClassName + " from-2");
    });

    it("Should remove hover class name after timeout", () => {
        (wrapper.instance() as any).stagesContainer.getBoundingClientRect = () => {
            return {
                width: 920,
                left: 730
            }
        };

        wrapper.getDOMNode().dispatchEvent(new MouseEvent("mousemove", {
            clientX: 1000
        }));

        timer.tick(ProcessPage.animationDuration / 2);
        expect(wrapper.instance().state.className).to.equal(ProcessPage.baseClassName + " from-2");
        timer.tick(ProcessPage.animationDuration / 2);
        expect(wrapper.instance().state.className).to.equal(ProcessPage.baseClassName);
    });
});
