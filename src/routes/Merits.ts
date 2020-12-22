import Merit from '../components/Merit.svelte';
import { onMount } from 'svelte';

const merits: Array<any> =
    [
        {
            type: "job",
            companyName: "School of Economics and Management",
            title: "Lab Supervisor",
            startDate: "aug 2020",
            endDate: null,
            description:"Tutoring junior students in their computer science assignments. Work involves explaining various concepts and design patterns in technologies such as Java, Relational Databases, and C#. Job has improved my ability to make technical concepts comprehensible.",
            image: "lu.png"
        },
        {
            type: "job",
            companyName: "Spago Nanomedical",
            title: "Server Administrator",
            startDate: "dec 2018",
            endDate: null,
            description: "Responsible to secure uptime and continuously improve the IT-security within the company’s server and client environment. The job has given me a good interpretation of server environments (Windows Server 2016), sequrity and networking (TCP/IP). Recently also leading a server project for scientific computations using python with CI/CD.",
            image: "spago.png"
        },
        {
            type: "job",
            companyName: "XLENT Consultning Group",
            title: "Consultant",
            startDate: "june 2020",
            endDate: "aug 2020",
            description: "Planned and developed a “proof of concept” application for the real estate industry. Worked in a SCRUM team with code reviews and version control. Gained a lot of experience in the software development process, requirement specification, and cooperating with product owners and managers. Development spanned across the entire stack.",
            image: "xlent.png"
        },
        {
            type: "job",
            companyName: "Tetra Pak",
            title: "Busniess Intelligence Consultant",
            startDate: "june 2019",
            endDate: "may 2020",
            description: "Led the development of a new Business Intelligence platform. The project's goal was to improve how the department worked with data to improve daily workflow and decision support. Worked closely with the product owner and played a key role in the launch and promotion of the platform to support and educate the users. Job also improved my English in a business context. The job started as a summer job and later as a self-employed consultant.",
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
            companyName: "Moderaterna",
            title: "Ombudsman",
            startDate: "may 2018",
            endDate: "sep 2020",
            description: "The job was to manage the political campaign for the Moderate Youth Party in Skåne County for the election in 2018. Involved planning and executing multiple conferences for more than 100 people as well as developing strategy, digital content production, and promoting the campaign verbally.",
            image: "moderaterna.png"
        },
        {
            type: "job",
            companyName: "Ludwig & CO",
            title: "Junior Accountant",
            startDate: "aug 2017",
            endDate: "dec 2017",
            description: "Responsible for accounting customers' expenses and incomes as well as doing taxes. Also responsible for a digital transformation of company documents. Gave me a solid understanding of business, Swedish tax law, and working with clients.",
            image: "ludwig-co.png"
        },
        {
            type: "edu",
            companyName: "Uppsala Universitet",
            title: "Computer Architecture",
            startDate: "aug 2020",
            endDate: null,
            description: "Learning about the architecture of CPUs and design of computers using MIPS instruction set, Assembly and Logic simulation.",
            image: "uu.png"
        },
        {
            type: "edu",
            companyName: "Göteborgs Universitet",
            title: "Rhetoric and communication",
            startDate: "jan 2018",
            endDate: "june 2018",
            description: "Learned the theory of great pubic speaking, speech-writing, and how to perform public speaking professionally. Always liked public speaking and this was a way for me to sharpen my communication skills.",
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
export let showScroll = true;

onMount(() => {
    const element = document.querySelector(".intersection-element");
    const options = {};
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showScroll = false;
            } else {
                showScroll = true;
            }
        })
    }, options);
    observer.observe(element);
});



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

const about = "22-year-old Informatics Student at Lund University with a true passion for tech and business. Previous experience in Project Management, Development, Data Analysis, and Business- now looking to excel in my career! People describe me as a hard-working, fast learning, people person. I like to keep myself busy and have, during my academic career, worked several part-time jobs, and explored numerous personal projects."
export let group = "job";
export let About = "";