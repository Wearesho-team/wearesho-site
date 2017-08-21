import * as React from "react";

import {OnMobile, OnTablet, OnDesktop} from "../../helpers/Breakpoints";

// tslint:disable:max-line-length
export class ContactPage extends React.Component<undefined, undefined> {

    public render() {
        return (
            <section className="section section-partnership">
                <h2 className="section-title">Партнерство</h2>
                <div className="section-half half-first">
                    <h4 className="section-subtitle">
                        Свяжитесь с нами
                        <span className="section-subtitle_reduced">
                            или укажите свои контактные данные в форме ниже.
                            Наши специалисты ответят на все ваши вопросы.
                        </span>
                    </h4>
                    <form className="form">
                        <div className="form__group form__group_has-error">
                            <input type="text" className="form__control" placeholder="Ваше имя"/>
                            <span className="form__control_underline"/>
                            <span className="form__error-text">текст ошибки</span>
                        </div>
                        <div className="form__group_inline">
                            <div className="form__group">
                                <input type="tel" className="form__control" placeholder="Телефон"/>
                                <span className="form__control_underline"/>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__control" placeholder="Эл.почта"/>
                                <span className="form__control_underline"/>
                            </div>
                        </div>
                        <p className="text_medium">Мы ценим ваше время</p>
                        <p>Укажите удобное вам время для обсуждения проекта:</p>
                        <div className="form__group spinner__group">
                            <div className="spinner">
                                <span className="spinner__label">с</span>
                                <input type="text" className="form__control" value="09:00"/>
                                <div className="spinner__controls">
                                    <button className="btn btn_inc"/>
                                    <button className="btn btn_dec"/>
                                </div>
                            </div>
                            <div className="spinner">
                                <span className="spinner__label">по</span>
                                <input type="text" className="form__control" value="18:00"/>
                                <div className="spinner__controls">
                                    <button className="btn btn_inc"/>
                                    <button className="btn btn_dec"/>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn_primary">
                            Отправить
                            <span className="btn-corners btn-corners_top"/>
                            <span className="btn-corners btn-corners_bottom"/>
                        </button>
                    </form>
                </div>
                <div className="section-half half-second">
                    <div className="contact-info">
                        <OnDesktop>
                            <h4 className="section-subtitle">Контакты</h4>
                            <a href="tel:+380660249402" className="contact-info__link">380 66 024-94-02</a>
                            <a href="mailto:office@wearesho.com" className="contact-info__link">office@wearesho.com</a>
                            <p className="contact-info__text contact-info__text_indented">
                                <span className="text_medium">Техническая поддержка</span>
                                партнеров Cтудии<span className="contact-info__text_increased">24/7</span>
                            </p>
                            <p className="contact-info__text">
                                <span className="text_medium">Локация</span>
                                Украина / Харьков
                            </p>
                        </OnDesktop>
                        <OnMobile>
                            <p className="contact-info__text contact-info__text_indented">
                                <span className="text_medium">Техническая поддержка</span>
                                партнеров Cтудии<span className="contact-info__text_increased">24/7</span>
                            </p>
                            <p className="contact-info__text">
                                <span className="text_medium">Локация</span>
                                Украина / Харьков
                            </p>
                            <h4 className="section-subtitle">Контакты</h4>
                            <div className="align-container">
                                <a href="tel:+380660249402" className="contact-info__link">
                                    380 66 024-94-02
                                </a>
                                <a href="mailto:office@wearesho.com" className="contact-info__link">
                                    office@wearesho.com
                                </a>
                            </div>
                            <button className="btn btn_primary">
                                Сотрудничать
                                <span className="btn-corners btn-corners_top"/>
                                <span className="btn-corners btn-corners_bottom"/>
                            </button>
                            <div className="social-list">
                                <a href="#" className="social-list__item">
                                    <svg className="icon icon_soc-git" xmlns="http://www.w3.org/2000/svg" viewBox="1855 809 20 21.655">
                                        <g transform="translate(1835.433 809)">
                                            <path className="icon_fill" fill="#484848" d="M23.715,5.26a3.958,3.958,0,0,0-2.772,1.066A3.872,3.872,0,0,0,20.4,11.3a2.572,2.572,0,0,0,1.349,1.185v.047c-.541.221-.782.774-.782,1.658a1.634,1.634,0,0,0,.782,1.516v.047a2.71,2.71,0,0,0-2.178,2.724,2.7,2.7,0,0,0,1.482,2.535,6.117,6.117,0,0,0,2.968.64q4.383,0,4.386-3.673,0-2.3-3.386-2.819a1.909,1.909,0,0,1-1.184-.569.887.887,0,0,1-.308-.616.959.959,0,0,1,.948-1.019,3.611,3.611,0,0,0,2.358-1.339,4.069,4.069,0,0,0,.912-2.642,3.211,3.211,0,0,0-.222-1.019,7.8,7.8,0,0,0,.916-.261V5.26a7.191,7.191,0,0,1-2.6.569A4.156,4.156,0,0,0,23.715,5.26Zm.261,11.823q1.99,0,1.99,1.208,0,1.28-1.824,1.279-2.085,0-2.085-1.232Q22.056,17.082,23.976,17.082Zm-.166-6.255q-1.493,0-1.493-1.635,0-1.753,1.493-1.753a1.308,1.308,0,0,1,1.113.545,2.086,2.086,0,0,1,.332,1.185Q25.255,10.827,23.81,10.828ZM31.013,0A1.545,1.545,0,0,0,29.84.521a1.776,1.776,0,0,0-.486,1.256,1.747,1.747,0,0,0,.486,1.232,1.545,1.545,0,0,0,1.173.521,1.52,1.52,0,0,0,1.149-.521,1.747,1.747,0,0,0,.486-1.232A1.776,1.776,0,0,0,32.162.521,1.521,1.521,0,0,0,31.013,0ZM32.34,5.414H29.663c.032.3-.014.762-.014,1.5v7.369c0,.758.045,1.37.014,1.608H32.34a16.045,16.045,0,0,1-.114-1.75V6.871A10.985,10.985,0,0,1,32.34,5.414Zm5.9,8.21c-.7,0-1.038-.529-1.038-1.587V7.666h1.055c.189,0,.36-.01.574.005a3.694,3.694,0,0,0,.408.005V5.414H37.207V4.407a4.528,4.528,0,0,1,.107-.942H34.565a5.569,5.569,0,0,1,.043.99v.959H33.417V7.676a6.059,6.059,0,0,1,.82-.071l.371.024v.012h0v4.276a6.435,6.435,0,0,0,.5,2.914,2.442,2.442,0,0,0,2.371,1.232,4.174,4.174,0,0,0,2.088-.474V13.221A2.381,2.381,0,0,1,38.245,13.623Z" transform="translate(0 0)"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="#" className="social-list__item">
                                    <svg className="icon icon_soc-be" xmlns="http://www.w3.org/2000/svg" viewBox="1855 855 20 12.451">
                                        <g transform="translate(1855 764.756)">
                                            <path className="icon_fill" fill="#484848" d="M18.062,92.006H13.048V90.763h5.014ZM9.716,97.112a3.292,3.292,0,0,1,.481,1.821,3.64,3.64,0,0,1-.549,1.988,3.476,3.476,0,0,1-.88.978,3.437,3.437,0,0,1-1.407.623,8.385,8.385,0,0,1-1.757.172H0V90.244H6.008a3.811,3.811,0,0,1,3.222,1.327,3.165,3.165,0,0,1,.572,1.9,2.8,2.8,0,0,1-.575,1.836,2.957,2.957,0,0,1-.948.706A2.749,2.749,0,0,1,9.716,97.112ZM2.871,95.15H5.5a2.5,2.5,0,0,0,1.317-.307,1.175,1.175,0,0,0,.505-1.094,1.114,1.114,0,0,0-.671-1.15A4.737,4.737,0,0,0,5.185,92.4H2.871Zm4.707,3.6a1.325,1.325,0,0,0-.791-1.33,3.059,3.059,0,0,0-1.247-.213H2.871v3.317H5.5a3.018,3.018,0,0,0,1.26-.217A1.578,1.578,0,0,0,7.578,98.755ZM19.92,96.73A12.25,12.25,0,0,1,20,98.5H13.512a2.1,2.1,0,0,0,.927,1.877,2.315,2.315,0,0,0,1.286.343,1.985,1.985,0,0,0,1.292-.408,1.882,1.882,0,0,0,.485-.62H19.88a2.948,2.948,0,0,1-.869,1.617,4.341,4.341,0,0,1-3.349,1.295,4.838,4.838,0,0,1-3.143-1.1,4.324,4.324,0,0,1-1.364-3.562,4.827,4.827,0,0,1,1.229-3.561,4.284,4.284,0,0,1,3.187-1.236,5.118,5.118,0,0,1,2.1.417A3.564,3.564,0,0,1,19.2,94.887,4.431,4.431,0,0,1,19.92,96.73Zm-2.342.231a1.928,1.928,0,0,0-.623-1.4,2.044,2.044,0,0,0-1.383-.486,1.87,1.87,0,0,0-1.39.508,2.444,2.444,0,0,0-.622,1.38l4.018,0Z"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="#" className="social-list__item">
                                    <svg className="icon icon_soc-li" xmlns="http://www.w3.org/2000/svg" viewBox="1855 893 16 15.776">
                                        <g transform="translate(1855 892.369)">
                                            <g transform="translate(0 0.631)">
                                                <path className="icon_fill" fill="#484848" d="M3.623,2.341a1.705,1.705,0,0,1-1.846,1.71A1.685,1.685,0,0,1,0,2.341,1.7,1.7,0,0,1,1.823.631,1.692,1.692,0,0,1,3.623,2.341ZM.09,16.406V5.4H3.511v11H.09Z" transform="translate(0 -0.631)"/>
                                                <path className="icon_fill" fill="#484848" d="M30.848,29.832c0-1.373-.045-2.52-.09-3.511h2.97l.158,1.53h.067a3.951,3.951,0,0,1,3.4-1.778c2.25,0,3.938,1.508,3.938,4.748v6.5H37.869v-6.1c0-1.418-.5-2.385-1.733-2.385a1.878,1.878,0,0,0-1.755,1.283,2.456,2.456,0,0,0-.113.855v6.346H30.848Z" transform="translate(-25.29 -21.551)"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </OnMobile>
                    </div>
                    <div className="location-indicator">
                        <div className="location-indicator__bar"/>
                        <div className="location-indicator__marker"/>
                        <div className="location-indicator__info">
                            <span className="location-indicator__info_country">Ukraine</span>
                            <span className="location-indicator__info_city">Kharkiv</span>
                            <span className="location-indicator__info_coordinates">49.9808100&deg;</span>
                            <span className="location-indicator__info_coordinates">36.2527200&deg;</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}
// tslint:enable:max-line-length
