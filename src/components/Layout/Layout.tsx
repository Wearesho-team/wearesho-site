import * as React from "react";
import {Router} from "react-router-dom";

import {getRoutesWithProps} from "../../helpers/getRoutesWithProps";
import {getLinksWithProps} from "../../helpers/getLinksWithProps";

import {routeProps} from "../../data/routeProps";

import {TransitionSwitch} from "../TransitionSwitch";
import {SmartBreakpoint} from "../SmartBreakpoint";
import {SwitchControl} from "../SwitchControl";
import {ScrollControl} from "../ScrollControl";
import {Header, SideBar, SoundSwitch} from "./Partials";

import {LayoutContext, LayoutContextTypes} from "./LayoutContext"
import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {LayoutState} from "./LayoutState";

export class Layout extends React.Component<LayoutProps, LayoutState> {
    public static readonly propTypes = LayoutPropTypes;
    public static readonly childContextTypes = LayoutContextTypes;

    public state: LayoutState = {
        isScrollDisabled: true
    };

    public getChildContext(): LayoutContext {
        return {
            isScrollDisabled: this.state.isScrollDisabled
        }
    }

    public async componentDidMount() {
        await this.props.preLoader.hide();
        this.setState({isScrollDisabled: false});
    }

    public async componentWillUnmount() {
        await this.props.preLoader.show();
    }

    public render(): JSX.Element {
        return (
            <Router history={this.props.history}>
                <div id="content">
                    <Header/>
                    <SideBar>
                        {getLinksWithProps()}
                    </SideBar>
                    <SoundSwitch/>
                    <SmartBreakpoint match="min-width: 1440px">
                        <SwitchControl>
                            <TransitionSwitch className="translate-container" classNames="translateY">
                                {getRoutesWithProps()}
                            </TransitionSwitch>
                        </SwitchControl>
                    </SmartBreakpoint>
                    <SmartBreakpoint match="max-width: 1439px">
                        <ScrollControl>
                            {routeProps.map((prop) => <prop.component key={prop.path}/>)}
                        </ScrollControl>
                    </SmartBreakpoint>
                </div>
            </Router>
        );
    }
}
