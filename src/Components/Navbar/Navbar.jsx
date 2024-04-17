import styles from "./navbar.module.scss"
import { CiMenuBurger } from "react-icons/ci";
// import image from 'next/image'
import logo from "../../images/logo1.png"
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [popup, setPopup] = useState(false);


  const togglePopup = () => {
    setPopup(!popup)
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
       <div className={styles.icon} onClick={togglePopup}>
         <span>
           <CiMenuBurger/>
         </span>
       </div>
       <div className={styles.links}>
          <p>الرئسيه</p>
          <p>من نحن</p>
          <p>اتصل بنا</p>
          <p>الدعم الفني</p>
          <p>ارقام التشغيل</p>
          <p>ساسيه الخصوصيه</p>
       </div>
       <div className={styles.logo}> 
          <Image src={logo} alt="photo" />
       </div>
    </div>
    </>
  )
}

export default Navbar
