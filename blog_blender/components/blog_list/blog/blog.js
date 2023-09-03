import React from 'react';
import styles from '@/pages/profile/profile.module.css'



export default function Blog(props) {
    const handleBlogClick = () => {
        if (props.onClick) {
            props.onClick(); 
        }
    };
    const divStyle = {
        backgroundImage: `url(${props.blog_photo})`,
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
        // <div
        //     className="border rounded-lg shadow-md p-4 mb-4 w-80 h-40 flex bg-blue-50 cursor-pointer"
        //     onClick={handleBlogClick} 
        // >
        //     {props.banner && <img src={props.banner} alt="Blog Cover" className="w-24 h-24 rounded mr-4" />}
        //     <img src={props.blog_photo} alt="Blog Cover" className="w-24 h-24 rounded mr-4" />
        //     <div>
        //         <h3 className="font-semibold">{props.group_name}</h3>
        //         <br /><hr />
        //         <p className="text-gray-600">{props.description}</p>
        //     </div>
        //     <div>
        //         {props.categories && props.categories.length > 0 && (
        //             <ul className="mt-2">
        //                 {props.categories.map((category, index) => (
        //                     <li key={index} className="text-gray-500">{category}</li>
        //                 ))}
        //             </ul>
        //         )}
        //     </div>
        // </div>
        <div className={styles.cards} onClick={handleBlogClick}>
        <div className={styles.cardo} style={divStyle}>
          {/* You can remove the <img> tag */}
          <p style= {text}>{props.group_name}</p>
        </div>
      </div>
    );
}
















