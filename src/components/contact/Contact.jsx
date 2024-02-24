import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import {themeContext} from '../../context';
import { useContext } from 'react';

export default function Contact() {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function changeName(e) {
        setName(e.target.value);
    }
    function changeEmail(e) {
        setEmail(e.target.value);
    }
    function changeMessage(e) {
        setMessage(e.target.value);
    }

    function sendEmail(e) {
        e.preventDefault();
        let data = {
            user_name: name,
            user_email: email,
            message: message
        }
        emailjs.send("service_hczqhht", "template_m32dh1v", data, "DYzmXxlEA4ZQGcVol");

        setName("");
        setEmail("");
        setMessage("");

        toast.success("Message sent successfuly, Thank you for contacting me");
    };
    

    return (
        <>
        <Toaster/>
        <div id='Contact' className="contact-form">
            <div className="w-left">
                <div className="awsome">
                    <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form onSubmit={sendEmail}>
                    <input type="text"  value={name} onChange={changeName} className='user' placeholder='Name' />
                    <input type="email"  value={email} onChange={changeEmail} className='user' placeholder='Email' />
                    <textarea  className='user' value={message} onChange={changeMessage} placeholder='Message' />
                    <input type="submit" value="send" className='button' />
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
        </>
    )
}
