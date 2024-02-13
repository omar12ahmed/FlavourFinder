import { useEffect, useState } from "react"

function TableOfContent(){
    
    const [headings, setHeadings]=useState([])

    useEffect(()=>{
        const elements = Array.from(document.querySelectorAll("#about, #history, #food, #contact")).map((element)=>({
            text:element.innerText,
        }))
        setHeadings(elements)
    },[]);
    
    return(
        <nav>
            <ul>
                {headings.map(heading=>(
                    <li key={heading.text}>
                        {/* <a href="#">{heading.text}</a> */}
                        <a href={`#${heading.text}`}
                        onClick={(e)=>{
                            e.preventDefault()
                            document.querySelector(`#${heading.text}`).scrollIntoView({
                                behavior:"smooth"
                            })
                        }}
                        >{heading.text}</a>
                    </li>


                ))}
                
            </ul>
        </nav>
    )
}
export default TableOfContent