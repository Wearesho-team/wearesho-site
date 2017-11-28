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
                }
            },
            mainTwo: {
                base: "идеи превращаются",
                additions: {
                    1: "в IT-продукт",
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
        },

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
    processPage: {
        title: "Процесс",
        subTitlePart1: "Всего 6 этапов для полного",
        subTitlePart2: " цикла IT-услуг",
        text1: "Студия работает с крупными финансовыми компаниями, создавая качественный продукт для эффективного" +
        " и прибыльного бизнеса на основе аналитики отрасли. Мы обеспечиваем постоянную техническую поддержку и" +
        " оптимизацию продукта.",
        text2: "Особенности процесса разработки обсуждаются при согласовании проекта",
        // text2: "Полную информацию вы можете увидеть в презентации",
        stages: {
            title: {
                planning: "Проектирование",
                design: "Дизайн",
                develop: "Разработка",
                deploy: "Развертывание",
                promotion: "Продвижение",
                support: "Тех. поддержка"
            },
            subTitle: {
                basedOnData: "на основе данных",
                sketches: "скетчи",
                prototypes: "прототипы",
                frontBack: "front & back end",
                applicationsOnServers: "приложений на серверах",
                online: "online",
                offline: "offline",
                PR: "PR",
                dev: "dev",
                dsgn: "dsgn"
            }
        }
    },
    errorPage: {
        text1: "Данная страница",
        text2: "не найдена",
        text3: "вы можете перейти",
        text4: "на главную",
    },
    buttons: {
        send: "Отправить",
        sending: "Отправка",
        cooperate: "Сотрудничать",
        download: "Скачать pdf"
    },
    hashTags: {
        autodealer: "#автодилер",
        logistics: "#логистика",
        finances: "#финансы",
        crediting: "#кредитование",
        consulting: "#консалтинг"

    },
    validation: {
        incorrect: {
            phone: "Некорректный телефон",
            mail: "Некорректный E-Mail",
            name: `от ${NameRange.min} до ${NameRange.max} букв`,
            time: "Некорректное время"
        },
        empty: {
            phone: "Введите телефон",
            mail: "Введите E-Mail",
            name: "Введите имя",
        }
    },
    slider: {
        support: "Техническая поддержка",
        PR: "PR",
        dev: "dev",
        dsgn: "dsgn",
        beginning: "Начало сотрудничества"
    },
    Kharkiv: "Харьков",
    Ukraine: "Украина",
    SHO: "ШО",
});
