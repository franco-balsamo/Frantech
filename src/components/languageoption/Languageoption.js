import React from 'react'
import i18next from "i18next"
import "./language.css";


const languageFlag = {
  es: 'https://res.cloudinary.com/nahue/image/upload/v1680627795/bandera1_g7wizm.png',
  en: 'https://res.cloudinary.com/nahue/image/upload/v1680627795/bandera2_wzoe3n.png'
}

const Languageoption = () => {
  
  const handleChange = (code) => {
    i18next.changeLanguage(code);
  }

  const renderFlags = () => {
    return Object.keys(languageFlag).map(code => {
      return (
        <img 
          key={code} 
          src={languageFlag[code]} 
          alt="language flag"
          onClick={() => handleChange(code)}
          className='imgs_language'
        />
      )
    })
  }
  
  return (
    <div className='container_language'>
      {renderFlags()}
    </div>
  )
}


export default Languageoption