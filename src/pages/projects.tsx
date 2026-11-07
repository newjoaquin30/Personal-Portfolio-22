import { IonIcon } from "@ionic/react";
import { chatboxEllipses, codeSlash, cog, exit, folderOpen, grid, medal, notifications, person, arrowForward, school, headset, cart, search, menu, close } from "ionicons/icons";
import "../css/projects.css"
import pfp from "../img/profile.png"
import umak from "../img/umak-logo.png"
import au from "../img/Arellano_University_New_Logo.png"
import discord from "../img/discord-logo-icon-editorial-free-vector.jpg"
import { useState, useEffect } from "react";

type IonIcons = {
  id: number
  name: string,
  date_accomplish: string,
  genre: string,
  proj_name: string,
  ionicon: string,
  link: string
}

type Backend = {
    id: number
    name: string
    date_accomplish: string
    genre: string
    proj_name: string
    image: string
    link: string
}

const ionicon: IonIcons[] = [
  { id: 1, name: "Buzzer Revamp", genre: "Music", date_accomplish: "October 24, 2026", proj_name: "Buzzer", ionicon: headset, link: "https://drive.google.com/file/d/1ifiPncppjsCCVNvf4kQkWqVkKOyYQvi_/view?usp=drive_link" },
  { id: 2, name: "St. Joaquin University", genre: "Education", date_accomplish: "April 25, 2026", proj_name: "St. Joaquin University", ionicon: school, link: "https://drive.google.com/file/d/1yqKXmgi3anl8c7mYUTGXXeZJ--__RAMN/view?usp=drive_link" },
  { id: 3, name: "Arellano University", genre: "Education", date_accomplish: "November 30, 2025", proj_name: "Arellano University", ionicon: school, link: "https://drive.google.com/file/d/13fY1P5_kfDOGZ68F1wvvH_EOMbo5uBgR/view?usp=drive_link" },
  { id: 4, name: "Car Sport", genre: "Shopping", date_accomplish: "April 7, 2026", proj_name: "Car Sport", ionicon: cart, link: "https://drive.google.com/file/d/1SNPyuURYqzXnxEgACZyzZTe0zupA6YdG/view?usp=drive_link" },
  { id: 5, name: "Personal Portfolio", genre: "All", date_accomplish: "September 26, 2025", proj_name: "Personal Portfolio", ionicon: person, link: "https://drive.google.com/file/d/1SKeCbXbzCmUhBoFLtFJUXUprzZ48WkPq/view?usp=drive_link" },
]

const backend: Backend[] = [
  { id: 1, name: "UMAK Website Recreation", genre: "Education", date_accomplish: "October 14, 2026", proj_name: "University of Makati", image: umak, link: "https://drive.google.com/file/d/1fStyvveAhW1Ipj6wU2kBu2cCGVxpNbxC/view?usp=sharing" },
  { id: 2, name: "Discord", genre: "All", date_accomplish: "July 3, 2026", proj_name: "Discord", image: discord, link: "https://drive.google.com/file/d/1P1LqPkE9ZK54IHHJ2i7DqIveX0sIIfZR/view?usp=drive_link" },
  { id: 3, name: "Arellano University Recreation", genre: "Education", date_accomplish: "June 18, 2026", proj_name: "Arellano University", image: au, link: "https://drive.google.com/file/d/1Ieh9Mkw4QRAu25iuUBuUt8wP6rP0Ha8P/view?usp=drive_link" },
]

export default function projects(){
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
            <p className="current"><a href="/projects/my/"><IonIcon icon={folderOpen} className="nav-icon"/>Projects</a></p>
            <a href="/languages/my/"><IonIcon icon={codeSlash} className="nav-icon"/>Languages</a>
            <a href="/certificates/my/"><IonIcon icon={medal} className="nav-icon"/>Certificates</a>

            <div className="line"></div>
            <h3 className="configs">Configuration</h3>
            <a href="/settings"><IonIcon icon={cog} className="nav-icon"/>Settings</a>

            <div className="logout">
                <a href="/sign-in"><IonIcon icon={exit} className="icon"/> Logout</a>
            </div>
        </aside>

        <header className="projects-container">
            <div className="projects-contents">
                <h2 className="proj-title">Projects</h2>

                <div className="frontend-projs">
                    <h3 className="front-title">Frontend Projects</h3>
                    
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
                              <a href={i.link}>View Project <IonIcon icon={arrowForward} className='forward'/></a>
                            </div>
                        ))}
                        <a href="https://drive.google.com/drive/folders/1hys9tGiEzhTIWgZBWmj6g47QGVl9RJYJ?usp=drive_link" className="sees">View More <IonIcon icon={arrowForward} /></a>
                    </div>
                </div>
            </div>

            <div className="backend-section">
                <h2 className="back-title">Backend Projects</h2>

                <div className="backend">
                    {backend.map(b => (
                        <div className="card" key={b.id}>
                            <div className="name">
                              <h3 className="umak"><img src={b.image} alt="" />{b.proj_name}</h3>
                            </div>

                            <div className="line"></div>
                            <h2 className="title">{b.name}</h2>
                            <p className="text">Date Accomplished: {b.date_accomplish}</p>
                            <p className="genre">Genre: <span className="gen">{b.genre}</span></p>
                            <a href={b.link} className="view">View Project <IonIcon icon={arrowForward} className='forward'/></a>
                        </div>
                    ))}
                </div>
            </div>
        </header>
        </>
    )
}