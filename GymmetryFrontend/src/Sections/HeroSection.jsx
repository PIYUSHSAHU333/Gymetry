import React from 'react';

function HeroSection() {
    return ( 
        <section className='HeroSection flex items-center justify-center bg-[rgba(0,0,0,0.5)] min-h-screen w-full'>
            <div className='flex flex-col items-center justify-center w-1/2'>
                <h1 className='text-white text-4xl font-bold'>Gymetry</h1>
                <p className='text-white text-lg'>
                    Gymetry is a platform that helps you track your fitness goals.
                </p>
            </div>
            <div className='hidden lg:block w-1/2'/>
        </section>
     );
}

export default HeroSection;