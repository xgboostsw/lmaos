import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  context: any
) {
  try {
    const params = context?.params;
    const slug = typeof params?.slug === 'string' ? params.slug : (await params?.slug)?.slug;
    const notebookPath = join(process.cwd(), 'content', 'docs', 'ipynb', `${slug}.ipynb`);
    
    const content = await readFile(notebookPath, 'utf-8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'application/x-ipynb+json',
        'Content-Disposition': `inline; filename="${slug}.ipynb"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Notebook not found' },
      { status: 404 }
    );
  }
}
