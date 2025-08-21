'use client'

import React, { useState, useRef } from 'react'
import {
  Plus,
  Trash2,
  Edit3,
  Save,
  X,
  Type,
  List,
  Hash,
  ChevronDown,
  ImageIcon,
  Upload
} from 'lucide-react'
import { insertBlog } from '../utils/supabase/repository/blogs'
import { BlogPost } from '../[categoryName]/[blogTitle]/page'

// Enhanced type definitions with image support
type HeaderLevel = 1 | 2 | 3
type ListStyle = 'ordered' | 'unordered'

interface HeaderData {
  text: string
  level: HeaderLevel
}

interface ParagraphData {
  text: string
}

interface ListData {
  items: string[]
  style: ListStyle
}

interface ImageData {
  url: string
  caption: string
  alt: string
}

type BlockType = 'header' | 'paragraph' | 'list' | 'image'

interface BlockBase {
  id: string
  type: BlockType
}

interface HeaderBlock extends BlockBase {
  type: 'header'
  data: HeaderData
}

interface ParagraphBlock extends BlockBase {
  type: 'paragraph'
  data: ParagraphData
}

interface ListBlock extends BlockBase {
  type: 'list'
  data: ListData
}

interface ImageBlock extends BlockBase {
  type: 'image'
  data: ImageData
}

type Block = HeaderBlock | ParagraphBlock | ListBlock | ImageBlock

interface BlogData {
  time: number
  blocks: Block[]
}

// Type guards for better type safety
const isHeaderBlock = (block: Block): block is HeaderBlock =>
  block.type === 'header'
const isParagraphBlock = (block: Block): block is ParagraphBlock =>
  block.type === 'paragraph'
const isListBlock = (block: Block): block is ListBlock => block.type === 'list'
const isImageBlock = (block: Block): block is ImageBlock =>
  block.type === 'image'

