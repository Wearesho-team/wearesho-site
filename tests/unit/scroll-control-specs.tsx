import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {createMemoryHistory, History} from "history";
import {Router} from "react-router";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {ScrollControl} from "../../src/components/ScrollControl";
import {routeProps} from "../../src/data/routeProps";

describe("<ScrollControl/>", () => {
    let wrapper: ReactWrapper<undefined, undefined>;
    let node: ScrollControl;
    let DOMNode: Element;
    let history: History;
    let timer: SinonFakeTimers;

    const params = {
        height: 200,
        pageYOffset: 100,
        offsetTop: 0,
        offsetHeight: 100
    };

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <ScrollControl>
                    {routeProps.map((prop) => <prop.component key={prop.path}/>)}
                </ScrollControl>
            </Router>
        );

        node = wrapper.find(ScrollControl).instance() as any;
        DOMNode = wrapper.find(ScrollControl).getDOMNode();
        timer = useFakeTimers();
    });

    afterEach(() => {
        history.push(routeProps[0].path);
        wrapper.unmount();
        timer.restore();
    });

    it("Should set timer on scroll", () => {
        // we cant emulate window events
        (node as any).handleScroll();

        expect(node.timer).to.exist;
    });

    it("Should set new location on scroll", () => {
        // emulate window params
        (window as any) = {
            ...window,
            ...{
                screen: {
                    height: params.height
                },
                pageYOffset: params.pageYOffset
            }
        };

        // define HTML params for child nodes
        for (let i = 0; i < DOMNode.children.length; i++) {
            const child = DOMNode.children.item(i) as HTMLElement;

            Object.defineProperty(child, "offsetTop", {
                get: () => params.offsetTop + (i * 100)
            });

            Object.defineProperty(child, "offsetHeight", {
                get: () => params.offsetHeight
            });
        }

        // we cant emulate window events
        (node as any).handleScroll();
        timer.tick(ScrollControl.scrollListenDelay);

        expect(history.location.pathname).to.equal(routeProps[routeProps.length - 1].path);
    });

    it("Should return on scroll if element dose not exist", () => {
        wrapper.unmount();

        // we cant emulate window events
        (node as any).handleScroll();
        timer.tick(ScrollControl.scrollListenDelay);

        expect(history.location.pathname).to.equal(routeProps[0].path);
    });
});
