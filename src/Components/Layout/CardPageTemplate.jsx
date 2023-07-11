import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './CardPage.css'
import Box from '../SearchBox/Box';
import AtIcon from '../../assets/at-icon.svg'
import PhoneIcon from '../../assets/phone-icon.svg'
import Button from '../SearchBox/Button';
import HashIcon from '../../assets/hash-icon.svg'
import PopUp from './CardPagePopUp';
import ArrowRight from '../../assets/arrow-right.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
function CardPageTemplate({title, desc, img1, img2, img3, img4}) {
    const [nameInput, setnameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneInput, setphoneInput] = useState("");
    const [index, setIndex] = useState(0);
    const images = [img1,img2,img3,img4]
  return (
    <div className='card-page'>
        <Header/>
      <div className="slider ">
        <div className="container">
            <div className="banner-container">
                <img className='arrow-left' src={ArrowLeft} alt="" onClick={()=>{
                    if(index != 0){
                        setIndex(index - 1)
                    }else{
                        setIndex(3)
                    }
                }}/>
                <img className='banner-img' src={images[index]} alt="" />
                <img className='arrow-right' src={ArrowRight} alt="" onClick={()=>{
                    if(index != 3){
                        setIndex(index + 1)
                    }else{
                        setIndex(0)
                    }
                }}/>

            </div>
         </div>
      </div>
      <main>
        <div className="container">
            <h3 className='title'>{title}</h3>
            <p className='desc'>{desc}</p>
        </div>
        <div className="paymentBox container">
        <form
        className="wrapper"
onSubmit={(e)=>{
    e.preventDefault();
    if(nameInput != '' && emailInput != "" && phoneInput != ''){
        console.log("done");
        document.querySelector(".paymentBox").style.display = "none";
            document.querySelector(".payment-popUp").style.display = "block";
    }else if(nameInput == '' || emailInput == '' || phoneInput ==""){
        document.querySelector("label").innerText =
              "Fill All The Inputs To Submit Your Order.";
            document.querySelector("label").classList.add("pry-color")
            document.querySelector("label").style.fontSize = '10px'
    }
}}
      >
        <Box
          label="Your Name."
          name="name"
          type="text"
          placeholder="Shady..."
          icon={HashIcon}
        onChange={(e)=>{
            setnameInput(e.target.value)
        }}
        />
        <Box
          label="Your E-mail."
          name="mail"
          type="e-mail"
          placeholder="Example@Mail.Com"
          icon={AtIcon}
            onChange={(e)=>{
                setEmailInput(e.target.value)
            }}
        />
        
        <Box
          label="Your Phone Number."
          name="phoneNumber"
          type="number"
          placeholder="+1 --------"
          icon={PhoneIcon}
          onChange={(e)=>{
            setphoneInput(e.target.value)
        }}
        />
        <div className="input-parent">
          <Button title="Submit" type="submit" />
        </div>
      </form>
        </div>

        <PopUp/>
        
      </main>
     
      <Footer/>
    </div>
  )
}

export default CardPageTemplate
