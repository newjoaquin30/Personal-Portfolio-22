import { arrowForward, close, headset, logoCss3, logoFacebook, logoHtml5, logoInstagram, logoJavascript, logoLinkedin, logoReact, logoWhatsapp, menu, person, school } from 'ionicons/icons'
import "./css/App.css"
import { IonIcon } from '@ionic/react'
import bg from "./img/image-removebg-preview.png"
import pfp from "./img/profile.png"
import ts from "./img/ts-logo-256.png"
import { useEffect } from 'react'
import umak from "./img/umak-logo.png"
import au from "./img/Arellano_University_New_Logo.png"
import carsport from "./img/logo.png"
import html from "./certificates/Copy of certificate - HTML (1).png"
import css from "./certificates/certificate - CSS (1).png"
import js from "./certificates/certificate - JavaScript (1).png"
import typescript from "./certificates/certificate - TypeScript (1).png"
import loops from "./certificates/certificate - Iteration and Loops in TypeScript.png"

type Projects = {
  id: number,
  name: string,
  date_accomplished: string,
  genre: string,
  proj_name: string,
  image: string,
  link: string
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

type Certificates = {
  id: number,
  name: string,
  source: string,
  link: string,
  image: string
}

const project: Projects[] = [
  { id: 1, name: "UMAK Website Recreation", genre: "Education", date_accomplished: "October 14, 2026", proj_name: "University of Makati", image: umak, link: "https://drive.google.com/file/d/1fStyvveAhW1Ipj6wU2kBu2cCGVxpNbxC/view?usp=sharing" },
  { id: 2, name: "Arellano University Replica", genre: "Education", date_accomplished: "November 30, 2025", proj_name: "Arellano University", image: au, link: "https://drive.google.com/file/d/13fY1P5_kfDOGZ68F1wvvH_EOMbo5uBgR/view?usp=drive_link" },
  { id: 3, name: "Car Sport", genre: "Shopping", date_accomplished: "April 7, 2026", proj_name: "Car Sport", image: carsport, link: "https://drive.google.com/file/d/1SNPyuURYqzXnxEgACZyzZTe0zupA6YdG/view?usp=drive_link" },
]

const ionicon: IonIcons[] = [
  { id: 1, name: "Buzzer Revamp", genre: "Music", date_accomplish: "October 24, 2026", proj_name: "Buzzer", ionicon: headset, link: "https://drive.google.com/file/d/1ifiPncppjsCCVNvf4kQkWqVkKOyYQvi_/view?usp=drive_link" },
  { id: 2, name: "St. Joaquin University", genre: "Education", date_accomplish: "April 25, 2026", proj_name: "St. Joaquin University", ionicon: school, link: "https://drive.google.com/file/d/1yqKXmgi3anl8c7mYUTGXXeZJ--__RAMN/view?usp=drive_link" },
]

const certs: Certificates[] = [
  { id: 1, name: "HTML Certificate", source: "Codesignal", link: "https://codesignal.com/learn/courses/introduction-to-html", image: html },
  { id: 2, name: "CSS Certificate", source: "Codesignal", link: "https://codesignal.com/learn/courses/basics-of-css", image: css },
  { id: 3, name: "JAVASCRIPT Certificate", source: "Codesignal", link: "https://codesignal.com/learn/courses/introduction-to-javascript-for-front-end-engineers", image: js },
  { id: 4, name: "TypeScript Certificate", source: "Codesignal", link: "https://codesignal.com/learn/paths/introduction-to-typescript-for-beginners", image: typescript },
  { id: 5, name: "Iteration and Loops in TypeScript Certificate", source: "Codesignal", link: "https://codesignal.com/learn/courses/iterations-and-loops-in-typescript", image: loops },
]

function App() {
  useEffect(() => {
    const nav: HTMLElement | null = document.getElementById("navi");
    function scrollNav(): void{
    if(nav){
      if(window.scrollY > 60){
        nav.classList.add("scroll");
      }else{
        nav.classList.remove("scroll");
      }
    }
  }

  window.addEventListener("scroll", scrollNav)
  })

  function openSideNav(): void {
    const navigator: HTMLElement | null = document.getElementById("links");
    if(navigator){
      navigator.style.left = "1px";
    }
  }

  function closeSideNav(): void {
    const navigator: HTMLElement | null = document.getElementById("links");
    if(navigator){
      navigator.style.left = "-755px";
    }
  }
  return (
    <>
    <nav className="navigator" id='navi'>
      <div className="nav-logo">
        <h2 className="logo"><IonIcon icon={person} className='icon'/>Joaquin Riosa</h2>
        <IonIcon icon={menu} className='menu' onClick={openSideNav}/>
      </div>

      <ul className="nav-links" id='links'>
        <IonIcon icon={close} className='close' onClick={closeSideNav}/>
        <li className="links"><a href="/main-page">Home</a></li>
        <li className="links"><a href="/projects/my/">Projects</a></li>
        <li className="links"><a href="/certificates/my/">Certificates</a></li>
        <li className="links"><a href="/langs/my/">Languages</a></li>
        <li className="links"><a href="/contact">Contact</a></li>
        <li className="links"><a href="/sign-in">Sign in</a></li>
        <li className="links"><a href="/sign-up">Sign up</a></li>
      </ul>
    </nav>

    <header className="main-container">
      <div className="main-contents">
        <h2 className="title" data-aos="fade-up" data-aos-duration="1400">Joaquin Riosa</h2>
        <h4 className="sub" data-aos="fade-up" data-aos-duration="1550">Frontend Developer</h4>
        <p className="text" data-aos="fade-up" data-aos-duration="1600">Hi, im currently a frontend developer with 1 year of experience and a current student.</p>
        <div className="social" data-aos="fade-up" data-aos-duration="1700">
          <a href=""><IonIcon icon={logoFacebook} className='fb'/></a>
          <a href=""><IonIcon icon={logoInstagram} className='ins'/></a>
          <a href=""><IonIcon icon={logoLinkedin} className='in'/></a>
        </div>
      </div>
      <img src={bg} alt="" data-aos="fade-up" data-aos-duration="1650"/>
    </header>

    <div className="languages">
      <div className="card">
        <h2 className="html">HTML</h2>
      </div>
      <div className="card">
        <h2 className="css">CSS</h2>
      </div>
      <div className="card">
        <h2 className="js">JAVASCRIPT</h2>
      </div>
      <div className="card">
        <h2 className="react">REACT</h2>
      </div>
      <div className="card">
        <h2 className="ts">TYPESCRIPT</h2>
      </div>
    </div>

    <section className="about-container">
      <div className="about-contents">
        <h2 className="about-title">About Me</h2>
        <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quaerat eos harum ratione, eum quasi necessitatibus unde quis quos aperiam 
          reiciendis dolor neque aut earum sunt quibusdam quam voluptate ea aliquid.</p>
      </div>
      <div className="image">
        <img src={pfp} alt="Profile of me" />
      </div>
    </section>

    <section className="about-me-container">
      <div className="about-me-contents">
        <div className="langs">
          <div className="card">
            <IonIcon icon={logoHtml5} className='icon'/>
          </div>
          <div className="card">
            <IonIcon icon={logoCss3} className='icon'/>
          </div>
          <div className="card">
            <IonIcon icon={logoJavascript} className='icon'/>
          </div>
          <div className="card">
            <IonIcon icon={logoReact} className='icon'/>
          </div>
          <div className="card">
            <img src={ts} alt="TypeScript" />
          </div>
        </div>

        <div className="text-1">
          <h2 className="used">What I use?</h2>
          <p className="text">I use VSCode as my primary IDE and programming languages I use are 
            HTML, CSS, JS, REACT, and TYPESCRIPT.
          </p>
        </div>
      </div>

      <div className="project-contents">
        <h2 className="proj-title">My Projects</h2>

          <div className="projects">
            {project.map(p => (
            <div className="card" key={p.id}>
              <div className="name">
                <img src={p.image} alt="" />
                <h3 className="umak">{p.proj_name}</h3>
              </div>

              <div className="line"></div>
              <h2 className="title">{p.name}</h2>
              <p className="text">Date Accomplished: {p.date_accomplished}</p>
              <p className="genre">Genre: <span className="gen">{p.genre}</span></p>
              <a href={p.link} className="view">View Project <IonIcon icon={arrowForward} className='forward'/></a>
            </div>
            ))}
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
            <a href="https://drive.google.com/drive/folders/1G2Se_ZcVvySe0T7D-OfxvQFU1oEIRc9-?usp=drive_link">View All Projects <IonIcon icon={arrowForward} className='forward-1'/></a>
          </div>
      </div>

      <div className="certificates-contents">
        <h2 className="cert-title">Certificates</h2>

        <div className="certs">
          {certs.map(c => (
            <div className="card" key={c.id}>
              <div className="image">
                <img src={c.image} alt="" />
              </div>

              <h3 className="name">{c.name}</h3>
              <h3 className="source">Source: <a href={c.link}>{c.source}</a></h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="other-container">
      <h2 className="logo-name"><IonIcon icon={person} className='logo'/>Joaquin Riosa</h2>
      <p className="follow">Follow Me!</p>
      <div className="links">
        <a href=""><IonIcon icon={logoFacebook} className='logo'/> Facebook</a>
        <a href=""><IonIcon icon={logoLinkedin} className='logo'/> Linkedin</a>
        <a href=""><IonIcon icon={logoWhatsapp} className='logo'/> Whatsapp</a>
      </div>

      <div className="nav-link">
        <div className="card">
          <h3 className="useful">Useful Links</h3>
          <a href="/dashboard/my/">Dashboard</a>
          <a href="/projects/my/">Projects</a>
          <a href="/certificates/my/">Certificates</a>
          <a href="/profile/my/">Profile</a>
        </div>
        <div className="card">
          <h3 className="useful">About me</h3>
          <a href="">Background</a>
          <a href="">Facts</a>
          <a href="">Hobbies</a>
          <a href="">Profile</a>
        </div>
        <div className="card">
          <h3 className="useful">Contact me</h3>
          <a href="">joaquinrafael30@gmail.com</a>
          <a href="">joaquindeveloperwork@gmail.com</a>
          <a href="">0968 215 9184</a>
        </div>
      </div>

      <div className="line"></div>

      <div className="copyright">
        <a href="">Copyright ©2026 Joaquin Riosa.</a>

        <div className="terms">
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="https://www.reddit.com/r/UI_Design/comments/hngthf/personal_portfolio_web_design_landing_page_concept/">Reddit (Reference)</a>
        </div>
      </div>
    </footer>

    </>
  )
}

export default App
