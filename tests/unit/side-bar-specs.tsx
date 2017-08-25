import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {createMemoryHistory, History} from "history";

import {SideBar, SideBarProps} from "../../src/components/Layout/Partials";
import {Link, Router} from "react-router-dom";

describe("<SideBar/>", () => {
    let wrapper: ReactWrapper<SideBarProps, any>;

    let history: History;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SideBar history={history}>
                    <Link className="main-nav__link" to="/">+</Link>
                    <Link className="main-nav__link" to="/contact">+</Link>
                </SideBar>
            </Router>
        );
    });

    afterEach(() => wrapper.unmount());

    it("should set active class to link with url `/` when url = `/`", () => {
        history.push("/");

        expect(wrapper.find(Link).first().parent().getDOMNode().className).to.contain("is-active");
        expect(wrapper.find(Link).last().parent().getDOMNode().className).to.not.contain("is-active");
    });

    it("should set active class to link with url `/contact` when url = `/contact`", () => {
        history.push("/contact");

        expect(wrapper.find(Link).first().parent().getDOMNode().className).to.not.contain("is-active");
        expect(wrapper.find(Link).last().parent().getDOMNode().className).to.contain("is-active");
    });
});
