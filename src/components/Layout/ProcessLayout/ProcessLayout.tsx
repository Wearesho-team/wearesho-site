import * as React from "react";
import { ExpandController } from "react-expand";
import { NavLink, Route, Link } from "react-router-dom";

import { toFixed } from "helpers/toFixed";
import { processRouteProps } from "data/routeProps";
import { OnMobile, OnTabletDesktop } from "helpers/Breakpoints";

import { Header, SoundSwitch, SocialLinks } from "../Partials";

import { PreLoader } from "components/PreLoader";
import { ErrorBounder } from "components/ErrorBounder";
import { SwitchControl } from "components/SwitchControl";
import { ScrollControl } from "components/ScrollControl";
import { SmartBreakpoint } from "components/SmartBreakpoint";
import { TransitionSwitch } from "components/TransitionSwitch";
import { PreloaderLinkButton } from "components/Buttons/PreloaderLinkButton";

import { LayoutContextTypes, LayoutContext } from "../LayoutContext";

export class ProcessLayout extends React.Component {
    public static readonly contextTypes = LayoutContextTypes;

    public readonly context: LayoutContext;

    public async componentDidMount() {
        await PreLoader.hide();

        this.context.setScrollState(true);
    }

    public componentWillUnmount() {
        PreLoader.show();

        this.context.setScrollState(false);
    }

    public render(): React.ReactNode {
        return (
            <ExpandController>
                <main className="services-inner">
                    <Header className="header">
                        <PreloaderLinkButton to="/process" className="btn btn_close" />
                    </Header>
                    <div className="align-container">
                        <OnMobile>
                            <aside className="sidebar sidebar-services">
                                <div className="aside-nav">
                                    {this.linksWithProps}
                                </div>
                                <SocialLinks />
                            </aside>
                        </OnMobile>
                        <SoundSwitch />
                        <div className="section-gradient" />
                        <div className="services-decor" />
                        <ErrorBounder>
                            <SmartBreakpoint match="min-width: 1440px">
                                <SwitchControl routeProps={processRouteProps}>
                                    <TransitionSwitch className="translate-container" classNames="translateY">
                                        {this.routesWithProps}
                                    </TransitionSwitch>
                                </SwitchControl>
                            </SmartBreakpoint>
                            <SmartBreakpoint match="max-width: 1439px">
                                <ScrollControl routeProps={processRouteProps}>
                                    {processRouteProps.map((prop) => prop.render())}
                                </ScrollControl>
                            </SmartBreakpoint>
                            <OnTabletDesktop>
                                <div className="section-aside">
                                    <div className="aside-nav">
                                        {this.linksWithProps}
                                    </div>
                                </div>
                            </OnTabletDesktop>
                        </ErrorBounder>
                    </div>
                </main>
            </ExpandController>
        );
    }

    protected get linksWithProps(): JSX.Element[] {
        return processRouteProps.map((props, i) => (
            <NavLink className="stage" to={props.path} key={props.path}>
                <OnMobile>
                    <span className="stage__number">{toFixed(2, i + 1)}</span>
                </OnMobile>
                <OnTabletDesktop>
                    <span className="stage__number marker">{toFixed(2, i + 1)}</span>
                    <div className="stage-body">
                        <h3 className="stage__title">
                            {props.label}
                        </h3>
                    </div>
                </OnTabletDesktop>
            </NavLink>
        ));
    }

    protected get routesWithProps(): JSX.Element[] {
        return processRouteProps.map((props) => <Route {...props} key={props.path} />)
    }
}

export default ProcessLayout;
