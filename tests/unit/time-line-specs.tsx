import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {TimeLine, TimeLineState, TimeLineProps} from "../../src/components/TimeLine";
import {YearItem} from "../../src/components/TimeLine/YearItem";
import {projects} from "../../src/data/Projects";
import {Slider} from "../../src/components/TimeLine/Slider";

describe("<TimeLine/>", () => {
    let wrapper: ReactWrapper<TimeLineProps, TimeLineState>;
    let timer: SinonFakeTimers;
    const animationDuration = 300;

    const halfOfMonth = Math.round(projects[projects.length - 1].date.month / 2);

    let props = {
        range: {
            max: projects[projects.length - 1].date.year,
            min: projects[0].date.year
        }
    };

    beforeEach(() => {
        wrapper = mount(<TimeLine {...props}/>);

        timer = useFakeTimers();
    });

    afterEach(() => {
        wrapper.unmount();
        timer.restore();
        props = {
            range: {
                max: projects[projects.length - 1].date.year,
                min: projects[0].date.year
            }
        };
    });

    it("should set latest project on mount", () => {
        expect(wrapper.state().activeProject.date.year).to.equal(projects[projects.length - 1].date.year);
        expect(wrapper.state().activeProject.date.month).to.equal(projects[projects.length - 1].date.month);
    });

    it("should render number of <YearItem/>'s corresponding to `range` prop", () => {
        expect(wrapper.find(YearItem).length).to.equal(props.range.max - props.range.min + 1);
    });

    it("should render <Slider/> only if `state.sliderPosition` not equals zero", () => {
        expect(wrapper.find(Slider)).to.not.exist;

        wrapper.setState({
            sliderPosition: 1
        });

        expect(wrapper.find(Slider)).to.exist;
    });

    it("should set `move` class name to `<Slider/>` when active project changed", () => {
        (wrapper.getNode() as any)
            .handleChangeProject(wrapper.getDOMNode(), halfOfMonth, projects[projects.length - 1].date.year);

        expect(wrapper.state().sliderClassName).to.contain(TimeLine.sliderMoveClassName);
    });

    it("should return if active project dos not exist in list", () => {
        props = {
            range: {
                max: projects[0].date.year - 1,
                min: projects[0].date.year - 2
            }
        };

        wrapper = mount(<TimeLine {...props}/>);

        expect((wrapper.getNode() as any)
            .handleChangeProject(wrapper.getDOMNode(), 0, 2021)).to.not.exist;

        expect(wrapper.state().sliderClassName).to.not.contain(TimeLine.sliderMoveClassName);
    });

    it("should remove `move` class name from `<Slider/>` after animation delay when active project changed", () => {
        (wrapper.getNode() as any)
            .handleChangeProject(wrapper.getDOMNode(), halfOfMonth, projects[projects.length - 1].date.year);

        timer.tick(animationDuration / 2);

        expect(wrapper.state().sliderClassName).to.contain(TimeLine.sliderMoveClassName);

        timer.tick(animationDuration / 2);

        expect(wrapper.state().sliderClassName).to.not.contain(TimeLine.sliderMoveClassName);
    });

});
