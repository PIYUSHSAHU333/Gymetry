import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
function FeatureCard({img, icon, title, link, text}) {
    return ( 
        <div className='aspect-4/5 rounded-xl group relative overflow-hidden'>
            <img src={img} alt="muscle grp" className='w-full brightness-[0.8] group-hover:scale-105 transition-all duration-300 h-full object-cover' />
            <p className='absolute top-0 p-5 flex items-center gap-2 left-0 text-white text-xl font-bold'>{icon} {title}</p>
            {/* <p className='absolute top-0 p-5 flex items-center gap-2 right-0 text-white text-xl font-bold'>s</p> */}
            <Link to={link} className='absolute bottom-2 hover:shadow-black shadow-lg left-2 p-2 flex items-center hover:gap-4 gap-2 rounded-2xl  bg-[#E4FF4F] text-black transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#E4FF4F]  font-bold'>{text} <MoveRight className='w-4 transition-all duration-300 h-4' /></Link>
        </div>
     );
}

export default FeatureCard;