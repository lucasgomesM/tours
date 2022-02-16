import React from 'react';
import Tours from './tours';
const Tour = ({tours, removeTour}) => {
        return (
        <section>
            <div className='title'>
                <h2>Our Tours</h2>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tours key={tour.id} {...tour} removeTour={removeTour}></Tours>
                })}
            </div>


        </section>
    )
    
};

export default Tour;