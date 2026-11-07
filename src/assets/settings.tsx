import { IonIcon } from "@ionic/react";
import { chatboxEllipses, codeSlash, cog, exit, folderOpen, grid, medal, notifications, person, menu, close, search } from "ionicons/icons";
import "../css/settings.css"
import pfp from "../img/profile.png"
import { useEffect, useState } from "react";

export default function settings(){
    const initialTheme = () => {
        const saved = localStorage.getItem("theme");

        if(saved) return saved;
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light": "dark";
    }

    const[theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        if(theme === "light"){
            document.body.classList.add("lightmode");
        }else{
            document.body.classList.remove("lightmode");
        }

        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

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
            <a href="/certificates/my/"><IonIcon icon={medal} className="nav-icon"/>Certificates</a>

            <div className="line"></div>
            <h3 className="configs">Configuration</h3>
            <p className="current"><a href="/settings"><IonIcon icon={cog} className="nav-icon"/>Settings</a></p>

            <div className="logout">
                <a href="/sign-in"><IonIcon icon={exit} className="icon"/> Logout</a>
            </div>
        </aside>

        <header className="settings-container">
            <div className="settings-contents">
                <h2 className="settings-title">Settings</h2>

                <div className="gen-settings">
                    <h3 className="general-settings">General Settings</h3>
                    <p className="settings">Dark Mode / Light Mode 
                        <label className="switch">
                          <input type="checkbox" checked={theme === "light"} onChange={toggleTheme}/>
                          <span className="slider"></span>
                        </label>
                    </p>
                </div>
            </div>
        </header>
        </>
    )
}