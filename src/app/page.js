import Image from "next/image";
import { articles } from "@/data";
// import ArticleItem from "@/components/ArticleItem"
import ArticleList from "@/components/ArticleList"

export default function Home() {
  return (
      <div>
        <h2>Welcome to crash course 2</h2>
        <ArticleList articles={articles} />
      </div>
  );
}
