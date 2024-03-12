
import './App.css';
import { useEffect, useState } from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [points, setPoits] = useState([]);
  const pointCollectionRef = collection(db, "Points");
  
  useEffect(() => {
    const getPointList = async () => {

      try{
        const data = await getDocs(pointCollectionRef);
        const filtredData = data.docs.map(doc => ({
          ...doc.data(), 
          id: doc.id
        }))
        console.log('data', filtredData);
      } catch(error){
        console.error(error);
      }

    }

    getPointList();
  }, [])
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
