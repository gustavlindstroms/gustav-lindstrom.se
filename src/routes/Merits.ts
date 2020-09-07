import Merit from '../components/Merit.svelte';


const merits: Array<any> =
[
    {
        type: "job",
        companyName: "School of Economics and Management",
        title: "Lab Assistant",
        startDate: "aug 2020",
        endDate: null,
        description: "My task as an Lab Assistant is to support junior student with their lab-assignments. Teaching general design patterns and concepts in languages such as Java, SQL and C#.",
        image: "lu.png"
    },
    {
        type: "job",
        companyName: "XLENT Consultning Group",
        title: "Consultant",
        startDate: "june 2020",
        endDate: "aug 2020",
        description: "Internship involved full stack development with .NET API and Integration development. A thorough Progressive Web Application built with tools such as Vue.js Typescript, Sass. Worked with the git CLI, CI/CD operations, SCRUM and code reviews (Atlassian suite). The job gave me a deeper understanding of the stack and gave me tons of relevant experience of the software development process.",
        image: "xlent.png"
    },
    {
        type: "job",
        companyName: "Self Employed",
        title: "Busniess Intelligence Consultant",
        startDate: "okt 2019",
        endDate: "may 2020",
        description: "Job was to continue development and maintain Business Intelligence system at Tetra Pak. Job included development of interactive reports and operational responsibility how the department will continue to work with data. Job has also improved English communication skills.",
        image: "tetra-pak.png"
    },
    {
        type: "edu",
        companyName: "Lunds Universitet",
        title: "Bachelors Degree in Informatics",
        startDate: "sep 2018",
        endDate: null,
        description: "Ongoing education. Currently on fifth semester. Degree includes technical implementations skills such as Java, C# and SQL. Also includes knowledge in organizational governance, process modelling, law and project management.",
        image: "lu.png"
    },
    {
        type: "job",
        companyName: "Tetra Pak Packaging Solution",
        title: "Summer Worker",
        startDate: "june 2019",
        endDate: "aug 2019",
        description: "Led development project for a new Business Intelligence platform for my department. Worked in an agile team to develop the system. The job taught me agile methodology and tools such as Qlik, Microsoft Power BI and SAP.",
        image: "tetra-pak.png"
    },
    {
        type: "job",
        companyName: "Academic Work",
        title: "Server Administrator",
        startDate: "dec 2018",
        endDate: "aug 2020",
        description: "Responsible to secure uptime and continuously improve the IT-security within the company’s server and client environment. The job has given me a good interpretation of server environments (Windows Server 2016) and network technology. My tasks have recently also started to include accounting of the employer’s expenses.",
        image: "academic-work.png"
    },
    {
        type: "job",
        companyName: "Moderaterna",
        title: "Ombudsman",
        startDate: "may 2018",
        endDate: "sep 2020",
        description: "Responsible to secure uptime and continuously improve the IT-security within the company’s client and server environment. The job has given me a good interpretation of server environments (Windows Server 2016) and network technology. My tasks have recently also started to include accounting of the employer’s expenses.",
        image: "moderaterna.png"
    },
    {
        type: "job",
        companyName: "Ludwig & CO",
        title: "Junior Accountant",
        startDate: "aug 2017",
        endDate: "dec 2017",
        description: "Responsible to secure uptime and continuously improve the IT-security within the company’s client and server environment. The job has given me a good interpretation of server environments (Windows Server 2016) and network technology. My tasks have recently also started to include accounting of the employer’s expenses.",
        image: "ludwig-co.png"
    },
    {
        type: "edu",
        companyName: "Göteborgs Universitet",
        title: "Rhetoric and communication",
        startDate: "jan 2018",
        endDate: "june 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "gu.png"
    },
    {
        type: "vol",
        companyName: "Board of Education, Lund Municipality",
        title: "Substitute of The Board",
        startDate: "dec 2018",
        endDate: null,
        description: "",
        image: "lunds-kommun.png"
    },
    {
        type: "vol",
        companyName: "Board of Culture, Skellefteå Municipality",
        title: "Member of the Board",
        startDate: "2017",
        endDate: "2018",
        description: "",
        image: "skelleftea-kommun.png"
    },
    {
        type: "vol",
        companyName: "Moderate Youth Party, Västerbotten",
        title: "Vice President of The Board",
        startDate: "feb 2017",
        endDate: "feb 2018",
        description: "",
        image: "muf.png"
    },
    {
        type: "vol",
        companyName: "Moderate Youth Party, Skellefteå",
        title: "President",
        startDate: "march 2015",
        endDate: "march 2018",
        description: "",
        image: "muf.png"
    }
];

const jobs = merits.filter(x => x.type == "job");
const edu = merits.filter(x => x.type == "edu");
const vol = merits.filter(x => x.type == "vol");

const tools = [
    {
        name: ".NET C#",
        icon: "csharp.png"
    },    
    {
        name: "Vue",
        icon: "vue.png"
    },
    {
        name: "Power BI",
        icon: "powerbi.png"
    },
    {
        name: "Windows Server",
        icon: "windowsserver.png"
    },
    {
        name: "SCRUM",
        icon: "scrum.png"
    },
    {
        name: "Azure",
        icon: "azure.png"
    },    
    {
        name: "TypeScript",
        icon: "typescript.png"
    },    
    {
        name: "Svelte js",
        icon: "svelte.png"
    },
    {
        name: "Sass",
        icon: "sass.png"
    },
    {
        name: "Java",
        icon: "java.png"
    },
    {
        name: "Go",
        icon: "go.png"
    },
    {
        name: "git",
        icon: "git.png"
    },
    {
        name: "Atlassian Suite",
        icon: "atlassian.png"
    },    
    {
        name: "Visual Paradigm",
        icon: "vp.png"
    },
    {
        name: "python",
        icon: "python.png"
    },
    {
        name: "django",
        icon: "django.png"
    },
    {
        name: "Microsoft SQL Server",
        icon: "mss.png"
    },
    {
        name: "Maria DB",
        icon: "mariadb.png"
    },
    {
        name: "Amazon Web Services",
        icon: "aws.png"
    },    
    {
        name: "R",
        icon: "r.png"
    },
    {
        name: "bash",
        icon: "bash.png"
    },
    {
        name: "ruby on rails",
        icon: "rails.png"
    }
]

const about = "22-year-old, full time Bachelor Student within Informatics at Lund University. Previous experience in project management, leadership and economics. Good learning ability and strong motivation that spreads to others in the team. Hard working and effective with a huge interest for tech in all shapes and sizes. -Outgoing and likes everyone!"
export let group = "job";
export let About = "";