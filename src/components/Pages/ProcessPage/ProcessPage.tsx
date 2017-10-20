import * as React from "react";

import {SubmitButton} from "../Buttons";

export class ProcessPage extends React.Component<any,any>{

    public render() {
        return(
            <section className="section section-process">
                <div className="align-container">
                    <h2 className="section__title">Процесс</h2>
                    <div className="section__half half_first">
                        <h4 className="section__subtitle">Всего 5 этапов для полного цикла IT-услуг</h4>
                        <p className="section__text">
                            Или укажите свои контактные данные в форме ниже. Наши специалисты ответят на форме.
                            Наши ответят на все ваши идиотские вопросы. Наши ответят на все ваши крайне.
                        </p>
                        <h5>Полную информацию вы можете увидеть в презентации</h5>
                        <SubmitButton type="button" label="Скачать pdf"/>
                    </div>
                    <div className="section__half half_second">
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
                                <p className="stage__description">front & back end / тестирование</p>
                                <span className="stage__detail">&gt;&gt;</span>
                            </div>
                        </div>
                        <div className="stages-group">
                            <div className="stage">
                                <span className="stage__number marker">
                                    04
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Продвижение</h3>
                                    <p className="stage__description">PR всех видов</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                            <div className="stage">
                                <span className="stage__number marker">
                                    05
                                </span>
                                <div className="stage-body">
                                    <h3 className="stage__title">Тех. поддержка</h3>
                                    <p className="stage__description">dsgn / dev / PR</p>
                                    <span className="stage__detail">&gt;&gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
