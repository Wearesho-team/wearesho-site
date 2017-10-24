import * as React from "react";
import ReactModal from "react-modal";

import {Config} from "../../../data/Config";

import {OnMobile, OnMobileTablet, OnDesktop, OnTablet} from "../../../helpers/Breakpoints";
import {formatNumber} from "../../../helpers/formatNumber";
import {translate} from "../../../helpers/translate";

import {SocialLinks} from "../../Layout/Partials/SocialLinks";
import {PartnershipPageState} from "./PartnershipPageState";
import {CloseButton, SubmitButton} from "../../Buttons";
import {MapIcon} from "../../Icons/MapIcon";
import {ContactForm} from "./ContactForm";
import {BasePage} from "../BasePage";

export class PartnershipPage extends BasePage<undefined, PartnershipPageState> {
    public state: PartnershipPageState = {
        isModalOpen: false,
    };

    public shouldComponentUpdate(nextProps: undefined, nextState: PartnershipPageState, nextContext: any): boolean {
        return super.shouldComponentUpdate(nextProps, nextState, nextContext)
            || this.state.isModalOpen !== nextState.isModalOpen;
    }

    public render(): JSX.Element {
        const modalProps = {
            className: {
                base: "modal",
                afterOpen: "",
                beforeClose: "",
            },
            overlayClassName: {
                base: "modal-overlay",
                afterOpen: "modal-opened",
                beforeClose: "modal-close",
            },
            closeTimeoutMS: 500
        };

        return (
            <section className="section section-partnership">
                <div className="align-container">
                    <h2 className="section__title">{translate("contactPage.title")}</h2>
                    <div className="section__half half_first">
                        <OnDesktop>
                            <p className="section__text">
                                {translate("contactPage.form.titleExtended")}
                            </p>
                            <p className="section__text request-sent">
                                <span className="section__text_increased">Мефодий,</span>
                                <span>спасибо за проявленный интерес к Студии.</span>
                                <span>Мы обязательно перезвоним Вам в указанное время:</span>
                                <span className="section__text_indented">с
                                    <span className="section__text_increased">&nbsp;9:00&nbsp;</span>до
                                    <span className="section__text_increased">&nbsp;18:00&nbsp;</span>
                                </span>
                                <span>С уважением, команда Студии &laquo;ШО?!&raquo;</span>
                            </p>
                            <ContactForm/>
                        </OnDesktop>
                    </div>
                    <div className="section__half half_second">
                        <div className="contact-info">
                            <OnDesktop>
                                <h4 className="section__subtitle">{translate("contactPage.contacts.title")}</h4>
                                <a href={`tel:+${Config.phone}`} className="contact-info__link">
                                    {formatNumber(Config.phone, "xxx xx xxx-xx-xx")}
                                </a>
                                <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_medium">{translate("contactPage.support.title")}</span>
                                    {translate("contactPage.support.subTitle")}
                                    <span className="contact-info__text_increased">24
                                        <span className="separator">/</span>7
                                    </span>
                                </p>
                                <p className="contact-info__text">
                                    <span className="text_medium">{translate("contactPage.location.title")}</span>
                                    {translate(Config.location.country)}&nbsp;<span className="separator">/</span>
                                    &nbsp;{translate(Config.location.city)}
                                </p>
                            </OnDesktop>
                            <OnTablet>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_medium">{translate("contactPage.support.title")}</span>
                                    {translate("contactPage.support.subTitle")}
                                    <span className="contact-info__text_increased">24/7</span>
                                </p>
                                <div className="align-container">
                                    <h4 className="section__subtitle">{translate("contactPage.contacts.title")}</h4>
                                    <a href={`tel:+${Config.phone}`} className="contact-info__link">
                                        {formatNumber(Config.phone, "xxx xx xxx-xx-xx")}
                                    </a>
                                    <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                </div>
                                <SubmitButton
                                    type="button"
                                    onClick={this.handleOpenModal}
                                    label={translate("buttons.cooperate")}
                                />
                                <p className="contact-info__text">
                                    <span className="text_medium">{translate("contactPage.location.title")}</span>
                                    {translate(Config.location.country)} / {translate(Config.location.city)}
                                </p>
                            </OnTablet>
                            <OnMobile>
                                <p className="contact-info__text contact-info__text_indented">
                                    <span className="text_medium">{translate("contactPage.support.title")}</span>
                                    {translate("contactPage.support.subTitle")}
                                    <span className="contact-info__text_increased">24/7</span>
                                </p>
                                <p className="contact-info__text">
                                    <span className="text_medium">{translate("contactPage.location.title")}</span>
                                    {translate(Config.location.country)} / {translate(Config.location.city)}
                                </p>
                                <h4 className="section__subtitle">{translate("contactPage.contacts.title")}</h4>
                                <div className="align-container">
                                    <a href={`tel:+${Config.phone}`} className="contact-info__link">
                                        {formatNumber(Config.phone, "xxx xx xxx-xx-xx")}&nbsp;
                                    </a>
                                    <a href={`mailto:${Config.mail}`} className="contact-info__link">{Config.mail}</a>
                                </div>
                                <SubmitButton
                                    type="button"
                                    onClick={this.handleOpenModal}
                                    label={translate("buttons.cooperate")}
                                />
                                <SocialLinks/>
                            </OnMobile>
                        </div>
                    </div>
                    <OnMobileTablet>
                        <ReactModal
                            isOpen={this.state.isModalOpen}
                            contentLabel="Modal-partnership"
                            {...modalProps}
                        >
                            <div className="modal__header">
                                <a href="#" className="logo">
                                    <i className="icon icon_logo"/>
                                </a>
                                <CloseButton className="btn btn_close" onClick={this.handleCloseModal}/>
                                <h3 className="modal__title">{translate("contactPage.form.title")}</h3>
                            </div>
                            <div className="modal__body">
                                <ContactForm/>
                            </div>
                        </ReactModal>
                    </OnMobileTablet>
                    <div className="map-container">
                        <MapIcon/>
                        <div className="slider">
                            <div className="slider__body">
                                <div className="slider__dot"/>
                            </div>
                            <div className="slider__description">
                            <span className="slider__location">
                                {translate(Config.location.country)} / {translate(Config.location.city)}
                            </span>
                                <span className="slider__coordinates">
                                    {Config.location.coordinates.lat}&deg;&nbsp;
                                    {Config.location.coordinates.lng}&deg;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    protected handleCloseModal = () => {
        this.setState({isModalOpen: false});
        window.onwheel = window.onmousewheel = document.onmousewheel = document.onkeydown = undefined;
    };

    protected handleOpenModal = () => {
        this.setState({isModalOpen: true});
        document.onkeydown = (event: any) => event.target.nodeName.toLowerCase() === "input";
        window.onwheel = window.onmousewheel = document.onmousewheel = this.preventEvent;
    };

    protected preventEvent = (event: any) => {
        event.preventDefault();
        event.returnValue = false;
        return false;
    }
}
