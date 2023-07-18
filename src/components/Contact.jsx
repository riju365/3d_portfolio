import { motion } from 'framer-motion'
import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef= useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name , value} = e.target;

    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
// template_09mittu
// service_mplcxwh
// SCu_YWwzbWkbe0NMn
    emailjs.send(
      'service_mplcxwh', 
      'template_09mittu',
      {
        form_name: form.name,
        to_name: 'Diya Dalui',
        form_email: form.email,
        to_email: 'mondalsay1413@gmail.com',
        message: form.message,
      },
      'SCu_YWwzbWkbe0NMn'
      )
      .then(() => {
        setLoading(false);
        alert("I'll get back to you soon!!!")
        setForm({
          name:'',
          email:'',
          message:'',
        },(error)=>{
          setLoading(false);
          console.log(error);
          alert('Something Went Wrong.')
        })

      })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl p-8'
      >
        <p className={styles.sectionSubText} >Wish Her!!</p>
        <h3 className={styles.sectionHeadText}>HAPPY BIRTHDAY</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="what's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none' />
          </label>

          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="what's your email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none' />
          </label>

          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="what's your message?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none' />
          </label>

          <button
            type='submit'
            className='bg-tertairy py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary text-white rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
        
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")