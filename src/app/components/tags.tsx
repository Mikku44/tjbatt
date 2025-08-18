interface ITagsProps {
  tags?: string[]
}

export default function Tags ({ tags }: Readonly<ITagsProps>) {
  return (
    <section
      id='popular-tags'
      className='w-full gap-4 px-4 max-w-7xl mx-auto mt-16'
    >
      <h4 className='text-lg font-semibold text-gray-900 mb-4'>ค้นหายอดนิยม</h4>
      <div className='flex flex-wrap gap-3 text-sm'>
        {tags?.map((tag: string) => (
          <span
            key={tag}
            className='px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer'
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
