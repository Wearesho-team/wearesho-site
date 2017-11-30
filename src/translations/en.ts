import {NameRange} from "../models/common/Rules";
import {translate} from "../helpers/translate";
// tslint:disable:max-line-length
translate.registerTranslations("en", {
    header: {
        newProject: "New Project"
    },
    mainPage: {
        title: {
            mainOne: {
                base: "Here your",
                additions: {
                    1: "challenging",
                }
            },
            mainTwo: {
                base: "ideas are tranformed",
                additions: {
                    1: "into IT-product",
                }
            }
        },
        articles: {
            whatWeDo: {
                title: "We implement high-tech projects",
                items: {
                    1: "development of websites",
                    2: "branding and design",
                    3: "building of ERP and CRM-systems",
                    4: "analytics and advertising",
                    5: "technical support of projects"
                }
            },
            howLong: {
                title: "More than 3 years",
                subTitle: "of cooperation with such financial companies, as",
                items: [
                    "NIKO Holding",
                    "INFINANCE"
                ]
            }
        }
    },
    contactPage: {
        title: "Partnership",
        form: {
            titleExtended: "Contact us or complete the form. Our specialists will answer all your questions.",
            title: "Contact us",
            placeholders: {
                name: "Your name",
                phone: "Phone",
                mail: "E-mail",
                comment: "Comment"
            },
            time: {
                title: "We appreciate your time",
                subTitle: "Specify any convenient time for discussion of your project:",
                from: "from",
                to: "to"
            },
            submit: {
                success: {
                    thanks: "Thanks for your interest in our Studio",
                    callBack: "We will call you back at the specified time:",

                },
                fail: {
                    text: "Unfortunately, the information has not been sent. Please contact us by phone or write to mail.",
                },
                withRespect: "Best regards, your Studio Team"
            },
        },
        support: {
            title: "Technical support",
            subTitle: "of the Studio's partners"
        },
        location: {
            title: "Location",
        }
    },
    processPage: {
        title: "Process",
        subTitlePart1: "Development services",
        subTitlePart2: " for IT-product",
        text1: "The Studio provides a full range of services to create, " +
        " implement and maintain any software solutions for" +
        " automation of business processes in financial institutions.",
        text2: "Any process features are discussed when the project is agreed",
        stages: {
            title: {
                planning: "Project design",
                design: "Design",
                develop: "Development",
                deploy: "Deployment",
                promotion: "Promotion",
                support: "Customer support"
            },
            subTitle: {
                basedOnData: "based on data",
                sketches: "sketches",
                prototypes: "prototypes",
                frontBack: "front & back end",
                applicationsOnServers: "applications on servers",
                online: "online",
                offline: "offline",
                PR: "PR",
                dev: "dev",
                dsgn: "dsgn"
            }
        }
    },
    errorPage: {
        text1: "This page",
        text2: "not found",
        text3: "you can go",
        text4: "to the homepage ",
    },
    buttons: {
        send: "Send",
        sending: "Sending",
        cooperate: "Cooperate",
        download: "Download pdf"
    },
    hashTags: {
        autodealer: "#autodealer",
        logistics: "#logistics",
        finances: "#finances",
        crediting: "#crediting",
        consulting: "#consulting"
    },
    validation: {
        incorrect: {
            phone: "Incorrect phone",
            mail: "Incorrect E-Mail",
            name: `from ${NameRange.min} to ${NameRange.max} letters`,
            time: "Incorrect time"
        },
        empty: {
            phone: "Enter telephone",
            mail: "Enter E-Mail",
            name: "Enter name",
        }
    },
    slider: {
        support: "Technical support",
        PR: "PR",
        dev: "dev",
        dsgn: "dsgn",
        beginning: "Beginning of cooperation"
    },
    Kharkiv: "Kharkiv",
    Ukraine: "Ukraine",
    SHO: "SHO",
});
