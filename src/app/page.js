"use client";
// import Image from "next/image";
// import { articles } from "@/data";
// import ArticleItem from "@/components/ArticleItem"
import ArticleList from "@/components/ArticleList"
import config from "@/config"
import { useState, useEffect } from 'react'


export default function Home() {
  console.log("Home page")
  // Initialize useState with default values for page_no and page_size
  const [pageNo, setPageNo] = useState(0);  // Default page number is 0
  const [pageSize, setPageSize] = useState(5);  // Default page size is 5
  const [articles,setArticles]  = useState([]);

  useEffect(() => {
    // Fetch data or perform any action when pageNo or pageSize changes
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.apiEndPoint}/articles?page_no=${pageNo}&page_size=${pageSize}`);
        const data = await response.json();
        console.log(data);
        console.log("fetched articles=",data.data)
        setArticles(data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageNo, pageSize]);  // Trigger effect when pageNo or pageSize changes

  return (
      <div class="full-size-box">
        <center><h2>Welcome to crash course 2</h2></center>
        <ArticleList articles={articles} />
        <p/>
        
        <center >
          <button onClick={() => {setPageNo(pageNo-1)}}>  {"<<"}Previous </button>
          Showing Page no: {pageNo}
          <button onClick={() => {setPageNo(pageNo+1)}}> Next{">>"}</button>
        </center>
      </div>
  );
}
