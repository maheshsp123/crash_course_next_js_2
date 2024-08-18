import { articles } from '../../../data'

export default function handler(req,res){
    const total_data_count = articles.length
    // Extract the query parameters
    const { page_no = 0, page_size = 5 } = req.query;

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
    res.status(200).json(resp_data)
}