import React, {useState} from 'react';

const Tours = ({id, image, info, name, price, removeTour}) => {
    const [readMore,setReadMore] = useState(false);
    return <article className='item' key={id}>
        <img src={image} alt={name} className='pics'/>
        <footer>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <h6>
          <p className='info'>{readMore?info:`${info.substring(0,200)}...`}
          <button className='btn-read' onClick = {() => setReadMore(!readMore)}>{readMore?'show less':'read more'}</button>
          </p>
        </h6>
        <button className='btn' onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
      </article>;
};

export default Tours;

