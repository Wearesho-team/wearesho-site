import {NameRange} from "../models/common/Rules";
import {translate} from "../helpers/translate";
// tslint:disable:max-line-length
translate.registerTranslations("ru", {
    header: {
        newProject: "Новый проект"
    },
    mainPage: {
        title: {
            mainOne: {
                base: "Здесь ваши",
                additions: {
                    1: "смелые",
                    2: "смелые2",
                    3: "смелые3"
                }
            },
            mainTwo: {
                base: "идеи превращаются",
                additions: {
                    1: "в IT-продукт",
                    2: "в IT-продукт2",
                    3: "в IT-продукт3"
                }
            }
        },
        articles: {
            whatWeDo: {
                title: "Реализуем высокотехнологичные проекты",
                items: {
                    1: "разработка сайтов",
                    2: "брендинг и дизайн",
                    3: "формирование ERP и CRM-систем",
                    4: "аналитика и реклама",
                    5: "техническая поддержка проектов"
                }
            },
            howLong: {
                title: "Более 3 лет",
                subTitle: "сотрудничества с финансовыми компаниями:",
                items: [
                    "NIKO Holding",
                    "INFINANCE"
                ]
            }
        }
    },
    contactPage: {
        title: "Партнерство",
        form: {
            titleExtended: "Свяжитесь с нами или укажите данные в форме. Наши специалисты ответят на все вопросы.",
            title: "Свяжитесь с нами",
            placeholders: {
                name: "Ваше имя",
                phone: "Телефон",
                mail: "Эл.почта",
                comment: "Комментарий"
            },
            time: {
                title: "Мы ценим ваше время",
                subTitle: "Укажите удобное время для обсуждения проекта:",
                from: "с",
                to: "до"
            },
            submit: {
                success: {
                    thanks: "спасибо за проявленный интерес к Студии.",
                    callBack: "Мы обязательно перезвоним Вам в указанное время:",

                },
                fail: {
                    text: "к сожалению инфоромация не отправлена. Пожалуйста, свяжитесь с нами по телефону или напишите на почту.",
                },
                withRespect: "С уважением, команда Студии"
            },
        },
        support: {
            title: "Техническая поддержка",
            subTitle: "партнеров Cтудии"
        },
        location: {
            title: "Локация",
        }
    },
    buttons: {
        send: "Отправить",
        sending: "Отправка",
        cooperate: "Сотрудничать"
    },
    hashTags: {
        autodealer: "#автодилер",
        logistics: "#логистика",
        finances: "#финансы",
        crediting: "#кредитование"
    },
    validation: {
        incorrect: {
            phone: "Некорректный телефон",
            mail: "Некорректный E-Mail",
            name: `Латиница/кириллица от ${NameRange.min} до ${NameRange.max} символов`,
            time: "Некорректное время"
        },
        empty: "Заполните поле",
    },
    Kharkiv: "Харьков",
    Ukraine: "Украина",
    SHO: "ШО",
});
