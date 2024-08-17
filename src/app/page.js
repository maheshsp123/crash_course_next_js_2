import Image from "next/image";
import { articles } from "@/data";
import ArticleItem from "@/components/ArticleItem"

export default function Home() {
  return (
      <div>
        <h2>Welcome to crash course 2</h2>
        <ArticleItem id="1" content="sample contetn" description="description sample"/>
      </div>
  );
}
