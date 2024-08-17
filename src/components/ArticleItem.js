// 'use server';

const ArticleItem = ({id, content, description})=>{
    return (
    <div>
        {id} | {content} | {description}
    </div>
    )

}

export default ArticleItem