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
                <div className="sm:w-2/3 text-center py-6">
                    <p className=" font-bold mb-2">
                        Cade Ellsworth
                    </p>
                    <div className='me-4 text-reset'>
                        <a href="https://github.com/EEzycade" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
                <div className="sm:w-2/3 text-center py-6">
                    <p className=" font-bold mb-2">
                    Natasha Harrison
                    </p>
                    <div className='me-4 text-reset'>
                        <a href="https://github.com/natasharrison" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
                <div className="sm:w-2/3 text-center py-6">
                    <p className=" font-bold mb-2">
                        Elias Saunders
                    </p>
                    <div className='me-4 text-reset'>
                        <a href="https://github.com/eliassaunders" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>                <div className="sm:w-2/3 text-center py-6">
                    <p className=" font-bold mb-2">
                        Samuel Odubamowo
                    </p>
                    <div className='me-4 text-reset'>
                        <a href="https://github.com/Wsamuell" target="_blank"> <img className='icon' src={require("../../assets/img/github.png").default} alt='github-icon' /></a>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer;