import React from 'react'

const Dropdown = ({name, options, changeHandler}) => {
  return (
    <select name={name} id={name} onChange={changeHandler}>
      <option value="all">all</option>
      {options.map((item,index) => <option value={item}>{item}</option>)}
    </select>
  )
}

export default Dropdown