import { IonIcon } from "@ionic/react";
import "./css/register.css"
import { person } from "ionicons/icons";

export default function register(){
    return(
        <>
        <div className="login-container">
            <div className="form" id="form-1">
                <aside className="text-thing" id="text-thing">
                    <div className="text-1">
                        <h3 className="message">Create / Build / Aspire</h3>
                        <h2 className="logo-name"><IonIcon icon={person} className="icon"/>Joaquin Riosa</h2>
                        <h3 className="text">A full portfolio website I've made in one.</h3>
                        <p className="exist">Already have an account? <a href="/sign-in">Sign in</a></p>
                    </div>
                </aside>

                <div className="form-page" id="form-page">
                    <h3 className="logo-icon"><IonIcon icon={person} className="icon"/>Joaquin Riosa</h3>
                    <h2 className="welcome">Hello, dear user 👋</h2>
                    <p className="text">Sign up to start seeing my personality.</p>
                    <label htmlFor="email">First Name: </label><br />
                    <input type="text" name="fname" id="email" /><br />
                    <label htmlFor="email">Middle Name: </label><br />
                    <input type="text" name="mname" id="email" /><br />
                    <label htmlFor="email">Last Name: </label><br />
                    <input type="text" name="lname" id="email" /><br />
                    <label htmlFor="email">Email: </label><br />
                    <input type="text" name="email" id="email" placeholder="example@gmail.com"/><br />
                    <label htmlFor="password">Password: </label><br />
                    <input type="password" name="password" id="password" /><br />
                    <label htmlFor="password">Confirm Password: </label><br />
                    <input type="password" name="password" id="password" /><br />

                    <div className="forgots">
                        <p className="rem"><input type="checkbox" name="check" id="checkbox" />I agree to the terms & conditions.</p>
                    </div>
                    
                    <button className="signin">Sign up</button>
                </div>
            </div>
        </div>
        </>
    )
}