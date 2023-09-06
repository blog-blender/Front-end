import React from 'react';
// import styles from '@/components/blog_list/home/homeeman.module.css'

// DELETE

export default function Blog(props) {
    let styles = props.styles
    const handleBlogClick = () => {
        if (props.onClick) {
            props.onClick(); 
        }
    };
    const divStyle = {
        backgroundImage: `url(${props.data.banner})`,
        backgroundSize: 'cover',
        // WebkitFilter: 'invert(8%) opacity(81%)',
        // filter: 'invert(8%) opacity(81%)',
      };
      const text = {
        fontSize: '25px',
        color: 'white',
        fontWeight: 'bold',
    
      };
      
    return (

        <div className={styles.cards} onClick={handleBlogClick}>
        <div className={styles.cardo} style={divStyle}>
          {/* You can remove the <img> tag */}
          <p style= {text}>{props.data.title}</p>
        </div>
      </div>
    );
}