"use client"
import styles from "./navbar.module.scss"
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../../images/logo1.png"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { BiX } from "react-icons/bi";

function Navbar() {
  const [popup, setPopup] = useState(false);
  const [hide, setHide] = useState(false);


  const togglePopup = () => {
    setPopup(!popup)
  }

  const toggleHide = () => {
    setHide(false)
  }

  const toggleShow = () => {
    setHide(true)
  }

  return (
    <>
    {   
      popup ? 
      <div className="popup" onClick={togglePopup}>
        <div className="message" onClick={togglePopup}>
              <h2>مرحبا معك سيد </h2>
              <p>لم ابلغ بهذه الوظيفه بعد اترك لي تفاصيل اكثر و سوف ننجزها لك <br/> اذ ارد اغلاق هذه الرساله اضغط علي اي مكان في الشاشه</p>
        </div>
      </div> : null
    }
    <div className={styles.nav}>
       <div className={styles.icon} onClick={toggleShow}> 
       <span>
           <CiMenuBurger/>
         </span>    
       </div>
       <div className={styles.links} >
        <Link href="/"><p>الرئسيه</p></Link>
        <Link href="/WhoAreWe"><p>من نحن</p></Link>
        <Link href="/Call"><p>اتصل بنا</p></Link>
        <Link href="/support"><p>الدعم الفني</p></Link>
        <Link href="/Operating"><p>ارقام التشغيل</p></Link>
        <Link href="/Privacy"><p>ساسيه الخصوصيه</p></Link>
       </div>
       <div className={styles.logo}> 
          <Image src={logo} alt="photo" />
       </div>
    </div>

    { 1 == 1 ? 
          <div className={`${styles.smallNav}  ${!hide ? styles.Hide :""}`}>
            <div className={styles.close}><span onClick={toggleHide}><BiX /></span></div>
            <div className={`${styles.box__smallNav }`}>
            <Link href="/"><p onClick={toggleHide}>الرئسيه</p></Link>
            <Link href="/WhoAreWe"><p onClick={toggleHide}>من نحن</p></Link>
            <Link href="/Call"><p onClick={toggleHide}>اتصل بنا</p></Link>
            <Link href="/support"><p onClick={toggleHide}>الدعم الفني</p></Link>
            <Link href="/Operating"><p onClick={toggleHide}>ارقام التشغيل</p></Link>
            <Link href="/Privacy"><p onClick={toggleHide}>ساسيه الخصوصيه</p></Link>
            </div>
          </div> : null
        }
    </>
  )
}

export default Navbar
