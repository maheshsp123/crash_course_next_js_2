import { articles } from "@/data";

export default function handler(req,res){
    const {id} = req.query;
    const article = articles.find(article => article.id === id);
    if (article === undefined) {
        return res.status(404).json({error:'article not found'})
    }
    else
    {
        return res.status(200).json({item:article});
    }
}