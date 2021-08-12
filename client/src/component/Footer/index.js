import React from 'react';
import '../Footer/style.css'

function Footer() {

    return (
        <footer className='bg-light text-center text-lg-start'>
            <div class="text-center p-3">
                © 2021 Copyright:
                <a class="text-dark" href="https://github.com/Wsamuell/health-wealth" target='_blank' >Project Repository</a>
            </div>
            <div className='authors-footer'>
                <div className="text-center">
                    <p className="">
                        Cade Ellsworth
                    </p>
                    <div className=''>
                        <a href="https://github.com/EEzycade" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="">
                        Natasha Harrison
                    </p>
                    <div className=''>
                        <a href="https://github.com/natasharrison" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="">
                        Elias Saunders
                    </p>
                    <div className=''>
                        <a href="https://github.com/eliassaunders" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="">
                        Samuel Odubamowo
                    </p>
                    <div className=''>
                        <a href="https://github.com/Wsamuell" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer;