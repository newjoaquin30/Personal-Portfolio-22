import { IonIcon } from "@ionic/react";
import "../css/certs.css"
import { chatboxEllipses, codeSlash, cog, exit, folderOpen, grid, medal, notifications, person, menu, close, search } from "ionicons/icons";
import pfp from "../img/profile.png"
import html from "../certificates/Copy of certificate - HTML (1).png"
import css from "../certificates/certificate - CSS (1).png"
import js from "../certificates/certificate - JavaScript (1).png"
import typescript from "../certificates/certificate - TypeScript (1).png"
import iteration from "../certificates/certificate - Iteration and Loops in TypeScript.png"
import functions from "../certificates/certificate (2).png"
import { useState, useEffect } from "react";

type Certificated = {
    id: number
    name: string
    image: string
}

const certs: Certificated[] = [
    { id: 1, name: "HyperText Markup Language", image: html },
    { id: 2, name: "Cascading Stylesheet", image: css },
    { id: 3, name: "JavaScript", image: js },
    { id: 4, name: "TypeScript", image: typescript },
    { id: 5, name: "TypeScript Iteration", image: iteration },
    { id: 6, name: "TypeScript Functions", image: functions },
]

export default function certificates(){
    const initialTheme = () => {
            const saved = localStorage.getItem("theme");
    
            if(saved) return saved;
            return window.matchMedia("(prefers-color-scheme: light)").matches ? "light": "dark";
        }
    
        const[theme] = useState(initialTheme);
    
        useEffect(() => {
            if(theme === "light"){
                document.body.classList.add("lightmode");
            }else{
                document.body.classList.remove("lightmode");
            }
    
            localStorage.setItem("theme", theme);
        }, [theme])
        
        function openSideNav(): void{
            const side: HTMLElement | null = document.getElementById("sidenav");
            if(side){
                side.style.left = "1px";
            }
        }
        
        function closeSideNav(): void{
            const side: HTMLElement | null = document.getElementById("sidenav");
            if(side){
                side.style.left = "-380px";
            }
        }
    return(
        <>
        <nav className="navigation-bar">
            <div className="nav-logo">
                <h2 className="logo"><IonIcon icon={person} className="icon"/><span className="name">Joaquin Riosa</span></h2>
                <IonIcon icon={menu} className="menu-1" onClick={openSideNav}/>
            </div>

            <div className="input-search">
                <input type="text" name="search" id="search" />
            </div>

            <div className="profile">
                <h3 className="pfp"><img src={pfp} alt="" /> <span className="name">Joaquin</span></h3>
                <IonIcon icon={notifications} className="icon"/>
                <IonIcon icon={chatboxEllipses} className="icon"/>
                <IonIcon icon={search} className="icon" id="search-1"/>
            </div>
        </nav>

        <aside className="sidenav-bar" id="sidenav">
            <h3 className="logo"><IonIcon icon={person} className="icon"/>Joaquin Riosa <IonIcon icon={close} className="close" onClick={closeSideNav}/></h3>
            <div className="line"></div>

            <h3 className="menu">Menu</h3>
            <a href="/dashboard/my/"><IonIcon icon={grid} className="nav-icon"/>Overview</a>
            <a href="/projects/my/"><IonIcon icon={folderOpen} className="nav-icon"/>Projects</a>
            <a href="/languages/my/"><IonIcon icon={codeSlash} className="nav-icon"/>Languages</a>
            <p className="current"><a href="/certificates/my/"><IonIcon icon={medal} className="nav-icon"/>Certificates</a></p>

            <div className="line"></div>
            <h3 className="configs">Configuration</h3>
            <a href="/settings"><IonIcon icon={cog} className="nav-icon"/>Settings</a>

            <div className="logout">
                <a href="/sign-in"><IonIcon icon={exit} className="icon"/> Logout</a>
            </div>
        </aside>

        <header className="certificates-container-2">
            <div className="certificates-contents-2">
                <h2 className="certs-title">My Certificates</h2>

                <div className="certificates">
                    {certs.map(c => (
                        <div className="card" key={c.id}>
                            <h3 className="name">{c.name}</h3>
                            <img src={c.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </header>
        </>
    )
}