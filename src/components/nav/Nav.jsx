import React from 'react'
import { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import {TbMessageCircle} from 'react-icons/tb'


export default function Nav() {
 const [activeNav, setactiveNav] = useState('#')
  return (
   <>
   <nav>
    
  
   <a href="#" onClick={()=>setactiveNav('#')}  className={activeNav==='#' ? 'active' : ' '}><AiOutlineHome/></a>
   <a href="#about" onClick={()=>setactiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
   <a href="#experience" onClick={()=>setactiveNav('#experience')} className={activeNav==='#experience'?'active':''}><RiServiceLine/></a>
   <a href="#portfolio" onClick={()=>setactiveNav('#portfolio')} className={activeNav==='#portfolio'?'active':''}><MdWorkOutline/></a>
   <a href="#contact" onClick={()=>setactiveNav('#contact')} className={activeNav==='#contact'?'active':''}><TbMessageCircle/></a>
   </nav>
   </>
  )
}
