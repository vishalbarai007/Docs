import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
         desc: "RE-IMAGINE PROJECT 1 ",
         filesize: "15 DAYS",
         close:true,
         tag:{isOpen:true,tagTitle:"PENDING", tagColor:"Red"}
        },
        {
            desc: "RE-IMAGINE PROJECT 2",
            filesize: "15 DAYS",
            close:true,
            tag:{isOpen:true,tagTitle:"PENDING", tagColor:"Red"}
        },
        {
            desc: "PIX-PLAY",
            filesize: "10 DAYS",
            close:true,
            tag:{isOpen:true,tagTitle:"PENDING", tagColor:"Red"}
        },

        {
            desc: "FE SAHYOG WEBSITE",
            filesize: "3 DAYS",
            close:true,
            tag:{isOpen:true,tagTitle:"WORKING", tagColor:"Yellow"}
        },
        {
            desc: " PORTFOLIO WEBSITE ",
            filesize: "DONE",
            close:false,
            tag:{isOpen:true,tagTitle:"COMPLETED", tagColor:"Green"}
        },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap'>
        {data.map((item,index)=> (
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground;