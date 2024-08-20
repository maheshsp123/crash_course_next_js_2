// 'use server';
import Link from 'next/link'

const ArticleItem = ({id, content, description})=>{
    return (
        <Link href={`/articles/${id}`} class="link_class">
            <div class="rounded-border-box">
                {id} | {content} <p/> {description}
            </div>
        </Link>
    
    )

}

export default ArticleItem