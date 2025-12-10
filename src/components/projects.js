import condominiumImg from "../assets/CondoBookingApp.png"
import travelPlanner from "../assets/TravelApp.png"
import retroGameImg from "../assets/RetroMemoryGame.png"
import ahorcadoImg from "../assets/AhorcadoImg.png"
import MovieApiImg from "../assets/FilmApiApp.png"
import TenziesImg from "../assets/Tenzies.png"
import portfolioImg from "../assets/portfolioo.png"

//test

import HTMLImg from '../assets/html-5-logo-svg-1.svg';
import CSSImg from '../assets/css-3.svg';
import JsImg from '../assets/javascript-1.svg';
import TsImg from '../assets/typescript-2.svg';
import ReactImg from '../assets/react.svg';
import ReactNativeImg from '../assets/react-native-1.svg';
import Firebase from '../assets/firebase-3.svg';
import GitHub from '../assets/git.svg';

export const projects = [
    {
        title:"Condominium Common Areas Reservation System",
        description:"Web app for booking condominium common areas, managing reservations, and preventing scheduling conflicts through a secure, responsive interface.",
        longDescription: `A web application that allows condominium residents to book shared amenities without scheduling conflicts. The system displays all existing reservations in real time, prevents overlapping bookings, and provides a smooth user flow for creating, viewing, and canceling reservations.

        Residents can sign in with Google or email/password, register their house number, and manage their personal bookings. The app includes conflict detection, guided reservation pop-ups, secure access rules, dynamic schedule rendering, and a responsive UI optimized for mobile and desktop.`,
        imgUrl:condominiumImg,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg}, {name:"firebase", image: Firebase}, {name: "gitHub", image : GitHub}],
        liveProject:"https://sistema-de-reservas-condominio-app-mu.vercel.app/index.html",
        gitHub:"https://github.com/Jhondrek/Sistema-de-reservas-condominio-app",
        completed: true,
        id:1
    },
    {
        title:"Travel Planner App with AI",
        description:"A modern travel-planning app that uses AI to generate personalized trip recommendations based on weather, budget, and group size.",
        longDescription:`This is a modern travel-planning web app designed to help users quickly generate personalized trip recommendations. The app uses AI to analyze key factors such as destination weather, travel dates, budget, and group size to suggest ideal locations and experiences.

        The interface is built with a clean, intuitive two-step input flow: users enter initial information, and once each field is completed, the UI animates upward to reveal the next set of inputs—creating a smooth, guided experience. The app also includes smart field-focus detection, ensuring that elements react dynamically based on where the user is typing or clicking.

        The home page features a fully responsive video background, with transparent and blurred UI elements that allow motion to subtly appear behind text and inputs without sacrificing readability. CSS Modules and a global variable stylesheet are used to maintain scalable, maintainable styling across components.`,
        imgUrl:travelPlanner,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg}, {name:"react", image: ReactImg}, {name: "gitHub", image : GitHub}],
        liveProject:"",
        gitHub:"https://github.com/Jhondrek/PackWise",
        completed: false,
        id:2
    },
    {
        title:"Memory Match Game (React Native)",
        description:"A mobile memory game built with React Native featuring three difficulty levels. Players flip cards to reveal images and try to find matching pairs.",
        longDescription:`A mobile memory game built with React Native featuring three difficulty levels (4, 8, and 16 cards). Players flip cards to reveal images and try to match pairs, with unmatched cards automatically flipping back. The game includes randomized layouts for each round, smooth flip animations, state-driven game logic, progress tracking, and a clean UI. Designed to provide a simple but engaging experience that scales in difficulty as players advance.`,
        imgUrl: retroGameImg,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg}, {name:"react native", image: ReactNativeImg}, {name: "gitHub", image : GitHub}],
        liveProject:"https://www.youtube.com/shorts/2jyd05af1_k",
        gitHub:"https://github.com/Jhondrek/Retro-memory-game",
        completed: true,
        id:3
    },
    {
        title:"React Hangman game",
        description:"Word-guessing game featuring state management, attempt logic, and dynamic rendering.",
        longDescription:`
        A playful word-guessing game where users uncover a hidden word one letter at a time. The game starts with blank spaces showing the word’s length and a lineup of programming languages displayed at the top. Every wrong guess “eliminates” one of those languages, paired with a fun message mourning its loss. Guess a correct letter, and you’ll get a celebration message cheering you on.

        Your goal is to solve the word before the entire tech world collapses! The final language standing is COBOL, so the ultimate mission is simple: save humanity from a future where developers are doomed to learn COBOL.`,
        imgUrl: ahorcadoImg,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg}, {name:"react", image: ReactImg}, {name: "gitHub", image : GitHub}],
        liveProject:"https://assembly-end-game-26dv.vercel.app/",
        gitHub:"https://github.com/Jhondrek/Assembly-EndGame",
        completed: true,
        id:4
    },
    {
        title:"Tenzies Game",
        description:"Tenzies is a dice game where you roll ten dice and keep rerolling until all dice show the same number.",
        longDescription:`
        A simple dice-style game built with React to practice fundamentals like useState, useEffect, and props management. The app displays ten number “cards” and a Roll button. The goal is to make all cards show the same number. Players can click a card to mark it green (selected), and continue selecting cards with the same value. Pressing Roll generates new random numbers only for the unselected cards. If a player clicks a wrong number, the card briefly turns red and animates to indicate the mistake before deselecting. The game ends when all cards display the same selected number.
        `,
        imgUrl: TenziesImg,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg},{name:"react", image: ReactImg}, {name: "gitHub", image : GitHub}],
        liveProject:"https://1-tenzies-game.vercel.app/",
        gitHub:"https://github.com/Jhondrek/1-Tenzies-game",
        completed: true,
        id:5
    },

    {
        title:"Movie Watchlist App",
        description:"A movie search app that fetches results from the OMDb API and lets users save films to a persistent watchlist using localStorage. The My Watchlist page displays all saved movies, each with a remove option to update the list instantly.",
        longDescription:`
        A movie search app powered by the OMDb API, featuring a responsive search bar that returns film results based on the user’s query. Each movie includes an “Add to Watchlist” button that stores the selection in localStorage to ensure persistence. The My Watchlist page displays all saved movies, each with a Remove button that updates localStorage in real time.
        `,
        imgUrl: MovieApiImg,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg}, {name: "gitHub", image : GitHub}],
        liveProject:"https://movie-watchlist-gray-iota.vercel.app/",
        gitHub:"https://github.com/Jhondrek/Movie-watchlist",
        completed: true,
        id:6
    }, 
    {
        title:"Portfolio website",
        description:"My personal portfolio website built with React",
        longDescription:`
        This project is my personal portfolio website built with React. It uses React Router to handle navigation between pages and dynamic route parameters to display individual project profiles. The site is fully component-based for better performance and scalability, showcases my most relevant projects with detailed descriptions, includes GitHub and live demo links hosted on Netlify, and is fully responsive with both mobile and desktop versions. It also features a contact section for easy communication.
        `,
        imgUrl: portfolioImg,
        technologies: [{name:"html", image: HTMLImg }, {name:"css", image: CSSImg}, {name:"javascript", image:JsImg}, {name:"react", image: ReactImg}, {name: "gitHub", image : GitHub}],
        liveProject:"https://portfolio-website-eight-topaz-28.vercel.app/",
        gitHub:"https://github.com/Jhondrek/PortfolioWebsite",
        completed: true,
        id:7
    }


]