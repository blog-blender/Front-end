



import React from 'react';
import styles from './about.module.css'; 

const cardData = [
  {
    id: 1,
    imageUrl: 'https://www3.0zz0.com/2023/09/05/21/789845135.jpg',
    Name: 'Eman Obeidat',
    Background: ' Full Stack Developer',

  },
  {
    id: 2,
    imageUrl: 'https://pps.whatsapp.net/v/t61.24694-24/56440314_414854615738758_1273811781583634432_n.jpg?ccb=11-4&oh=01_AdTVu8MQJF8aBuQSYCZsBg2sIUuGlypzrHIA4TLD59iYgw&oe=65003D00&_nc_cat=107.jpg',
    Name: 'Ibraheem Areeda',
    Background: 'Full Stack Developer',
  },
  {
    id: 3,
    imageUrl: 'https://www10.0zz0.com/2023/09/05/22/603423368.jpg',
    Name: 'Firas Awadallah',
    Background: 'Full Stack Developer',
  },
  {
    id: 4,
    imageUrl: 'https://cdn.discordapp.com/attachments/854391504424271904/1110464345399369751/20230501_140253.jpg',
    Name: 'Ayman Malkawi',
    Background: 'Full Stack Developer',
  },
  {
    id: 6,
    imageUrl: new URL('https://avatars.githubusercontent.com/u/125825700?s=400&u=eb2bbe4c93b17897f14ad07a117d37729ac7affb&v=4'),
    Name: 'Mohammad Shiyab',
    Background: 'Full Stack Developer',
  },
  {
    id: 5,
    imageUrl:'https://www12.0zz0.com/2023/09/05/21/211426433.jpg',
    Name: 'Mones Odat',
    Background: 'Full Stack Developer',
  },
];

function Card({ imageUrl, Name, Background }) {
  return (
    <div  className={styles.propertycard}>
      <a href="#">
        <div className={styles.propertyimage}>
          <img style={{height:'100%',width:'100%'}} src={imageUrl} />
          <div className={styles.propertyimagetitle}></div>
        </div>
      </a>
      <div className={styles.propertydescription}>
        <h5>{Name}</h5>
        <p>{Background}</p>
      </div>
      
    </div>
  );
}

export default function CardList() {
  return (
    <div className={styles.container}>
      {cardData.map((card) => (
          <Card
          key={card.id}
          imageUrl={card.imageUrl}
          Name={card.Name}
          Background={card.Background}
        />
        
      ))}
    </div>
  );
}







