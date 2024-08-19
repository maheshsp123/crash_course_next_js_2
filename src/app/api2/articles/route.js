import { NextResponse } from 'next/server';
import { articles } from '@/data'

// Handle GET requests
export async function GET(request) {
    // const products = [
    //   { id: 1, name: 'Product A', price: 50 },
    //   { id: 2, name: 'Product B', price: 75 },
    // ];

    const total_data_count = articles.length
    // Extract the query parameters
    // Get the full URL
    const { searchParams } = new URL(request.url);

    // Retrieve specific query parameters
    const page_no = searchParams.get('page_no');
    const page_size = searchParams.get('page_size');

    // Parse the parameters as integers
    const pageNo = parseInt(page_no, 10);
    const pageSize = parseInt(page_size, 10);
    
    // Calculate the start and end indices for slicing the array
    const startIndex = pageNo * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the array to get the data for the current page
    const paginatedData = articles.slice(startIndex, endIndex);
    const page_data_count = paginatedData.length
    const resp_data = {total_data_count:total_data_count,  page_data_count:page_data_count, page_no:pageNo, 
        page_size:pageSize,
        data:paginatedData
    }
    
    return NextResponse.json(resp_data);
  }