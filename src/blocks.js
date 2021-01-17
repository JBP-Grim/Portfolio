const blocks = [
    {
        id:1,
        title: "Experiencia profesional",
        img :"elements/images/1.gif",
        jobs:[{
            formal:[
                {
                    id:1.1,
                    title:"Becario",
                    concept:"Programador y jefe de equipo de desarrollo y documentación, asignando las tareas correspondienes para cada área a lo largo del proyecto. Desarrollo de un sistema para la gestión de eventos escolares internos, realizado con ASP.NET, C#, MYSQL Server, HTML, Bootstrap, JavaScript, AJAX(JQuery) y CSS.",
                    institution:"UNIVDEP.",
                    time:"2019 - 2020."
                }
            ],
            freelance:[
                {
                    id:1.2,
                    title:"Sitio web CJS",
                    institution:"Commercial Janitorial Services (CJS)",
                    concept:"Desarrollo de una página estatica para una empresa de servicios sanitarios americana, el sitio web fué realizado con HTML, Bootstrap, JavaScript, JQuery, CSS, Git y PHP.",
                    link:"https://commercial-cjs.com",
                    git:"https://github.com/OMEGONCIO/CJS"
                }
            ]
        }]
    },
    {
        id:2,
        title:"Educación",
        img :"https://s1.significados.com/foto/online-3412473-640_bg.jpg",
        profesional:[
            {
                id:2.1,
                title:"Ingeniería en sistemas computacionales 2017 - 2020",
                institución:"UNIVDEP (UNIVERSIAD DEL DESARROLLO EMPRESARIAL Y PEDAGÓGICO)",
                url:"elements/images/diploma.PNG"
            }
        ],
        courses:[
            {
                id:2.2,
                title:"Web Development Bootcamp",
                concept:"CURSO TOMADO EN LA PLATAFORMA UDEMY EL CUAL, ABORDA TEMAS COMO HTML, CSS, BOOTSTRAP, JS, DOM, COMANDOS BASICOS DE LINUX, NODE.JS (EXPRESS, API'S, NPM, EJS), BASES DE DATOS Y REACT.JS",
                link:"https://www.udemy.com/course/the-complete-web-development-bootcamp/",
                certificate:"https://www.udemy.com/certificate/UC-fbf45397-01f5-48b6-8cb8-b319f32626a3/"
            }
        ]
    },
    {
        id:3,
        title:"Conocimientos",
        img :"https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png",
        knowledge:[
            {
                id:"k1",
                name:"SQL",
                url:"https://www.flaticon.es/svg/static/icons/svg/2772/2772128.svg",
                description:"Conocimiento en bases de datos relacionales (análisis para la creación de bases de datos, CRUD's y relaciones con llaves foraneas), MySQL, SQLServer, SQLLite.",
                percent:"70%",
                color:"rgb(254,248,144)",
                gradient:"linear-gradient(0deg, rgba(254,248,144,1) 0%, rgba(226,217,67,1) 100%)"
            },
            {
                id:"k2",
                name:"Node JS",
                url:"elements/images/logos/nodeLogo.png",
                description:"Conocimientos en el manejo de herramientas como NPM, express, API's, EJS, seguridad (encriptación, salt y hashing) y autenticación con sesiones.",
                percent:"65%",
                color:"rgb(97,164,64)",
                gradient:"linear-gradient(0deg, rgba(97,164,64,1) 0%, rgba(55,129,18,1) 100%)"
            },
            {
                id:"k3",
                name:"Java Script",
                url:"elements/images/logos/jsLogo.png",
                description:"JS nativo, control del DOM, conocimientos de nivel alto como JSON, funciones callback, operaciones ternarias, funciones flecha y cookies. Manejo de librerias como JQuery.",
                percent:"80%",
                color:"rgb(250,255,91)",
                gradient:"linear-gradient(0deg, rgba(250,255,91,1) 0%, rgba(207,213,20,1) 100%)"
            },
            {
                id:"k4",
                name:"Mongo DB",
                url:"elements/images/logos/mongoLogo.png",
                description:"Conocimientos en Mongo (creación de bases de datos, CRUD's), manejo de mongoose y MongoDB Atlas.",
                percent:"60%",
                color:"rgb(139,114,68)",
                gradient:"linear-gradient(0deg, rgba(139,114,68,1) 0%, rgba(88,65,23,1) 100%)"
            },
            {
                id:"k5",
                name:"CSS 3",
                url:"https://www.flaticon.es/svg/static/icons/svg/888/888847.svg",
                description:"Conocimiento en herramientas de estilo básicas y avanzadas como pseudo clases para funciones dinámicas y media queries para un sitio responsivo.",
                percent:"80%",
                color:" rgb(96,247,255)",
                gradient:"linear-gradient(0deg, rgba(96,247,255,1) 0%, rgba(25,178,186,1) 100%)"
            },
            {
                id:"k6",
                name:"React JS",
                url:"elements/images/logos/reactLogo.png",
                description:"Creación, importación y exportación de componentes React, manejo de react props, mapping components, react hooks e implementación de componentes pre creados como MATERIAL-UI.",
                percent:"75%",
                color:"rgb(12,116,105)",
                gradient:"linear-gradient(0deg, rgba(12,116,105,1) 0%, rgba(10,209,188,1) 100%)"
            },
            {
                id:"k7",
                name:"HTML 5",
                url:"https://www.flaticon.es/svg/static/icons/svg/888/888859.svg",
                description:"Manejo de elementos HTML y funciones como la importación de archivos externos, uso de frameworks como Bootstrap.",
                percent:"80%",
                color:"rgb(255,165,83)",
                gradient:"linear-gradient(0deg, rgba(255,165,83,1) 0%, rgba(255,109,0,1) 100%)"
            },
            {
                id:"k8",
                name:"Git / GitHub",
                url:"elements/images/logos/gitLogo.png",
                description:"Conocimientos en Git (crear, actualizar, modificar y eliminar repositorios) y uso de github.",
                percent:"70%",
                color:"rgb(235,69,42)",
                gradient:"linear-gradient(180deg, rgba(235,69,42,1) 0%, rgba(238,129,110,1) 100%)"
            }
        ],
        dataBases:[
            {
                d1:"Mysql",
                d2:"Sql Server",
                d3:"Mongo DB"
            }
        ],
        secondary:[
            {
                s1:"Bootstrap",
                s2:"JQuery",
                s3:"NPM",
                s4:"Express.js",
                s5:"EJS"
            }
        ]
    },
    {
        id:4,
        title: "Portafolio",
        img :"elements/images/1.gif"
    }
];

