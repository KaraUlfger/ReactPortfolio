import self from "../img/self.png";
import mock1 from "../img/Mock1.gif";
import mock2 from "../img/Mock2.gif";
import mock3 from "../img/Mock3.gif";
import mock4 from "../img/Mock4.gif";
import mock5 from "../img/Mock5.gif";
import mock6 from "../img/Mock6.gif";
import mock7 from "../img/Mock7.gif";
import mock8 from "../img/Mock8.gif";
import mock9 from "../img/Mock9.gif";
import mock10 from "../img/Mock10.gif";
import mock11 from "../img/Mock11.gif";
import mock12 from "../img/Mock12.gif";
import writer from "../img/writer.gif";
import bio from "../img/bio.gif";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Dar'Jetii",
    lastName: "Jetii",
    initials: "DJ",
    position: "to my Character Portfolio",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        { emoji: '☕', text: 'fueled by coffee' },
        { emoji: '🌎', text: 'based in the US' },
        { emoji: "💼", text: "Valkyrie Crime Faction Leader" },
        { emoji: "📧", text: "Discord Username: darjetii" }
    ],
    socials: [],
    bio: "",
    skills: {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    },
    hobbies: [
        { label: 'reading', emoji: '📖' },
        { label: 'theater', emoji: '🎭' },
        { label: 'movies', emoji: '🎥' },
        { label: 'cooking', emoji: '🌶' }
    ],
    portfolio: [
        {
            live: "https://docs.google.com/document/d/1j98bAoTohtGpNq11zSTWQ0iXP2ScnvQ5TVufsHd8kaA/edit?usp=sharing",
            image: mock1,
            hoverImage: mock6,
        },
        {
            live: "https://docs.google.com/document/d/1JxQdk3sTLHnAGB-4zB-Y4fgtQRzybkmNyQ8Rul4WuMU/edit?usp=sharing",
            image: mock2,
            hoverImage: mock7,
        },
        {
            live: "https://docs.google.com/document/d/18i6cFOQxZ38Lw-PePfG5sua58MOXPs9fSbwpaEKDxf0/edit?usp=sharing",
            image: mock3,
            hoverImage: mock8,
        },
        {
            live: "https://docs.google.com/document/d/1TBcBoei8JjP2Ev-eLgrLZRIfxlZS61neR2ZVeiFcCWc/edit?usp=sharing",
            image: mock4,
            hoverImage: mock9,
        },
        {
            live: "https://docs.google.com/document/d/1MWNwLfZALMPkZutANykSU-3qLP_E_TLKbQgRoXqZgaE/edit?usp=sharing",
            image: mock5,
            hoverImage: mock10,
        },
        {
            live: "https://docs.google.com/document/d/1hnWOmrDr5fP3yvo8j3Z6EzjXYpD1erJkpj5zMfYhToc/edit",
            image: mock11,
            hoverImage: mock12,
        }
    ],
    about: [
        {
            live: "https://docs.google.com/document/d/1MWNwLfZALMPkZutANykSU-3qLP_E_TLKbQgRoXqZgaE/edit?usp=sharing",
            image: writer,
            hoverImage: bio,
        }
    ],
};
