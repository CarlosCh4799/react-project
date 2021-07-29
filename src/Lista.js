import React, { useRef, useEffect } from 'react';
import Item from './item'
import { gsap } from "gsap";

function Lista (props){

    const imageRef = useRef(null);
    

    useEffect(() => {
         
        gsap.from(imageRef.current, {
            duration: .3,
            y: -200,
            scale: 0,
            stagger: 0.5
        });
     
    }, []);

    return(
    <div className="list">
      {
        props.items.map(item => 
            <Item 
                ref={imageRef}
                key={item.id}
                id={item.id}
                rating={item.rating}
                title={item.title}
                image={item.image} />
          )
      }
    </div>
    );
}

export default Lista;