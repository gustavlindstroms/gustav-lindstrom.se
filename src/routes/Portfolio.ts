import Project from '../components/Project.svelte';

const projects = [{
    name: "Personal Website",
    estimatedTime: "20",
    image: "projects/sudoku.png",
    description: "My online resume and portfolio",
    linktype: "repo",
    link: "https://github.com",
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
    name: "sudoku web-app",
    estimatedTime: "60",
    image: "projects/sudoku.png",
    description: "Singe page application for playing sudoku, including backend to generate and serve over 2 000 000 sudoku boards over REST API",
    linktype: "repo",
    link: "https://gitlab.com",
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
    name: "sudoku web-app",
    estimatedTime: "60",
    image: "projects/sudoku.png",
    description: "Singe page application for playing sudoku, including backend to generate and serve over 2 000 000 sudoku boards over REST API",
    linktype: "site",
    link: "https://google.com",
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
    name: "sudoku web-app",
    estimatedTime: "60",
    image: "projects/sudoku.png",
    description: "Singe page application for playing sudoku, including backend to generate and serve over 2 000 000 sudoku boards over REST API",
    linktype: "site",
    link: "http://google.com",
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
}
]



export let Portfolio = "";