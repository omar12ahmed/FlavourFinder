import { useEffect, useState, useRef } from "react";

export function HeadObserver(){
    const observer= useRef()
    const [activeId, setActiveId]= useState('')

    useEffect(()=>{
        const handleObserver= (entries)=>{
            entries.forEach((entry)=>{
                if(entry?.isIntersecting){
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current= new IntersectionObserver(handleObserver,{
            rootMargin:"-20% 0% -35% 0px"
        })
        return()=>observer.current?.disconnect()
    },[])

    return{activeId}
}