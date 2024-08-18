import ArticleItem from "./ArticleItem"

const ArticleList = ({articles})=>{
    console.log("articles count=",articles.length)
    // console.log("articles =",articles)
    // articles.forEach((article)=>{
    //     console.log("article = ",article)
        
    // })
    return (
        <div>
            <h2>Article List</h2>
            {
                articles.map((article)=>{
                        // console.log "hi ar li";
                        return(<ArticleItem id={article.id} content={article.content} description={article.description}/>
                        )
                })
            }
        </div>
    )
}

export default ArticleList