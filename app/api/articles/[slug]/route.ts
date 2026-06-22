import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const articlesDir = path.join(process.cwd(), 'articles')
    const filePath = path.join(articlesDir, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return NextResponse.json({
      data,
      content
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load article' },
      { status: 500 }
    )
  }
}
