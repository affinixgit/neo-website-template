import { NextResponse } from 'next/server';
import config from "@/config/config";

export async function GET() {
  try {
    // Replace with your S3 URL
    const s3Url = `https://affiinx-website-live.s3.ap-south-1.amazonaws.com/${config.subscriptionId}/website/sitemap/sitemap`;
    const response = await fetch(s3Url);

    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.statusText}`);
    }

    const sitemapXml = await response.text();

    // Set Content-Type to XML
    return new NextResponse(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error fetching sitemap from S3:', error);
    return new NextResponse('Failed to load sitemap', { status: 500 });
  }
}