const contacts = {
    email:"barberena.josue@outlook.com",
    github:"https://github.com/OMEGONCIO",
    phone:"MX 56-11-37-68-60"
}

const footerIcons = [
    {
        id:1,
        img:"https://www.flaticon.es/svg/static/icons/svg/888/888859.svg"
    },
    {
        id:2,
        img:"https://www.flaticon.es/svg/static/icons/svg/888/888847.svg"
    },
    {
        id:5,
        img:"elements/images/logos/jsLogo.png"
    },
    {
        id:3,
        img:"elements/images/logos/nodeLogo.png"
    },
    {
        id:4,
        img:"elements/images/logos/reactLogo.png"
    }
]

const portfolio = [
    {
        id:1,
        title:"C.J.S.",
        img:"elements/images/portafolio/cjs.png",
        description:"Sitio web estatico, profesional, hecho para una empresa americana. Realizado con HTML, Bootstrap, css, Js y Php.",
        githubLink:"https://github.com/OMEGONCIO/CJS",
        siteLink:"https://commercial-cjs.com"
    },
    {
        id:2,
        title:"App de Notas",
        img:"elements/images/portafolio/recordatorio.png",
        description:"Aplicación elaborada con React. Uso de react hooks, react components y Material-UI.",
        githubLink:"",
        siteLink:""
    },
    {
        id:3,
        title:"título",
        img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8adefab8-9a4e-4fa7-8ad7-e2e4cf9cf1e9/ddkd68b-35475dd5-44a0-41f0-827a-03b2c8284a13.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGFkZWZhYjgtOWE0ZS00ZmE3LThhZDctZTJlNGNmOWNmMWU5XC9kZGtkNjhiLTM1NDc1ZGQ1LTQ0YTAtNDFmMC04MjdhLTAzYjJjODI4NGExMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fcRmO16hXePtUQvz0vfmOH1pZgOr3ES4iKOrnKE8Xyg",
        description:"respective description",
        githubLink:"",
        siteLink:""
    },
    {
        id:4,
        title:"título",
        img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8adefab8-9a4e-4fa7-8ad7-e2e4cf9cf1e9/ddkd68b-35475dd5-44a0-41f0-827a-03b2c8284a13.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGFkZWZhYjgtOWE0ZS00ZmE3LThhZDctZTJlNGNmOWNmMWU5XC9kZGtkNjhiLTM1NDc1ZGQ1LTQ0YTAtNDFmMC04MjdhLTAzYjJjODI4NGExMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fcRmO16hXePtUQvz0vfmOH1pZgOr3ES4iKOrnKE8Xyg",
        description:"respective description",
        githubLink:"",
        siteLink:""
    },
    {
        id:5,
        title:"título",
        img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8adefab8-9a4e-4fa7-8ad7-e2e4cf9cf1e9/ddkd68b-35475dd5-44a0-41f0-827a-03b2c8284a13.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGFkZWZhYjgtOWE0ZS00ZmE3LThhZDctZTJlNGNmOWNmMWU5XC9kZGtkNjhiLTM1NDc1ZGQ1LTQ0YTAtNDFmMC04MjdhLTAzYjJjODI4NGExMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fcRmO16hXePtUQvz0vfmOH1pZgOr3ES4iKOrnKE8Xyg",
        description:"respective description",
        githubLink:"",
        siteLink:""
    }
]

export {blocks, contacts, footerIcons, portfolio};