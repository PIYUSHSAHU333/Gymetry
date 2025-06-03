import React from 'react';
import Navbar from '../Components/Navbar';
function HomePage() {
    return ( 
        <div className=' min-h-screen overflow-hidden'>
            <img src="media/images/bgImg.jpg" alt="bgImg" className='absolute top-0 left-0 w-full h-full object-cover filter brightness-50' />
            <div className='relative z-10'>
                <Navbar />
            </div>
        </div>
     );
}

export default HomePage;