import axios from 'axios';
// const baseURL='http://localhost:5000';
const baseURL='https://mujtaba-resume.herokuapp.com';
// ========================portfolio===============================
const addportfolio=baseURL+'/api/portfolio/add';
const getportfolio=baseURL+'/api/portfolio/get';
// get request
// console.log("To get portfolio use:"+getportfolio)
export const  fetchPortfolio=()=>axios.get(getportfolio); 
// create request
export const createPortfolio=(newPortfolio)=>axios.post(addportfolio,newPortfolio);














// =======================testimonials============================
const addtestimonial=baseURL+'/api/testimonial/add'
const gettestimonial=baseURL+'/api/testimonial/get'

// get request
console.log("To get testimonials use:"+gettestimonial)
export const  fetchTestimonial=()=>axios.get(gettestimonial); 
// create request

export const createTestimonial=(newTestimonial)=>axios.post(addtestimonial,newTestimonial);