const BlogEditor = () => {
  const [blogData, setBlogData] = useState<BlogData>({
    time: 0,
    blocks: [
      {
        id: '1',
        type: 'header',
        data: {
          text: 'แบตเตอรี่รถยนต์เสื่อมสภาพหรือยัง?',
          level: 2
        }
      },
      {
        id: '2',
        type: 'paragraph',
        data: {
          text: 'หากรถของคุณสตาร์ทยาก...'
        }
      },
      {
        id: '3',
        type: 'list',
        data: {
          items: ['ไฟหน้าหรี่', 'สตาร์ทยาก', 'กลิ่นแปลก'],
          style: 'unordered'
        }
      }
    ]
  })

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingValue, setEditingValue] = useState<string>('')
  const [editingCaption, setEditingCaption] = useState<string>('')
  const [showBlockMenu, setShowBlockMenu] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 9)
  }

  const handleSubmit = () => {
    const payload : BlogPost = {
      title: '',
      slug: '',
      content: blogData,
      cover_image_url: null,
      status: null,
      published_at: null,
      tags: null
    }
    const result  =  insertBlog(payload);
    console.log("RESULT : ",result);
    return 
  }
  
  const addBlock = (type: BlockType, index?: number): void => {
    let newBlock: Block

    switch (type) {
      case 'header':
        newBlock = {
          id: generateId(),
          type: 'header',
          data: { text: '', level: 2 }
        }
        break
      case 'list':
        newBlock = {
          id: generateId(),
          type: 'list',
          data: { items: [''], style: 'unordered' }
        }
        break
      case 'image':
        newBlock = {
          id: generateId(),
          type: 'image',
          data: { url: '', caption: '', alt: '' }
        }
        break
      case 'paragraph':
      default:
        newBlock = {
          id: generateId(),
          type: 'paragraph',
          data: { text: '' }
        }
        break
    }

    setBlogData(prev => {
      const newBlocks = [...prev.blocks]
      const insertIndex = index !== undefined ? index + 1 : newBlocks.length
      newBlocks.splice(insertIndex, 0, newBlock)

      return {
        ...prev,
        time: Date.now(),
        blocks: newBlocks
      }
    })

    // Start editing the new block
    setEditingId(newBlock.id)
    setEditingValue('')
    setEditingCaption('')
  }

  const deleteBlock = (id: string): void => {
    setBlogData(prev => ({
      ...prev,
      time: Date.now(),
      blocks: prev.blocks.filter(block => block.id !== id)
    }))
  }

  const startEdit = (block: Block): void => {
    setEditingId(block.id)
    if (isListBlock(block)) {
      setEditingValue(block.data.items.join('\n'))
    } else if (isHeaderBlock(block) || isParagraphBlock(block)) {
      setEditingValue(block.data.text)
    } else if (isImageBlock(block)) {
      setEditingCaption(block.data.caption)
    }
  }

  const saveEdit = (): void => {
    if (editingId === null) return

    setBlogData(prev => {
      const updatedBlocks = prev.blocks.map(block => {
        if (block.id !== editingId) return block

        if (isListBlock(block)) {
          const updatedBlock: ListBlock = {
            ...block,
            data: {
              ...block.data,
              items: editingValue.split('\n').filter(item => item.trim())
            }
          }
          return updatedBlock
        }

        if (isHeaderBlock(block)) {
          const updatedBlock: HeaderBlock = {
            ...block,
            data: {
              ...block.data,
              text: editingValue
            }
          }
          return updatedBlock
        }

        if (isParagraphBlock(block)) {
          const updatedBlock: ParagraphBlock = {
            ...block,
            data: {
              ...block.data,
              text: editingValue
            }
          }
          return updatedBlock
        }

        if (isImageBlock(block)) {
          const updatedBlock: ImageBlock = {
            ...block,
            data: {
              ...block.data,
              caption: editingCaption
            }
          }
          return updatedBlock
        }

        return block
      })

      return {
        ...prev,
        time: Date.now(),
        blocks: updatedBlocks
      }
    })

    setEditingId(null)
    setEditingValue('')
    setEditingCaption('')
    setShowBlockMenu(null)
  }

  const cancelEdit = (): void => {
    setEditingId(null)
    setEditingValue('')
    setEditingCaption('')
    setShowBlockMenu(null)
  }

  const updateHeaderLevel = (id: string, level: HeaderLevel): void => {
    setBlogData(prev => ({
      ...prev,
      time: Date.now(),
      blocks: prev.blocks.map(block =>
        block.id === id && isHeaderBlock(block)
          ? { ...block, data: { ...block.data, level } }
          : block
      )
    }))
  }

  const toggleListStyle = (id: string): void => {
    setBlogData(prev => ({
      ...prev,
      time: Date.now(),
      blocks: prev.blocks.map(block =>
        block.id === id && isListBlock(block)
          ? {
              ...block,
              data: {
                ...block.data,
                style: block.data.style === 'ordered' ? 'unordered' : 'ordered'
              }
            }
          : block
      )
    }))
  }

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    // In a real app, you would upload the file to a server
    // For this example, we'll create a mock URL
    const mockUrl = URL.createObjectURL(file)

    setBlogData(prev => ({
      ...prev,
      time: Date.now(),
      blocks: prev.blocks.map(block =>
        block.id === id && isImageBlock(block)
          ? {
              ...block,
              data: {
                ...block.data,
                url: mockUrl,
                alt: file.name
              }
            }
          : block
      )
    }))
  }

  const triggerFileInput = (id: string) => {
    if (fileInputRef.current) {
      fileInputRef.current.dataset.id = id
      fileInputRef.current.click()
    }
  }

  const renderBlock = (block: Block, index: number) => {
    const isEditing = editingId === block.id

    return (
      <div key={block.id} className='group relative mb-3'>
        <div className='flex items-start'>
          {/* Block controls */}
          <div className='flex mr-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
            <button
              onClick={() =>
                setShowBlockMenu(showBlockMenu === block.id ? null : block.id)
              }
              className='p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded'
            >
              <Plus size={14} />
            </button>
          </div>

          <div className='flex-1 min-w-0'>
            {/* Block type indicator and actions */}
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center space-x-2'>
                <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>
                  {block.type}
                </span>
                {isHeaderBlock(block) && (
                  <div className='flex space-x-1'>
                    {([1, 2, 3] as const).map(level => (
                      <button
                        key={level}
                        onClick={() => updateHeaderLevel(block.id, level)}
                        className={`px-2 py-0.5 text-xs rounded ${
                          block.data.level === level
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        H{level}
                      </button>
                    ))}
                  </div>
                )}
                {isListBlock(block) && (
                  <button
                    onClick={() => toggleListStyle(block.id)}
                    className='px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600 hover:bg-gray-200'
                  >
                    {block.data.style === 'ordered' ? '1.' : '•'}
                  </button>
                )}
              </div>
              <div className='flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                {isEditing ? (
                  <>
                    <button
                      onClick={saveEdit}
                      className='p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded'
                      title='Save'
                    >
                      <Save size={16} />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className='p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded'
                      title='Cancel'
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(block)}
                      className='p-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded'
                      title='Edit'
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteBlock(block.id)}
                      className='p-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded'
                      title='Delete'
                    >
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Block content */}
            {isEditing ? (
              <div className='mb-2'>
                {isListBlock(block) ? (
                  <textarea
                    value={editingValue}
                    onChange={e => setEditingValue(e.target.value)}
                    placeholder='Enter each item on a new line'
                    className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    rows={Math.max(3, editingValue.split('\n').length)}
                    autoFocus
                  />
                ) : isImageBlock(block) ? (
                  <div className='space-y-2'>
                    {!block.data.url ? (
                      <div
                        className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors'
                        onClick={() => triggerFileInput(block.id)}
                      >
                        <Upload className='mx-auto h-12 w-12 text-gray-400' />
                        <span className='mt-2 block text-sm font-medium text-gray-900'>
                          Click to upload an image
                        </span>
                      </div>
                    ) : (
                      <div className='relative'>
                        <img
                          src={block.data.url}
                          alt={block.data.alt}
                          className='rounded-lg max-h-64 object-contain mx-auto'
                        />
                        <input
                          type='text'
                          value={editingCaption}
                          onChange={e => setEditingCaption(e.target.value)}
                          placeholder='Add a caption...'
                          className='w-full mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <textarea
                    value={editingValue}
                    onChange={e => setEditingValue(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    rows={Math.max(1, Math.ceil(editingValue.length / 50))}
                    autoFocus
                  />
                )}
              </div>
            ) : (
              <div
                className='cursor-text py-2 px-1 rounded hover:bg-gray-50'
                onClick={() => startEdit(block)}
              >
                {isHeaderBlock(block) &&
                  React.createElement(
                    `h${block.data.level}`,
                    {
                      className: 'font-bold text-gray-900 mb-2'
                    },
                    block.data.text || 'Click to add header...'
                  )}

                {isParagraphBlock(block) && (
                  <p className='text-gray-700 leading-relaxed'>
                    {block.data.text || 'Click to add text...'}
                  </p>
                )}

                {isListBlock(block) &&
                  (block.data.style === 'ordered' ? (
                    <ol className='list-decimal list-inside space-y-1 text-gray-700'>
                      {block.data.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item || 'List item...'}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className='list-disc list-inside space-y-1 text-gray-700'>
                      {block.data.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item || 'List item...'}</li>
                      ))}
                    </ul>
                  ))}

                {isImageBlock(block) && (
                  <div className='my-2'>
                    {block.data.url ? (
                      <div className='relative'>
                        <img
                          src={block.data.url}
                          alt={block.data.alt}
                          className='rounded-lg max-h-64 object-contain mx-auto'
                        />
                        {block.data.caption && (
                          <p className='text-center text-sm text-gray-500 mt-2'>
                            {block.data.caption}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center'>
                        <ImageIcon className='mx-auto h-12 w-12 text-gray-400' />
                        <span className='mt-2 block text-sm font-medium text-gray-900'>
                          Click to add an image
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Add block menu */}
            {showBlockMenu === block.id && (
              <div className='mb-4 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-2'>
                <div className='text-xs text-gray-500 mb-2 px-2'>
                  Add block:
                </div>
                <div className='grid grid-cols-2 gap-1'>
                  <button
                    onClick={() => {
                      addBlock('header', index)
                      setShowBlockMenu(null)
                    }}
                    className='flex items-center space-x-2 px-3 py-2 text-left rounded hover:bg-gray-100'
                  >
                    <Hash size={16} className='text-gray-600' />
                    <span>Header</span>
                  </button>
                  <button
                    onClick={() => {
                      addBlock('paragraph', index)
                      setShowBlockMenu(null)
                    }}
                    className='flex items-center space-x-2 px-3 py-2 text-left rounded hover:bg-gray-100'
                  >
                    <Type size={16} className='text-gray-600' />
                    <span>Paragraph</span>
                  </button>
                  <button
                    onClick={() => {
                      addBlock('list', index)
                      setShowBlockMenu(null)
                    }}
                    className='flex items-center space-x-2 px-3 py-2 text-left rounded hover:bg-gray-100'
                  >
                    <List size={16} className='text-gray-600' />
                    <span>List</span>
                  </button>
                  <button
                    onClick={() => {
                      addBlock('image', index)
                      setShowBlockMenu(null)
                    }}
                    className='flex items-center space-x-2 px-3 py-2 text-left rounded hover:bg-gray-100'
                  >
                    <ImageIcon size={16} className='text-gray-600' />
                    <span>Image</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8 pt-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <div className='bg-white rounded-lg overflow-hidden'>
          <div className="flex justify-between items-center px-4">
            <div className='p-6 border-b border-gray-200'>
              <h1 className='text-2xl font-bold text-gray-900 mb-2'>
                Blog Editor
              </h1>
              <p className='text-gray-600'>
                Create content with a simple, intuitive editor
              </p>
            </div>
            <button
            className='p-2 bg-blue-300 rounded-sm'
            onClick={handleSubmit}>Add New</button>
          </div>

          <div className='p-6'>
            {blogData.blocks.map((block, index) => renderBlock(block, index))}

            {/* Add first block button if empty */}
            {blogData.blocks.length === 0 && (
              <div className='text-center py-8'>
                <button
                  onClick={() => addBlock('paragraph')}
                  className='inline-flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
                >
                  <Plus size={16} />
                  <span>Add your first block</span>
                </button>
              </div>
            )}

            {/* Hidden file input for image uploads */}
            <input
              type='file'
              ref={fileInputRef}
              className='hidden'
              accept='image/*'
              onChange={e => {
                if (fileInputRef.current?.dataset.id) {
                  handleImageUpload(e, fileInputRef.current.dataset.id)
                }
              }}
            />
          </div>

          <div className='p-6 border-t border-gray-200 bg-gray-50'>
            <details className='bg-white rounded-lg p-3'>
              <summary className='cursor-pointer font-medium text-gray-700 flex items-center'>
                <ChevronDown size={16} className='mr-1' />
                JSON Output
              </summary>
              <pre className='mt-3 bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm'>
                {JSON.stringify(blogData, null, 2)}
              </pre>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogEditor
