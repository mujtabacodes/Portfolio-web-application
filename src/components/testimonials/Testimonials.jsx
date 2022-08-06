import React from 'react'
import './testimonials.css'
import fi_avator from './../../assets/images/fiverr-avator.PNG'
import up_avator from './../../assets/images/upwork-avator.PNG'


const dataApi=[
  {
  id:1,
  avator:fi_avator,
  name:"Racha Adel  website",
  comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
 
},
  {
  id:2,
  avator:up_avator,
  name:"Racha Adel  website",
  comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
 
},
  {
  id:3,
  avator:fi_avator,
  name:"Racha Adel  website",
  comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
 
},
  {
  id:4,
  avator:up_avator,
  name:"Racha Adel  website",
  comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore dicta? Totam alias possimus laborum? Ab accusantium eius vel aspernatur amet nisi iure! Ab officiis maiores voluptas in labore  ",
 
},


]


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
      {
        dataApi.map(({id,avator,name,comment})=>{
          return(
            <article key={id} className="testimonial">
            <div className="client__avator">
              <img src={avator} alt="" />
            </div>
            <div>
              <h5 className="client__name">
                {name}
              </h5>
              <small className="client__comment">{comment}</small>
            </div>
          </article>
  
          )
        })
      }

        {/* ========================== */}

     


        {/* ========================== */}
      </div>


    </section>
  )
}
