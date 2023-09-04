// import styles from './about.module.css'



// export default function Aboutus() {



//     return (
//         <div className={styles.container}>
//             {Array(6).fill().map((_, index) => (
//                 <div key={index} className={styles.propertycard}>
//                     <a href="#">
//                         <div className={styles.propertyimage}>
//                             <div className={styles.propertyimagetitle}></div>
//                         </div>
//                     </a>
//                     <div className={styles.propertydescription}>
//                         <h5>Card Title</h5>
//                         <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
//                     </div>
//                     <a href="#">
//                         <div className={styles.propertysocialicons}></div>
//                     </a>
//                 </div>
//             ))}






//         </div>

//     )
// }




import React from 'react';
import styles from './about.module.css'; // Import your CSS module here

const cardData = [
  {
    id: 1,
    imageUrl: 'image1.jpg',
    title: 'Name :Eman Obeidat',
    description: 'Background: Web Developer and Biomedical engineer',
    
  },
  {
    id: 2,
    imageUrl: 'image2.jpg',
    title: 'Name :Ibraheem Areeda',
    description: 'Description for Card 2',
  },
  {
    id: 3,
    imageUrl: 'image3.jpg',
    title: 'Name :Feras Awdallah',
    description: 'Description for Card 3',
  },
  {
    id: 4,
    imageUrl: 'image4.jpg',
    title: 'Name :Ayman Malkawi',
    description: 'Description for Card 4',
  },
  {
    id: 5,
    imageUrl: 'image5.jpg',
    title: 'Name :Mones Odat',
    description: 'Description for Card 5',
  },
  {
    id: 6,
    imageUrl: 'image6.jpg',
    title: 'Name :Mohammad Shiyab',
    description: 'Description for Card 6',
  },
];

function Card({ imageUrl, title, description }) {
  return (
    <div className={styles.propertycard}>
      <a href="#">
        <div className={styles.propertyimage}>
          <div className={styles.propertyimagetitle}></div>
        </div>
      </a>
      <div className={styles.propertydescription}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      {/* <a href="#">
        <div className={styles.propertysocialicons}></div>
      </a> */}
    </div>
  );
}

function CardList() {
  return (
    <div className={styles.container}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardList;
