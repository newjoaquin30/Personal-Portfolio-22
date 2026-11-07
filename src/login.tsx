import { IonIcon } from "@ionic/react";
import "./css/login.css"
import { person } from "ionicons/icons";

export default function login(){
    function dashboardPage(): void{
        window.location.href = "/dashboard/my/";
    }
    return(
        <>
        <div className="login-container">
            <div className="form">
                <div className="form-page">
                    <h3 className="logo-icon"><IonIcon icon={person} className="icon"/>Joaquin Riosa</h3>
                    <h2 className="welcome">Welcome, dear user.</h2>
                    <p className="text">Sign in to start seeing my personality.</p>
                    <label htmlFor="email">Email: </label><br />
                    <input type="text" name="email" id="email" placeholder="example@gmail.com"/><br />
                    <label htmlFor="password">Password: </label><br />
                    <input type="password" name="password" id="password" /><br />

                    <div className="forgots">
                        <p className="rem"><input type="checkbox" name="check" id="checkbox" />Remember me</p>
                        <p className="acc"><a href="">Forgot Password?</a></p>
                    </div>
                    
                    <button className="signin" onClick={dashboardPage}>Sign in</button>
                    <p className="dont">Don't have an account? <a href="/sign-up">Sign up</a></p>
                </div>

                <aside className="text-thing">
                    <div className="text-1">
                        <h3 className="message">Create / Build / Aspire</h3>
                        <h2 className="logo-name"><IonIcon icon={person} className="icon"/>Joaquin Riosa</h2>
                        <h3 className="text">A full portfolio website I've made in one.</h3>
                    </div>
                </aside>
            </div>
        </div>
        </>
    )
}