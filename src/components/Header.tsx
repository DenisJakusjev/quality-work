import React from 'react'
import "./footerHeader.css"
import PictureLogo from "../pictures/LogoPicture.jpg"
import { useHistory } from 'react-router'
import IPages from '../interfaces/pages'

const Header: React.FunctionComponent<IPages> = (props) => {
    const history = useHistory();
    console.log(props.name)
    return (
        <div className="hd-wrapper">
            <img src={PictureLogo} alt="logoPic" className="hd-pictureLogo" />
            <div className={"hd-linkWrapper"}>
                <p className={props.name==="Quality Work"? "hd-navLink hd-navLinkActive": "hd-navLink"} onClick={() => history.push("/")}>Home</p>
                <p className={props.name==="Offers"? "hd-navLink hd-navLinkActive": "hd-navLink"}  onClick={() => history.push("/offers")}>Offers</p>
                <p className={props.name==="Contacts"? "hd-navLink hd-navLinkActive": "hd-navLink"}  onClick={() => history.push("/contacts")}>Contacts</p>
            </div>
        </div>
    )
}

export default Header
