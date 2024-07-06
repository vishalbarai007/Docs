import React, { useRef } from 'react';
import Card from './Card';
// import CardJSON from './CardJSON.json';

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
        //  id: 1,
         title: "RE-IMAGINE PROJECT 1 ",
         desc: "15 DAYS",
         close:true,
         tag:{isOpen:true,tagTitle:"PENDING", tagColor:"Red"}
        },
        {
            // id: 2,
            title: "RE-IMAGINE PROJECT 2",
            desc: "15 DAYS",
            close:true,
            tag:{isOpen:true,tagTitle:"PENDING", tagColor:"Red"}
        },
        {
            // id: 3,
            title: "PIX-PLAY",
            desc: "10 DAYS",
            close:true,
            tag:{isOpen:true,tagTitle:"PENDING", tagColor:"Red"}
        },

        {
            // id: 4,
            title: "FE SAHYOG WEBSITE",
            desc: "3 DAYS",
            close:true,
            tag:{isOpen:true,tagTitle:"WORKING", tagColor:"Yellow"}
        },
        {
            // id: 5,
            title: " PORTFOLIO WEBSITE ",
            desc: "DONE",
            close:false,
            tag:{isOpen:true,tagTitle:"COMPLETED", tagColor:"Green"}
        },
    ]
  return (
    <>
    <div ref={ref} className='fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap'>
        {data.map((item,index)=> (
            <Card data={item} reference={ref} />
        ))}

        <div class="form p-10">
            <form action="/create" method="post">
                <input class="block w-full rounded-md outline-none px-3 py-2 bg-zinc-950" type="text" placeholder="Title" name="title"/>
                <textarea class="block w-full rounded-md outline-none mt-3 px-5 py-2 resize-none bg-zinc-950" placeholder="Task titleription" name="details"></textarea>
                <input class="mt-2 bg-blue-600 p-3 rounded-md cursor-pointer" type="submit" value="Create Task"/>
            </form>
        </div>


    </div>

    {/* <div>

        
    {CardJSON.map((item)=> (
         <a key={item.id} href={item.linkUrl} target='_blank' rel="noopener n">
        <img src={item.imageUrl} alt={`Imagedata ${item.id}`} width={300} height={300} className='m-4 flex '/>
          </a>

    ))}

    </div> */}
    
    </>
    
  )
}

export default Foreground;