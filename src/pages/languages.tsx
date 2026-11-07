import { IonIcon } from "@ionic/react";
import { ban, chatboxEllipses, codeSlash, cog, exit, folderOpen, grid, logoCss3, logoHtml5, logoJavascript, logoReact, medal, notifications, person, menu, close, search } from "ionicons/icons";
import "../css/languages.css"
import pfp from "../img/profile.png"
import { useState, useEffect } from "react";

type Languages = {
    id: number
    name: string
    ionicon: string
}

const langs: Languages[] = [
    { id: 1, name: "Hypertext Markup Language", ionicon: logoHtml5 },
    { id: 2, name: "Cascading Stylesheet", ionicon: logoCss3 },
    { id: 3, name: "JavaScript", ionicon: logoJavascript },
    { id: 4, name: "React", ionicon: logoReact },
    { id: 5, name: "TypeScript", ionicon: ban },
]

export default function languages(){
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
            <p className="current"><a href="/languages/my/"><IonIcon icon={codeSlash} className="nav-icon"/>Languages</a></p>
            <a href="/certificates/my/"><IonIcon icon={medal} className="nav-icon"/>Certificates</a>

            <div className="line"></div>
            <h3 className="configs">Configuration</h3>
            <a href="/settings"><IonIcon icon={cog} className="nav-icon"/>Settings</a>

            <div className="logout">
                <a href="/sign-in"><IonIcon icon={exit} className="icon"/> Logout</a>
            </div>
        </aside>

        <header className="langs-container">
            <div className="langs-contents">
                <h2 className="langs-title">Languages I use</h2>

                <div className="languages-1">
                    {langs.map(l => (
                        <div className="card">
                            <h3 className="name"><IonIcon icon={l.ionicon} className="icon"/>{l.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </header>
        </>
    )
}