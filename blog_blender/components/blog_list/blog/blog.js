// import React from 'react';

// export default function Blog(props) {
//     const handleBlogClick = () => {
//         if (props.onClick) {
//             props.onClick(); 
//         }
//     };

    // return (
    //     <div
    //         className="border rounded-lg shadow-md p-4 mb-4 w-80 h-40 flex bg-blue-50 cursor-pointer"
    //         onClick={handleBlogClick} 
    //     >
    //         {props.banner && <img src={props.banner} alt="Blog Cover" className="w-24 h-24 rounded mr-4" />}
    //         <img src={props.blog_photo} alt="Blog Cover" className="w-24 h-24 rounded mr-4" />
    //         <div>
    //             <h3 className="font-semibold">{props.group_name}</h3>
    //             <br /><hr />
    //             <p className="text-gray-600">{props.description}</p>
    //         </div>
    //         <div>
    //             {props.categories && props.categories.length > 0 && (
    //                 <ul className="mt-2">
    //                     {props.categories.map((category, index) => (
    //                         <li key={index} className="text-gray-500">{category}</li>
    //                     ))}
    //                 </ul>
    //             )}
    //         </div>
    //     </div>
    // );
// }
















import React from 'react';


export default function Blog(props) {
    const handleBlogClick = () => {
        if (props.onClick) {
            props.onClick(); 
        }
    };

    return (
        <div
            className="border rounded-lg shadow-md p-4 mb-4 w-80 h-40 flex bg-blue-50 cursor-pointer"
            onClick={handleBlogClick} 
        >
            {props.banner && <img src={props.banner} alt="Blog Cover" className="w-24 h-24 rounded mr-4" />}
            <img src={props.blog_photo} alt="Blog Cover" className="w-24 h-24 rounded mr-4" />
            <div>
                <h3 className="font-semibold">{props.group_name}</h3>
                <br /><hr />
                <p className="text-gray-600">{props.description}</p>
            </div>
            <div>
                {props.categories && props.categories.length > 0 && (
                    <ul className="mt-2">
                        {props.categories.map((category, index) => (
                            <li key={index} className="text-gray-500">{category}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

















