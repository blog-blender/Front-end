import React from 'react';
import styles from '@/pages/profile/profile.module.css'



export default function Blog(props) {
    const handleBlogClick = () => {
        if (props.onClick) {
            props.onClick(); 
        }
    };
    const divStyle = {
        backgroundImage: `url(http://res.cloudinary.com/dhaem8m4p/${props.data.banner})`,
        backgroundSize: 'cover',
        WebkitFilter: 'invert(8%) opacity(81%)',
        filter: 'invert(8%) opacity(81%)',
      };
      const text = {
        
        color: 'white',
        fontWeight: 'bold',
        zIndex: 1,    
      };
      
    return (
        
        <div className={styles.cards} onClick={handleBlogClick}>
        <div className={styles.cardo} style={divStyle}>
          <p style= {text}>{props.data.title}</p>
        </div>
      </div>
    );
}
















