import React from 'react';
// import './Cards.css';
// import { FaBeer} from 'react-icons\fa';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    // card  
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='CARDS relative flex-shrink-0 overflow-hidden px-8 py-10 w-60 h-72 rounded-[45px] border-zinc-950 bg-zinc-700 text-white p-5'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5'>{data.title}</p>

        <div className='absolute w-full left-0 bg-zinc-700'>
        <div className='flex items-center justify-between py-3 px-8'>
                <h5>{data.desc}</h5>
                <span className={`w-7 h-7 ${data.tag.tagColor === "Red" ? "bg-red-600":(data.tag.tagColor === "Green" ? "bg-green-500" : "bg-yellow-500")} rounded-full flex items-center justify-center`}>
                    {data.close ? <RiCloseLine/> : <MdOutlineDownloadForOffline/> }
                </span>
        </div>
        </div>

        {
            data.tag.isOpen ? (
            <div className={`footer absolute  bottom-0 ${data.tag.tagColor === "Red" ? "bg-red-600":(data.tag.tagColor === "Green" ? "bg-green-500" : "bg-yellow-500")}  w-full  left-0 `}>
                <div className='tag flex justify-center items-center  w-full '>
                    <h3 className='text-sm font-semibold py-3'>{data.tag.tagTitle} </h3>
                </div>
            </div>
            ) : null
        }


            
    </motion.div>
  )
}

export default Card;