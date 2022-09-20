import React  from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='logo-left'><span className='logo'>QL</span></div>
                    <div className='menu-center'>
                        <ul className='menu-list-center'>
                            <li className='menu-item'>
                                <a href="/#">Home</a>

                            </li>
                            <li className='menu-item'>
                                <a href="/#">About</a>
                                                    </li>
                            <li className='menu-item'>
                                <a href="/#">Photos</a>
                         </li>
                            <li className='menu-item'>
                                <a href="/#">Pages</a>
                                <span className='btn-arrow-down'>
                                    <FontAwesomeIcon icon={faChevronDown} color="#fff" />
                                </span>                            </li>
                            <li className='menu-item'>
                                <a href="/#">Albums</a>
                                <span className='btn-arrow-down'>
                                    <FontAwesomeIcon icon={faChevronDown} color="#fff" />
                                </span>                            </li>
                            <li className='menu-item'>
                                <a href="/#">Contact</a>
                                <span className='btn-arrow-down'></span>
                            </li>
                        </ul>
                    </div>
                    <div className='menu-right'>
                        <span className='btn-show-menu-right'></span>
                        <ul className='menu-list-right'>
                            <li className='menu-item'>Home 1</li>
                            <li className='menu-item'>About 1</li>
                            <li className='menu-item'>Photos 1</li>
                            <li className='menu-item'>Contact 1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header