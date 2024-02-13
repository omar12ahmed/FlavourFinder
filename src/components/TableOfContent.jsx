import { useEffect, useState } from "react"
import { HeadObserver } from "./HeadObserver"

function TableOfContent() {

    const [headings, setHeadings] = useState([])
    const { activeId } = HeadObserver()

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h1"))
            .map((elem) => ({
                id: elem.id,
                text: elem.innerText,
                level: Number(elem.nodeName.charAt(1))
            }))
        setHeadings(elements)
    }, [])



    return (
        <nav className="tableNav">
            <ul>
                {headings.map(heading => (

                    <li style={{marginBottom:"25px"}}
                        key={heading.id}
                        className={getClassName(heading.level)}
                    >
                        <a
                            href={`#${heading.id}`}
                            style={{
                                fontWeight: activeId === heading.id ? "bold" : "normal"
                                }}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(`#${heading.id}`).scrollIntoView({
                                    behavior: "smooth"
                                })
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
const getClassName = (level) => {
    switch (level) {
        case 2:
            return 'head2'
        case 3:
            return 'head3'
        case 4:
            return 'head4'
        default:
            return null
    }
}
export default TableOfContent