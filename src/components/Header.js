import React from 'react'
import '../styles/Header.css'
import {FiMoreVertical} from 'react-icons/fi'
import {AiFillCaretDown} from 'react-icons/ai'
const Header = () => {
  return (
    <div className="header">
        <img src="./images/giphyLogo.png" alt="" />
        <div className="menu">
            <div className="button_wrapper reactions">
                <div className="menu_button">
            <h2>Reactions</h2>
            </div>
            </div>
            <div className="button_wrapper enter">
            <div className="menu_button">
            <h2>Entertainment</h2>
            </div>
            </div>
            <div className="button_wrapper sports">
            <div className="menu_button">
            <h2>Sports</h2>
            </div>
            </div>
            <div className="button_wrapper stickers">
            <div className="menu_button">
            <h2>Stickers</h2>
            </div>
            </div>
            <div className="button_wrapper artist">
            <div className="menu_button">
            <h2>Artist</h2>
            </div>
            </div>
            <div className="button_wrapper">
                <div className="menu_button">
            <FiMoreVertical size={20}/>
            </div>
            </div>
        </div>
        <div className="button">
            <button>Upload</button>
        </div>
        <div className="button">
            <button>Create</button>
        </div>
        <div className="profile">
            <img src="https://media.giphy.com/avatars/default5/80h.gif" alt="" />
            <p>User</p>
            <AiFillCaretDown style={{marginRight:10}} size={20}/>
            
        </div>

    </div>
  )
}

export default Header