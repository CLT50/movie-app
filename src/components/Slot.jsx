import React, {useState} from 'react'


const Slot = () => {
    const fruits = ['🍇', '🍒', '🍉', '🍋', '🥝'];
    
        
        const getRandomFruits = () => 
            Array.from({ length: 3 }, () => fruits[Math.floor(Math.random() * fruits.length)]);
    
        const [pictures, setPictures] = useState(getRandomFruits);
    
        function handleClick() {
            setPictures(getRandomFruits());
        }
    
        
        const isWinner = pictures.every(fruit => fruit === pictures[0]);
    
        return (
            
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif',  border: '2px solid black', padding: '20px', margin: '20px', width: '400px', backgroundColor: '#1f1f20', color: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <h2>Spin your luck!</h2>
                <h3 style={{color: '#61dafb'}}>Match all 3 fruits and get $10 off promo code!!</h3>
                <div style={{ fontSize: '3rem', display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0',}}>
                    {pictures.map((picture, index) => (
                        <div key={index}>{picture}</div>
                    ))}
                </div>
                <h3>{isWinner ?  <div>You are a winner! 🎉 <br/> Here is your promo code: <b style={{color: 'yellow'}}>1off0</b> </div> : 'Try again!'}</h3>
                <br/>
                <button onClick={handleClick} style={{ fontSize: '1.2rem', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                    Spin    
                </button>
            </div>
            
        );        
    };
    

export default Slot;