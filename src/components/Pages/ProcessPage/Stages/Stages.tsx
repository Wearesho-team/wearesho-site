import * as React from "react";

import {stages} from "../../../../data/ProjectStages/stages";

import {OnMobile} from "../../../../helpers/Breakpoints";
import {toFixed} from "../../../../helpers/toFixed";
import {translate} from "../../../../helpers/translate";
import {LanguageProps, withLanguage} from "../../../../helpers/withLanguage";

export type StagesComponentProps = React.HTMLProps<any> & LanguageProps

class StagesComponent extends React.PureComponent<StagesComponentProps, undefined> {
    protected stageList: Array<{
        title: string,
        subTitle: string
    }>;
    
    public constructor(props) {
        super(props);
        
        this.stageList = stages.map(({title, subTitle}) => {
            return {
                title: translate(`processPage.stages.title.${title}`),
                subTitle: subTitle.map((item) => translate(`processPage.stages.subTitle.${item}`)).join(" / ")
            };
        });
    }
    
    public componentWillUpdate(P: StagesComponentProps, S: undefined) {
        if (this.props.language !== P.language) {
            this.stageList = stages.map(({title, subTitle}) => {
                return {
                    title: translate(`processPage.stages.title.${title}`),
                    subTitle: subTitle.map((item) => translate(`processPage.stages.subTitle.${item}`)).join(" / ")
                };
            });
        }
    }
    
    public render(): JSX.Element {
        return (
            <div {...this.props}>
                <div className="align-container">
                    {this.getStages(0, 3)}
                </div>
                <div className="stages-group">
                    {this.getStages(3, 3)}
                </div>
                <OnMobile>
                    <div className="process-structure_mob"/>
                </OnMobile>
            </div>
        );
    }
    
    protected getStages(from: number, count: number): JSX.Element [] {
        return Array.from(this.stageList)
            .splice(from, count)
            .map(({title, subTitle}, i) => {
                return (
                    <div className="stage" key={i}>
                        <span className="stage__number marker">
                            {toFixed(2, i + from + 1)}
                        </span>
                        <div className="stage-body">
                            <h3 className="stage__title">{title}</h3>
                            <p className="stage__description">{subTitle}</p>
                            <span className="stage__detail">&gt;&gt;</span>
                        </div>
                    </div>
                );
            });
    }
}

export const Stages = withLanguage(StagesComponent);
