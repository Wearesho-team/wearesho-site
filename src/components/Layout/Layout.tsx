import * as React from "react";
import {Router} from "react-router-dom";
import translate from "counterpart";

import {LayoutProps, LayoutPropTypes} from "./LayoutProps";
import {getLinksWithProps} from "../../helpers/getLinksWithProps";
import {getRoutesWithProps} from "../../helpers/getRoutesWithProps";

import {routeProps} from "../../data/routeProps";

import {Header, SideBar} from "./Partials";
import {SoundSwitch} from "./SoundSwitch";
import {TransitionSwitch} from "../TransitionSwitch";
import {SwitchControl} from "../SwitchControl";

import {ScrollControl} from "../ScrollControl";
import {SmartBreakpoint} from "../SmartBreakpoint";
import {LayoutContext, LayoutContextTypes} from "./LayoutContext";
import {LayoutState} from "./LayoutState";
import {Languages} from "../../data/Languages";

export class Layout extends React.Component<LayoutProps, LayoutState> {
    public static readonly propTypes = LayoutPropTypes;
    public static readonly childContextTypes = LayoutContextTypes;

    public constructor(props) {
        super(props);

        this.state = {
            language: localStorage.getItem("app.language") === Languages.ru
                ? Languages.ru
                : Languages.en,
            isScrollDisabled: true
        };

        translate.setLocale(this.state.language);
    }

    public getChildContext(): LayoutContext {
        return {
            language: this.state.language,
            isScrollDisabled: this.state.isScrollDisabled,
            setLanguage: this.setLanguage
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

    protected setLanguage = (nextLanguage: Languages) => {
        localStorage.setItem("app.language", nextLanguage);
        translate.setLocale(nextLanguage);
        this.setState({language: nextLanguage});
    }
}
