import ContactPage from "../ConatctPage"
import Aboutus from "../Aboutus"
import ArtilceApi from "../ArticleApi"
import TableOfContent from "../TableOfContent"

function Contact(){

    return(
        <div>
            <Aboutus/>
           <ArtilceApi/>
           <ContactPage/>
           <TableOfContent/>
        </div>
    )
}

export default Contact