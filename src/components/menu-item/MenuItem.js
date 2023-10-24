import React from "react";
import {useNavigate} from 'react-router';
import './MenuItem.scss'
const MenuItem = ({title,imageUrl,size,linkUrl}) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(linkUrl)} className={`${size ?size : ""} menu-item`} > 
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem;