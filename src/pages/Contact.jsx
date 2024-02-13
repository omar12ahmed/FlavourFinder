import ContactPage from "../components/ConatctPage"
import Aboutus from "../components/Aboutus"
import ArtilceApi from "../components/ArticleApi"
import TableOfContent from "../components/TableOfContent"

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