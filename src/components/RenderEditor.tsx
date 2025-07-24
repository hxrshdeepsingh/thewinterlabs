'use client'
interface LexicalContent {
  root: {
    children: any[]
  }
}

export default function RenderEditor({ content }: { content: LexicalContent }) {
  const paragraphs = content?.root?.children || []

  return (
    <div className="prose prose-lg">
      {paragraphs.map((block, index) => {
        if (block.type === 'paragraph') {
          const text = block.children?.map((child: any) => child.text).join(' ')
          return <p key={index}>{text}</p>
        }
        return null
      })}
    </div>
  )
}
