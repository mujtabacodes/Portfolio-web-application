import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'


export default function Toast() {
  return (
    <>
    <BsCheckCircleFill color='green' height={100}/> 
    <span style={{padding:'.5rem'}}> Form submitted successfully! </span>
    </>
  )
}
