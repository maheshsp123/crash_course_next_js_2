// import { useRouter } from 'next/router';
import ArticleItem from '@/components/ArticleItem';
import config from '@/config'

async function fetchData(article_id){
    console.log("apiEndpoint =", `${config.apiEndPoint}/articles/${article_id}`)
    const resp = await fetch(`${config.apiEndPoint}/articles/${article_id}`)
    const data = await resp.json()
    console.log("data = ", data)
    return data.item
}

const ArticleItemPage = async ({params})=>{
    const {article_id} = params
    // console.log("apiEndpoint =", `${config.apiEndPoint}/api/articles/${article_id}`)
    // const resp = await fetch(`${config.apiEndPoint}/api/articles/${article_id}`)
    // const data = await resp.json()
    // console.log("data = ", data)
    const item = await fetchData(article_id)
    console.log("item", item)
    return (
        <div>
            <ArticleItem id={item.id} content={item.content} description={item.description}/>
        </div>
    )
}

export default ArticleItemPage