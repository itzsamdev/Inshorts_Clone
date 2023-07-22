import React from 'react'

import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <span className="name">
                Inshorts Clone made by - {" "}
                <a href="https://www.linkedin.com/in/itzsamdev" target='_blank'>
                    Saiyam Jain
                </a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a href="https://www.instagram.com/___sam.yy__/" target='_blank'>
                    <i class="fa-brands fa-instagram fa-2xl"></i>
                </a>
                <a href="https://www.instagram.com/___sam.yy__/" target='_blank'>
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                <a href="https://www.instagram.com/___sam.yy__/" target='_blank'>
                    <i class="fa-brands fa-twitter fa-2xl"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer