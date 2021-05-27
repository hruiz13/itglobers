import React, { useState } from 'react'
import './Navbar.css'
import { menu } from '../../data/menu';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = ({ setMethod }) => {
    const [navBar, setNavBar] = useState(false)
    return (
        <>
            {/* navbar for desktop */}
            <div className="navbar animate__animated animate__fadeIn">
                <ul>
                    {
                        menu.map(item => {
                            return (
                                <li key={item.id} onClick={() => setMethod(item.name)}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* navbar for movile */}
            <div className="navbarResponsive animate__animated animate__fadeIn">
                <div className="navbarIcon" onClick={() => setNavBar(!navBar)}>
                    {
                        navBar ?
                            <AiOutlineClose style={{ fontSize: "24px" }} />
                            :
                            <AiOutlineMenu style={{ fontSize: "24px" }} />
                    }
                </div>
                {
                    navBar &&

                    <div className="navbarLateral">
                        <div className="items">
                            <ul>
                                {
                                    menu.map(item => {
                                        return (
                                            <li key={item.id} onClick={() => setMethod(item.name)}>
                                                {item.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}
