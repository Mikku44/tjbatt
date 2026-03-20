import { ArrowUpRight, CheckCircle2, Clock, Facebook, MapPin, Phone, Wrench } from 'lucide-react'
import * as motion from 'motion/react-client'
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import CardService from './components/cardService'
import Gallery from './components/gallery'
import RecentArticle from './components/recentArticle'
import Tags from './components/tags'
import { brands, HomeTags } from './constants/app'

export default function Home() {
  const steps = [
    {
      icon: <Phone className='w-10 h-10 text-[var(--primary)]' />,
      title: 'ติดต่อเรา',
      desc: 'โทรหรือแชทเพื่อสอบถามและเช็คราคาแบตเตอรี่ที่เหมาะกับรถของคุณ'
    },
    {
      icon: <MapPin className='w-10 h-10 text-white' />,
      title: 'เลือกสถานที่',
      desc: 'ระบุสถานที่ที่คุณต้องการให้ไปเปลี่ยนแบต ไม่ว่าจะเป็นบ้านหรือที่ทำงาน'
    },
    {
      icon: <Wrench className='w-10 h-10 text-[var(--primary)]' />,
      title: 'ให้บริการ',
      desc: 'ช่างผู้เชี่ยวชาญเข้าหน้างาน เปลี่ยนแบตพร้อมตรวจสอบระบบเบื้องต้น'
    }
  ]

  return (
    <main className='mx-auto w-full min-h-[100vh] scroll-smooth'>
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden group">
        {/* Background Image with subtle zoom effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center"
        />

        {/* Sophisticated Overlay - Linear to the left for text legibility */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent'></div>

        {/* Text Content */}
        <div className='relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center'>
          <div className='max-w-2xl'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white/70 uppercase tracking-widest text-xs font-medium mb-4 block"
            >
              Premium Battery Service
            </motion.span>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className='text-4xl md:text-6xl text-white font-bold leading-tight'
            >
              กำลังมองหา <br />
              <span className="text-white">แบตเตอรี่รถยนต์อยู่ใช่ไหม?</span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 space-y-4"
            >
              <p className='text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-lg'>
                เรามีทีมช่างพร้อมให้คำแนะนำแบตเตอรี่ตรงรุ่นสำหรับรถยนต์ และรถยนต์ไฟฟ้า
                เพื่อให้เหมาะสมกับการใช้งานในชีวิตประจำวันของคุณ
              </p>

              <div className="pt-4">
                <Link href="#contact" className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-slate-100 transition-all active:scale-95">
                  สอบถามปัญหารถยนต์
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className='py-20 px-6 bg-slate-50/50'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-4'
          >
            Official Dealer
          </motion.h4>

          <h2 className='font-bold text-3xl md:text-4xl mb-8 text-slate-900 tracking-tight'>
            ตัวแทนจำหน่ายแบตเตอรี่รถยนต์ชั้นนำ
          </h2>

          <div className='relative'>
            <span className='absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-slate-200/50 font-serif opacity-50'>&quot;</span>
            <p className='text-slate-600 leading-relaxed text-lg md:text-xl font-light italic'>
              ตั้งใจขายแบต จำหน่ายแบตเตอรี่รถยนต์และรถยนต์ไฟฟ้า ทางร้านคัดสรรแบตเตอรี่คุณภาพดีจากแบรนด์ชั้นนำ
              <span className="text-slate-900 font-medium"> GS, 3K, FB, YUASA, VARTA, AMARON, PUMA, DELKOR, FIAMM</span> และอื่น ๆ
              พร้อมบริการติดตั้งโดยช่างมืออาชีพถึงที่ ทั้งในกรุงเทพฯ และปริมณฑล
            </p>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className='max-w-7xl mx-auto px-4 md:justify-between flex gap-4 py-10 justify-center items-center flex-wrap'>
        {brands.map((brand, i) => (
          <motion.img
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            className='md:max-w-[100px] max-w-[60px] h-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.1, duration: 0.4 }
            }}
            viewport={{ once: true }}
          />
        ))}
      </section>

      {/* CTA */}

      <section className='w-full gap-4 px-4 mt-10 max-w-7xl mx-auto flex md:flex-row flex-col justify-between '>
        <Link
          className='p-4 border flex gap-2 justify-center hover:opacity-80 duration-200 items-center bg-black/80 text-white w-full rounded-sm'
          href='tel:0994922889'
          rel='noreferrer'
          target='_blank'
        >
          <div className=''>
            <Phone />
          </div>
          <div className=''>Tel +66 (0)99-492-2889</div>
        </Link>
        <Link
          className='p-4 border flex gap-2 justify-center hover:opacity-80 duration-200 items-center bg-[#06C755] text-white w-full rounded-sm'
          href='https://line.me/R/ti/p/@318evmbw'
          rel='noreferrer'
          target='_blank'
        >
          <div className=''>
            {' '}
            <SVG
              src='/social/line.svg'
              width={32}
              fill='white'
              height='auto'
              title='line platform'
            />
          </div>
          <div className=''>Line (ตั้งใจขายแบต)</div>
        </Link>
        <Link
          className='p-4 border flex gap-2 justify-center hover:opacity-80 duration-200 items-center bg-[#1b77f2] text-white w-full rounded-sm'
          href='https://www.facebook.com/profile.php?id=61565159984797'
          rel='noreferrer'
          target='_blank'
        >
          <div className=''>
            <Facebook />
          </div>
          <div className=''>Facebook (ตั้งใจขายแบต)</div>
        </Link>
      </section>

      {/* service */}
      <section id='ourservice' className='max-w-7xl mx-auto px-6 py-20 border-t border-slate-100'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div>
            <span className='text-[var(--primary)] font-bold tracking-widest text-xs uppercase block mb-2'>
              Our Expertise
            </span>
            <h3 className='text-4xl md:text-5xl font-bold text-slate-900'>
              บริการของเรา
            </h3>
          </div>
          <p className='text-slate-500 md:max-w-sm text-sm leading-relaxed'>
            ดูแลรถของคุณด้วยมาตรฐานมืออาชีพ ครอบคลุมทั้งรถยนต์สันดาปและรถยนต์ไฟฟ้า (EV)
          </p>
        </div>

        {/* Service Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {[
            "บริการติดตั้งแบตเตอรี่ทั้งในและนอกสถานที่",
            "ตรวจเช็คสุขภาพแบตเตอรี่รถยนต์ / EV",
            "โปรแกรมลงทะเบียนแบตเตอรี่สำหรับรถยุโรป"
          ].map((service, i) => (
            <div
              key={i}
              className='group p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300'
            >
              <div className='size-10 rounded-full bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <CheckCircle2 size={20} className="text-yellow-400" />
              </div>
              <p className='text-lg font-medium text-slate-900 leading-snug'>
                {service}
              </p>
            </div>
          ))}
        </div>

        {/* Service Policy Detail */}
        <div className='mt-12 p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col md:flex-row gap-8 items-center'>
          <div className='flex-1 space-y-4'>
            <div className='flex items-start gap-3'>
              <div className='w-1 h-6 bg-yellow-400 rounded-full mt-1' />
              <p className='text-slate-600 leading-relaxed'>
                ติดตั้งแบตเตอรี่รถยนต์สันดาป / รถยนต์ไฟฟ้า พื้นที่ให้บริการ
                <span className='text-slate-900 font-semibold'> กรุงเทพฯ และจังหวัดสมุทรสาคร</span>
                <span className='ml-2 inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded'>ติดตั้งนอกสถานที่ฟรี*</span>
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <div className='w-1 h-6 bg-slate-200 rounded-full mt-1' />
              <p className='text-slate-600 leading-relaxed'>
                ติดตั้งแบตเตอรี่รถยนต์ยุโรป พื้นที่ให้บริการกรุงเทพฯ และปริมณฑล
                พร้อมโปรแกรมลงทะเบียนแบตเตอรี่ลูกใหม่ <span className='underline decoration-yellow-400 underline-offset-4'>ฟรีทุกเคส</span>
              </p>
            </div>
          </div>
          <div className='w-full md:w-auto'>
            <Link href="#contact" className='w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-black transition-colors'>
              สอบถามพื้นที่ให้บริการ
            </Link>
          </div>
        </div>
      </section>

      {/* <section className='w-full gap-4 px-4 max-w-7xl mx-auto '>
        <div className='flex justify-between gap-3'>
          <div className='rounded-full  border-black/40 border px-10 py-2 w-full text-center '>
            <h4 className='md:text-3xl text-2xl'>รถยนต์</h4>
          </div>
          <div className='rounded-full  border-black/40 border px-10 py-2 w-full text-center '>
            <h4 className='md:text-3xl text-2xl'>รถไฟฟ้า</h4>
          </div>
        </div>
      </section> */}
      <section className='w-full gap-4 px-4 max-w-7xl mx-auto flex md:flex-row flex-col'>
        <CardService
          title='รถยุโรป'
          href='/europe-car'
          image='/raw/images-tj/benzgbl (2).jpg'
        />
        <CardService
          title='รถไฟฟ้า'
          href='/electric-car'
          image='/raw/images-tj/showcase (24).jpg'
        />
        <CardService
          title='รถสันดาป'
          href='/engine-car'
          image='/raw/images-tj/showcase (18).jpg'
        />
      </section>

      {/* working step */}
      <section id='ourwork' className='w-full px-4 max-w-7xl mx-auto mt-16'>
        <div className='text-sm text-gray-700 text-center mb-2'>
          เราโฟกัสที่ความสะดวกของลูกค้า
        </div>
        <h3
          id='ourservice'
          className='text-4xl font-bold text-center mb-12 text-gray-900'
        >
          ขั้นตอนการให้บริการ
        </h3>

        <div className='flex flex-col md:flex-row justify-center md:items-start items-center gap-12 relative'>
          {steps.map((step, i) => (
            <div
              key={i}
              className='grid gap-3 justify-items-center justify-center text-center max-w-[250px]'
            >
              <div
                className={`rounded-xl size-[90px] ${i == 1 ? 'bg-[var(--primary)]' : 'bg-gray-50'
                  } shadow-lg p-4 flex justify-center items-center`}
              >
                {step.icon}
              </div>
              <div className='text-lg font-bold'>{step.title}</div>
              <div className='text-sm text-black/70'>{step.desc}</div>
            </div>
          ))}

          <div
            className='md:flex hidden md:w-[50%] md:h-10 h-[80%] w-10 md:border-t-5 border-r-5 border-dashed md:rounded-[100%] 
          border-[var(--primary)] absolute md:top-[20%] md:left-auto left-[40%] z-[-1]'
          ></div>
        </div>
      </section>

      {/* gallery */}
      <section
        id='gallery'
        className='w-full gap-4 px-4 max-w-7xl mx-auto mt-10'
      >
        <div className='text-sm text-gray-700 text-center mb-2'>
          ส่วนหนึ่งจากผลงานของเรา
        </div>
        <h3 className='text-4xl font-bold text-center mb-12 text-gray-900'>
          Gallery
        </h3>

        <Gallery />
      </section>
      {/* standard */}
      <section
        id='standard'
        className='w-full gap-4 px-4 max-w-7xl mx-auto mt-10'
      >
        <div className='text-sm text-gray-700 text-center mb-2'>
          ทุกการบริการของเรา
        </div>
        <h3 className='text-4xl font-bold text-center mb-12 text-gray-900'>
          มาตรฐานบริการในการตรวจเช็คและเปลี่ยนแบตเตอรี่
        </h3>

        <ol className='space-y-6 text-gray-800 text-lg list-decimal list-inside'>
          <li>
            สอบถามข้อมูลและอาการของรถเบื้องต้นจากลูกค้า เพื่อหาสาเหตุว่าเกิดจาก{' '}
            <strong>แบตเตอรี่เสื่อมสภาพ</strong>
            หรือเกิดจากปัญหาอื่น ๆ ของตัวรถ
          </li>
          <li>
            ช่างจะแนะนำ <strong>แบตเตอรี่ที่เหมาะสมตรงรุ่นรถ</strong>
            และตรงกับ <strong>ลักษณะการใช้งานของรถลูกค้า</strong>
          </li>
          <li>
            ก่อนทำการเปลี่ยนแบตเตอรี่ ช่างจะ{' '}
            <strong>ตรวจเช็คแบตเตอรี่ของลูกค้าก่อนทุกครั้ง</strong>
            เพื่อเป็นการยืนยันว่าแบตเตอรี่เสื่อมสภาพ
          </li>
          <li>
            ก่อนติดตั้งแบตเตอรี่ ช่างจะ <strong>ลงวันที่ติดตั้ง</strong>
            ลงบนแบตเตอรี่
            เพื่อให้ลูกค้าสามารถตรวจเช็คอายุการใช้งานเบื้องต้นได้ด้วยตนเอง{' '}
            <br />
            และติด <strong>สติกเกอร์ชื่อร้าน / เบอร์โทรศัพท์</strong>
            เพื่อสะดวกต่อการติดต่อทางร้าน
          </li>
          <li>
            ขณะติดตั้งแบตเตอรี่ มีการ <strong>สำรองระบบไฟ</strong>
            เพื่อให้ระบบทุกอย่างในรถยังคงเดิม ไม่ต้องมีการเซ็ตระบบใหม่ เช่น
            นาฬิกา วิทยุ เป็นต้น
          </li>
          <li>
            <strong>ขี้เกลือ</strong> ซึ่งเกิดจากการระเหยของน้ำกรด
            และเป็นสัญญาณบ่งบอกว่าแบตเตอรี่เสื่อมสภาพ <br />
            ช่างจะบริการ{' '}
            <strong>
              สเปรย์ทำความสะอาดขั้วแบตเตอรี่ ตัวล็อค และที่คาดแบตเตอรี่
            </strong>
          </li>
          <li>
            มีบริการตรวจเช็ค <strong>ไฟรั่ว / ไฟชาร์จ</strong>
            ของรถหลังการติดตั้งแบตเตอรี่
          </li>
          <li>
            ช่างจะแนะนำวิธีการ <strong>ดูแลรักษาแบตเตอรี่</strong> ที่ถูกต้อง
            เพื่อให้แบตเตอรี่ของท่านสามารถใช้งานได้นานยิ่งขึ้น
          </li>
        </ol>

        <p className='mt-8 text-sm text-gray-600 italic'>
          *หมายเหตุ: อายุการใช้งานของแบตเตอรี่ขึ้นอยู่กับหลายปัจจัย เช่น
          อายุรถยนต์, ความเสื่อมสภาพของสายไฟและชิ้นส่วนอื่น ๆ, การดูแลน้ำกลั่น,
          และลักษณะการใช้งานรถ (เช่น รถโดยสารสาธารณะ
          จะทำให้แบตเตอรี่เสื่อมเร็วกว่าปกติ)
        </p>
      </section>

      {/* Recent Article */}
      <section id='blog' className='w-full gap-4 px-4 max-w-7xl mx-auto mt-10'>
        <div className='text-sm text-gray-700 text-center mb-2'>
          อ่านสิ่งที่น่าสนใจ
        </div>
        <h3 className='text-4xl font-bold text-center mb-12 text-gray-900'>
          บทความล่าสุด
        </h3>

        <RecentArticle />
      </section>

      {/* Keywoed & tags */}
      <Tags tags={HomeTags}></Tags>

      <section className='w-full bg-[#0F0F0F] h-full gap-4 mt-10 text-white'>
        <div className='max-w-7xl mx-auto py-10 px-4 '>
          <h3 id='aboutus' className='text-4xl '>
            เกี่ยวกับเรา
          </h3>
          <p className='text-xl mt-5 font-light'>
            ติดตั้งแบตเตอรี่นอกสถานที่ฟรี**
          </p>
          <p className=' mt-5 font-medium text-lg'>เปิดให้บริการทุกวัน</p>
          <p className=' opacity-80 font-normal'>เวลา 9.00-19.00 น.</p>

          <p className=' mt-5 font-medium text-lg'>
            ติดต่อเราหรือเข้ารับบริการได้ที่
          </p>
          <p className='opacity-80 font-normal'>
            สาขาพระรามที่ 2 ซอย 62 (เคหะธน)
          </p>
          <p className='opacity-80 font-normal'>สาขาสุขสวัสดิ์ ซอย 30</p>
        </div>

        <div className='w-full  h-full bg-gray-300 min-h-[500px] '>
          <iframe
            className='w-full h-[500px]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.1199756919054!2d100.41617167485394!3d13.650465086730867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bddcab3d7c27%3A0xe96d12c5bdbfbb0b!2z4LiV4Lix4LmJ4LiH4LmD4LiI4LiC4Liy4Lii4LmB4Lia4LiV!5e0!3m2!1sth!2sth!4v1755339992804!5m2!1sth!2sth'
            loading='lazy'
          ></iframe>
        </div>
      </section>

      <section id="contact" className="w-full py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Editorial Text */}
          <div className="space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[var(--primary)] font-bold tracking-[0.2em] text-xs uppercase block mb-4"
              >
                Get in Touch
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                พร้อมดูแลคุณ <br />
                <span className="text-slate-400 font-light">ตลอดเวลาที่ต้องการ</span>
              </h2>
            </div>
            
            <p className="text-slate-500 text-lg leading-relaxed max-w-md font-light">
              ทีมงาน &quot;ตั้งใจขายแบต&quot; พร้อมให้บริการปรึกษาและติดตั้งแบตเตอรี่ด่วน 
              ครอบคลุมพื้นที่กรุงเทพฯ และปริมณฑล มั่นใจได้ในคุณภาพและราคา
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Service Hours</p>
                  <p className="text-slate-900 font-medium">เปิดบริการทุกวัน (โทรสอบถามเวลาให้บริการ)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Call Card */}
            <a 
              href="tel:+66994922889" 
              className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-between aspect-square group transition-transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">สายด่วนโทรเลย</p>
                <h3 className="text-2xl font-bold italic">099-492-2889</h3>
              </div>
            </a>

            {/* Line Card */}
            <a 
              href="https://line.me/R/ti/p/@318evmbw" 
              className="p-8 rounded-3xl bg-[#06C755] text-white flex flex-col justify-between aspect-square group transition-transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-2xl">
                  L
                </div>
                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-white/70 text-sm mb-1">แชทสอบถามทาง Line</p>
                <h3 className="text-2xl font-bold italic">ID: @tjbatt</h3>
              </div>
            </a>

            {/* Address Card (Spans 2 columns on small screens) */}
            <div className="sm:col-span-2 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="flex gap-5 items-start">
                <div className="size-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">หน้าร้านของเรา</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    44 ซอยพระราม 2 62 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพฯ 10150
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-900 hover:text-white transition-all">
                ดูแผนที่ Google Maps
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
    </main>
  )
}
