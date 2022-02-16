import { useState, useEffect } from 'react';
import './App.css';
import Tour from './tour';
const url = 'https://course-api.com/react-tours-project';
function App() {

  const getTours = async() => {
    const response = await fetch(url);
    try{
      if(response.status>=200 && response.status<=299){
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    else{
      setLoading(false);
      setIsError(true);
      throw new Error(response.statusText);

    }
    }catch(error){
      setLoading(false);
      console.log(error);
    }
      
   
  };
  useEffect(() => {
    getTours();
  }, [])
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  if(loading){
    return (<>
      <h1>Loading...</h1>
    </>)
  }
  if(isError){
    return (<>
      <h1>Error...</h1>
    </>)
  }
  if(!loading){
    if(tours.length !== 0){

    return <>
    <Tour tours={tours} removeTour={removeTour}></Tour>
    </>
    }
    else{
      return (
            <div className='title'>

                <h2>No More Tours</h2>
                <button className='btn' onClick={() => {
                  getTours();
                }}>Refresh</button>            
            
            </div>
            
        )
    }

  }
}



export default App;
