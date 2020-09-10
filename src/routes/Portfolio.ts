import Project from '../components/Project.svelte';

const projects = [{
    name: "personal website",
    estimatedTime: "20",
    image: "projects/gustav-lindstrom.png",
    description: "My online resume and portfolio",
    linktype: "repo",
    link: "https://github.com/gustavlindstroms/gustav-lindstrom.se",
    tools: [{
        name: "Svelte",
        icon: "svelte.png"
    },
    {
        name: "TypeScript",
        icon: "typescript.png",

    },
    {
        name: "Sass",
        icon: "sass.png",

    },
    {
        name: "git",
        icon: "git.png",

    }]
},
{
    name: "sudoku",
    estimatedTime: "60",
    image: "projects/sudoku.png",
    description: "Singe page application for playing sudoku, including backend to generate and serve over 2 000 000 sudoku boards over an REST API.",
    linktype: "repo",
    link: "https://github.com/gustavlindstroms/sudoku",
    tools: [
        {
            name: "C#",
            icon: "csharp.png",

        },
        {
            name: "Vue",
            icon: "vue.png"
        },
        {
            name: "TypeScript",
            icon: "typescript.png",

        },
        {
            name: "Sass",
            icon: "sass.png",

        },
        {
            name: "git",
            icon: "git.png",

        },
        {
            name: "SQL",
            icon: "mss.png",

        },
        {
            name: "Azure",
            icon: "azure.png",

        },]
},
{
    name: "sentiment analysis",
    image: "projects/sentiment-analysis.png",
    description: "Sentiment analysis over words appearing more than 125 times in Jane Austens book Pride and Prejudice.",
    linktype: "repo",
    link: "https://google.com",
    tools: [
        {
            name: "R",
            icon: "r.png",

        }]
},
{
    name: "maze generator and solver",
    estimatedTime: "60",
    image: "projects/maze.png",
    description: "Maze generating and solving with java & python using Prims algorithm. Needs more work...",
    linktype: "repo",
    link: "https://github.com/gustavlindstroms/mazeCraze",
    tools: [
        {
            name: "Java",
            icon: "java.png",

        },
        {
            name: "Python",
            icon: "python.png"
        },
        {
            name: "git",
            icon: "git.png"
        }]
}
]



export let Portfolio = "";