import { IonIcon } from "@ionic/react";
import "../css/dashboard.css"
import { chatboxEllipses, codeSlash, cog, exit, folderOpen, grid, medal, notifications, person, arrowForward, school, headset, cart, search, menu, close } from "ionicons/icons";
import pfp from "../img/profile.png"
import { useState, useEffect } from "react";

type Stuff = {
    id: number,
    name: string,
    number: number
}

type IonIcons = {
  id: number
  name: string,
  date_accomplish: string,
  genre: string,
  proj_name: string,
  ionicon: string,
  link: string
}

const stuffs: Stuff[] = [
    { id: 1, name: "Certificates", number: 6 },
    { id: 2, name: "Projects", number: 63 },
    { id: 3, name: "Frontend Projects", number: 60 },
    { id: 4, name: "Fullstack Projects", number: 3 },
]

const ionicon: IonIcons[] = [
  { id: 1, name: "Buzzer Revamp", genre: "Music", date_accomplish: "October 24, 2026", proj_name: "Buzzer", ionicon: headset, link: "https://drive.google.com/file/d/1ifiPncppjsCCVNvf4kQkWqVkKOyYQvi_/view?usp=drive_link" },
  { id: 2, name: "St. Joaquin University", genre: "Education", date_accomplish: "April 25, 2026", proj_name: "St. Joaquin University", ionicon: school, link: "https://drive.google.com/file/d/1yqKXmgi3anl8c7mYUTGXXeZJ--__RAMN/view?usp=drive_link" },
  { id: 3, name: "Arellano University", genre: "Education", date_accomplish: "November 30, 2025", proj_name: "Arellano University", ionicon: school, link: "https://drive.google.com/file/d/1yqKXmgi3anl8c7mYUTGXXeZJ--__RAMN/view?usp=drive_link" },
  { id: 4, name: "Car Sport", genre: "Shopping", date_accomplish: "April 7, 2026", proj_name: "Car Sport", ionicon: cart, link: "https://drive.google.com/file/d/1yqKXmgi3anl8c7mYUTGXXeZJ--__RAMN/view?usp=drive_link" },
  { id: 5, name: "Personal Portfolio", genre: "All", date_accomplish: "September 27, 2025", proj_name: "Personal Portfolio", ionicon: person, link: "https://drive.google.com/file/d/1yqKXmgi3anl8c7mYUTGXXeZJ--__RAMN/view?usp=drive_link" },
]

export default function dashboard(){
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
            <p className="current"><a href="/dashboard/my/"><IonIcon icon={grid} className="nav-icon"/>Overview</a></p>
            <a href="/projects/my/"><IonIcon icon={folderOpen} className="nav-icon"/>Projects</a>
            <a href="/languages/my/"><IonIcon icon={codeSlash} className="nav-icon"/>Languages</a>
            <a href="/certificates/my/"><IonIcon icon={medal} className="nav-icon"/>Certificates</a>

            <div className="line"></div>
            <h3 className="configs">Configuration</h3>
            <a href="/settings"><IonIcon icon={cog} className="nav-icon"/>Settings</a>

            <div className="logout">
                <a href="/sign-in"><IonIcon icon={exit} className="icon"/> Logout</a>
            </div>
        </aside>

        <header className="dashboard-container">
            <div className="dashboard-contents">
                <h2 className="dashboard-title">Dashboard Overview</h2>
                <p className="text">See what I have here.</p>

                <div className="stuff-cards">
                    {stuffs.map(s => (
                        <div className="card" key={s.id}>
                            <p className="title">{s.name}</p>
                            <h2 className="no">{s.number}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="frontend-section">
                <h2 className="frontend-title">Frontend Projects</h2>

                <div className="frontend">
                    {ionicon.map(i => (
                        <div className="card" key={i.id}>
                          <div className="name">
                            <h3 className="umak" id='buzzer'><IonIcon icon={i.ionicon} className='headset'/>{i.proj_name}</h3>
                          </div>
        
                          <div className="line"></div>
                          <h2 className="title">{i.name}</h2>
                          <p className="text">Date Accomplished: {i.date_accomplish}</p>
                          <p className="genre">Genre: <span className="gen">{i.genre}</span></p>
                          <a href={i.link} className="view">View Project <IonIcon icon={arrowForward} className='forward'/></a>
                        </div>
                    ))}
                </div>
            </div>
        </header>
        </>
    )
}