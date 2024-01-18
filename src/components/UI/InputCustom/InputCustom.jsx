import React from 'react'

import './InputCustom.scss'

const InputCustom = ({ value, onChange, placeholder, style = null, type = 'text' }) => {
  return (
    <>
      <input className="input" style={style} placeholder={placeholder} value={value} onChange={onChange} type={type} />
    </>
  )
}

export default InputCustom
