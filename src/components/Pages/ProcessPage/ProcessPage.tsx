import * as React from "react";

import {SubmitButton} from "../../Buttons";
import {BasePage} from "../BasePage";

import {ProcessStructure} from "../../Icons/ProcessStructure";
import {OnMobile, OnTabletDesktop} from "../../../helpers/Breakpoints";

export class ProcessPage extends BasePage {

    public render() {
        return(
            <section className="section section-process">
                <OnTabletDesktop>
                    <ProcessStructure/>
                </OnTabletDesktop>
                <div className="align-container">
                    <h2 className="section__title">Процесс</h2>
                    <div className="section__half half_first">
                        <div className="align-container">
                            <h4 className="section__subtitle">
                                Всего 6 этапов для полного
                                <span> цикла IT-услуг</span>
                            </h4>
                            <p className="section__text">
                                Студия работает с крупными финансовыми компаниями, создавая качественный продукт
                                для эффективного и прибыльного бизнеса на основе аналитики отрасли. Мы обеспечиваем
                                постоянную техническую поддержку и оптимизацию продукта
                            </p>
                        </div>
                        <div className="align-container">
                            <h5>Полную информацию вы можете увидеть в презентации</h5>
                            <SubmitButton type="button" label="Скачать pdf"/>
                        </div>
                    </div>
                    <div className="section__half half_second">
                        <div className="align-container">
                            <div className="stage">
                                <span className="stage__number marker">
                                    01
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Проектирование</h3>
                                    <p className="stage__description">на основе данных</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                            <div className="stage">
                                <span className="stage__number marker">
                                    02
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Дизайн</h3>
                                    <p className="stage__description">скетчи / прототипы</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                            <div className="stage">
                                <span className="stage__number marker">
                                    03
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Разработка</h3>
                                    <p className="stage__description">front &amp; back end</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                        </div>
                        <div className="stages-group">
                            <div className="stage">
                                <span className="stage__number marker">
                                    04
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Развертывание</h3>
                                    <p className="stage__description">приложений на серверах</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                            <div className="stage">
                                <span className="stage__number marker">
                                    05
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Продвижение</h3>
                                    <p className="stage__description">online / offline</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                            <div className="stage">
                                <span className="stage__number marker">
                                    06
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Тех. поддержка</h3>
                                    <p className="stage__description">dsgn / dev / PR</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                        </div>
                        <OnMobile>
                            <div className="process-structure_mob"/>
                        </OnMobile>
                    </div>
                </div>
            </section>
        );
    }
}
