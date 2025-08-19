import { MessageCircleMore } from 'lucide-react'

export default function FloatingButton () {
  return (
    <section
      className='
    fixed bottom-0 right-0 m-4
    '
    >
      <div className='rounded-full bg-[var(--primary)] text-white p-3'>
        <MessageCircleMore />
      </div>
    </section>
  )
}
