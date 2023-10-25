import React from 'react';
import Image from 'next/image';


const RoundedCard = ({ title, text, image }) => {
    return (
      <div className="card rounded">
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-3/4">
            <Image src={image} 
            alt="Card Image" 
            width={200} 
            height={200} 
            className="rounded-lg mx-auto w-full text m-8    "/>
          </div>
          <div className="lg:w-2/3 m-8 text-left">
            <div>
              <h5 className="card-title font-inter text-xl mb-4">{title}</h5>
            </div>
            <div>
              <p className="card-text font-inter">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default RoundedCard;