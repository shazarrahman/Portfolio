import React from 'react'
import './certificate.css'
import CERT1 from '../../asset/cert1.jpg'
import CERT2 from '../../asset/cert2.jpg'
import CERT3 from '../../asset/cert3.jpg'
import CERT4 from '../../asset/cert4.jpg'
import CERT5 from '../../asset/cert5.jpg'
import CERT6 from '../../asset/cert6.jpeg'
import PDF1 from '../../asset/pdf1.pdf'
import PDF2 from '../../asset/pdf2.pdf'
import PDF3 from '../../asset/pdf3.pdf'
import PDF4 from '../../asset/pdf4.pdf'
import PDF5 from '../../asset/pdf5.pdf'
const certificate = () => {
  return (
    <section id="certificate">
     <h5>Certified Skills</h5>
     <h2>Certificates</h2>

     <div className="container certificate__container">
       <article className="certificate__item">
         <div className="certificate__item-image">
          <img src={CERT2} alt=""/>
         </div>
         <h3>ReactJS Course Completion Certificate by Infosys / Springboard</h3>
         <div className="certificate__item-cta">
         <a href={PDF2} className="btn btn-primary" target="_blank">View</a>
         </div>
       </article>
       <article className="certificate__item">
         <div className="certificate__item-image">
          <img src={CERT3} alt=""/>
         </div>
         <h3>Web Development Internship Completion Certificate By TwoWaits Pvt. Ltd.</h3>
         <div className="certificate__item-cta">
         <a href={PDF3} className="btn btn-primary" target="_blank">View</a>
         </div>
       </article>
       <article className="certificate__item">
         <div className="certificate__item-image">
          <img src={CERT6} alt=""/>
         </div>
         <h3>Web Development & Designing Internship Certificate By The Spark Foundation</h3>
         <div className="certificate__item-cta">
         <a href="https://truecertificates.com/verified/PDPZRNPNMG" className="btn btn-primary" target="_blank">View</a>
         </div>
       </article>
       <article className="certificate__item">
         <div className="certificate__item-image">
          <img src={CERT5} alt=""/>
         </div>
         <h3>Frontend Web Development Internship Offer Letter from LynxArch Technologies</h3>
         <div className="certificate__item-cta">
         <a href={PDF5} className="btn btn-primary" target="_blank">View</a>
         </div>
       </article>
       <article className="certificate__item">
         <div className="certificate__item-image">
          <img src={CERT4} alt=""/>
         </div>
         <h3>Innovate India Coding Championship Certificate by Chandigarh University</h3>
         <div className="certificate__item-cta">
         <a href={PDF4} className="btn btn-primary" target="_blank">View</a>
         </div>
       </article>
       <article className="certificate__item">
         <div className="certificate__item-image">
          <img src={CERT1} alt=""/>
         </div>
         <h3>Complete JavaScript Course Completion Certificate by Udemy</h3>
         <div className="certificate__item-cta">
         <a href={PDF1} className="btn btn-primary" target="_blank">View</a>
         </div>
       </article>
       </div>
   </section>
  )
}

export default certificate
