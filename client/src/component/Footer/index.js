import React from 'react';
import '../Footer/style.css'

function Footer() {

    return (
        <footer className='bg-light text-center text-lg-start'>
            <div className="text-center p-3">
                © 2021 Copyright:
                <a className="text-dark" href="https://github.com/Wsamuell/health-wealth" target='_blank' >Project Repository</a>
            </div>
            <div className='authors-footer'>
                <div className="each-dev">
                    <p className="">
                        Cade Ellsworth
                    </p>
                    <div className='icon-stuff'>
                        <a href="https://github.com/EEzycade" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                        <a href="https://www.linkedin.com/in/cade-ellsworth-35294b200/" target="_blank"><img className='icon' src={require("../../assets/img/linkedin.png").default} alt='linkedin-icon' /></a>
                        {/* <a href="mailto:cade.ellsworth0121@gmail.com"><img className='icon' src={require("../../assets/img/gmail.png").default} alt='gmail-icon' /></a> */}

                    </div>
                </div>
                <div className="each-dev">
                    <p className="">
                        Natasha Harrison
                    </p>
                    <div className='icon-stuff'>
                        <a href="https://github.com/natasharrison" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                        <a href="https://www.linkedin.com/in/natasharrison/" target="_blank"><img className='icon' src={require("../../assets/img/linkedin.png").default} alt='linkedin-icon' /></a>
                        {/* <a href="mailto:natasharrison@gmail.com"><img className='icon' src={require("../../assets/img/gmail.png").default} alt='gmail-icon' /></a> */}
                    </div>
                </div>
                <div className="each-dev">
                    <p className="">
                        Elias Saunders
                    </p>
                    <div className='icon-stuff'>
                        <a href="https://github.com/eliassaunders" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                        <a href="https://www.linkedin.com/in/elias-saunders-5a0389208/" target="_blank"><img className='icon' src={require("../../assets/img/linkedin.png").default} alt='linkedin-icon' /></a>
                        {/* <a href="mailto:eliasashtonsaunders@gmail.com"><img className='icon' src={require("../../assets/img/gmail.png").default} alt='gmail-icon' /></a> */}
                    </div>
                </div>
                <div className="each-dev">
                    <p className="">
                        Samuel Odubamowo
                    </p>
                    <div className='icon-stuff'>
                        <a href="https://github.com/Wsamuell" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                        <a href="https://www.linkedin.com/in/samuel-odubamowo-567229207/" target="_blank"><img className='icon' src={require("../../assets/img/linkedin.png").default} alt='linkedin-icon' /></a>
                        {/* <a href="mailto:wemsamuel@gmail.com"><img className='icon' src={require("../../assets/img/gmail.png").default} alt='gmail-icon' /></a> */}

                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer;