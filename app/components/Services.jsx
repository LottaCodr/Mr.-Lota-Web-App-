import React from 'react';
import { motion } from "framer-motion";
import ServicesBox from './ServicesBox';





export default function Services() {
  return (
    <motion.div 
    initial={{ 
        x: -200,
        opacity: 0
     }}
     transition={{ 
        duration: 1.2
      }} 
      whileInView={{ 
        x: 0,
        opacity: 1
       }}
    className='relative bg-primary h-screen w-screen justify-center items-center flex flex-row'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Services</h3>
<div className='relative flex overflow-hidden w-full h-full'>
  <ServicesBox/>
</div>
        


       
    </motion.div>
    
    


    
  )
}
