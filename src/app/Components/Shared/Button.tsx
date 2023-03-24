import { FC } from 'react';


const Button :FC<{text:string}> = ({text}) => {
  return (
    <button className=' bg bg-primary text-white font-medium px-8 py-3 rounded-full
     hover:shadow-lg text-xl hover:scale-110
    '>{text}</button>
  )
}

export default Button