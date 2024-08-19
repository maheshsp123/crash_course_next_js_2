import { NextResponse } from 'next/server';
import { articles } from '@/data'

// Handle GET requests with dynamic route segment
export async function GET(request, { params }) {
    const { id } = params; // Get the dynamic route segment
    const article = articles.find(article => article.id === id);
    if (article === undefined) {
        // Return the product data as JSON
        return NextResponse.json({error:'article not found'}, { status: 404 })
    }
    else
    {
        return NextResponse.json({item:article});
    }


}