import React, { useEffect } from 'react'
import IPages from '../interfaces/pages';
import "./mainPage.css"
const Home:React.FunctionComponent<IPages> = (props) => {
    useEffect(() => {
        document.title = props.name;
      });
    return (

        <div className="main-wrapper">
            ItsAHomePAge
        </div>
    )
};

export default Home;
