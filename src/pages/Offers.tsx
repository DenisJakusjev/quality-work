import React, { useEffect } from 'react'
import IPages from '../interfaces/pages';
const Offers:React.FunctionComponent<IPages> = (props) => {
    useEffect(() => {
        document.title = props.name;
      });
    return (
        <div>
            Offers
        </div>
    )
};

export default Offers;
