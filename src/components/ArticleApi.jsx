import axios from "axios"
import { useState, useEffect } from "react"

function ArtilceApi(){

   const [articles, setArticle]= useState()

   useEffect(() =>{
    const fetchData= async () =>{
        try{
            const response= await axios.get('https://newsapi.org/v2/everything', {
                params:{
                    apiKey:'9f21a2afddbc4d9fb40324aada662cda',
                    q:'nutrition cooking diet healthy eating food science'
                }
                
            })
            console.log(response)
            setArticle(response.data.articles)
        }catch(error){
            console.error("error:",error)
        }

    };
    fetchData()
   }, []);


    return (
        <div style={{border:"1px solid #ccc", borderRadius:"5px", padding:"20px", marginBottom:"20px", maxWidth:"600px"}}>
            <h1 id="food">food and health</h1>
            <ul>
                {articles && articles.map((article,index)=>(
                    <li key={index} style={{marginBottom:"20px"}}>
                        <a href={article.url} target="_blank">{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ArtilceApi