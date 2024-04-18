"use client"

import Image from 'next/image'
import styles from './page.module.scss'
import { CiSliderHorizontal } from "react-icons/ci";
import { BiSearch,} from "react-icons/bi";
import data from '../../src/app/api/store/data';
import { useEffect, useState } from 'react';





export default function Home() {

  const [popup, setPopup] = useState(false);


  const togglePopup = () => {
    setPopup(!popup)
  }

  
  return (
    <>
    <div className={styles.home} >
       <div className={styles.content}>
         <div className={styles.box}>
            <h1>الدليل الرقمي</h1>
            <div className={styles.input}>
               <span onClick={togglePopup}><CiSliderHorizontal/></span>
               <input type="text" />
               <span onClick={togglePopup}><BiSearch/></span>
            </div>
             <div className={styles.container__blog}>
             {
                data.length > 0 ? (
                  data.map((item,index) => (
                    <div className={styles.blog} key={index}>
                      <div className={styles.icon}>
                        <span>{item.icon}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.dis}</p>
                    </div>
                  ))
                ) : null
              }
            </div>
         </div>
       </div>
    </div>

    {   
      popup ? 
      <div className="popup" onClick={togglePopup}>
        <div className="message" onClick={togglePopup}>
              <h2>مرحبا معك سيد </h2>
              <p>لم ابلغ بهذه الوظيفه بعد اترك لي تفاصيل اكثر و سوف ننجزها لك <br/> اذ ارد اغلاق هذه الرساله اضغط علي اي مكان في الشاشه</p>
        </div>
      </div> : null
    }
    </>
  )
}


