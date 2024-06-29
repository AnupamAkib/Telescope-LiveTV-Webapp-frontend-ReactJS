import React from "react";

function About(){
    return (
        <div className="container"><br/>
            <h1 align="center">About Telescope LIVE</h1><hr/>
            Telescope live TV is an application that allows you to watch TV live. This application is completely free & not developed for business purpose.
            This application regularly fetch live TVs embeded link that available in YouTube. 
            This app is a YouTube based live TV software. If any channel is not live in YouTube, this app will not be able to fetch & show the channel for you.
            Currently this application is available for both <b>Web</b> and <b>Android</b>. For accessing all the channels, user must login to the system.

            <br/><br/>

            <div className="col-5" style={{float:"left"}}>
                <table width="100%" cellPadding={5} border="0">
                    <tr>
                        <th><u>Technologies used</u></th>
                        <th><u>Links</u></th>
                    </tr>
                    <tr>
                        <td>
                            <b># Backend:</b><br/>
                            <ul>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Mongoose</li>
                                <li>Puppeteer</li>
                                <li>Chromium Engine</li>
                                <li>JWT Authentication</li>
                                <li>Docker</li>
                            </ul>

                            <b># Web Frontend:</b><br/>
                            <ul>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Bootstraps</li>
                                <li>CSS</li>
                                <li>Material UI</li>
                            </ul>

                            <b># Android App:</b><br/>
                            <ul>
                                <li>Java</li>
                                <li>Android Studio</li>
                            </ul>
                        </td>
                        <td valign="top">
                            <b># Github Repository</b>
                            <ul>
                                <li>
                                    <a href="https://github.com/AnupamAkib/Telescope-LiveTV-backend-NodeJS-Docker" target="_blank">Backend</a>
                                </li>
                                <li>
                                    <a href="https://github.com/AnupamAkib/Telescope-LiveTV-Webapp-frontend-ReactJS" target="_blank">Frontend</a>
                                </li>
                                <li>
                                    <a href="https://github.com/AnupamAkib/Telescope-LiveTV-Application-Android-Java" target="_blank">Android</a>
                                </li>
                            </ul>

                            <b># Downlaods</b>
                            <ul>
                                <li>
                                    <a href="https://drive.google.com/drive/folders/13dBuln3fYhLGrOB7TgWzZCJqo6RZRJpK?usp=drive_link" target="_blank">Android app (APK)</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="col-7" style={{float:"left"}}>
                <h3><u>Contributors:</u></h3>
                <ol style={{fontSize:"large"}}>
                    <li>
                        <b>Mir Anupam Hossain Akib</b><br/>
                        Jr. Software Engineer, WellDev Ltd.<br/>
                        <a href = "https://www.linkedin.com/in/anupamakib/" target="_blank" style={{textDecoration:"none", color:"black", marginRight:"10px", fontSize:"21px"}}>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href = "https://github.com/AnupamAkib/" target="_blank" style={{textDecoration:"none", color:"black", marginRight:"10px", fontSize:"21px"}}>
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default About;