import { FC } from 'react';

interface IProps {
    header:string;
    description:string;
    num:number;
    haveBorder?:boolean
}


const Boxes :FC<IProps> = ({header,description,num, haveBorder = true}) => {
  return (
    <div className={`rounded-md flex-1 relative flex flex-col justify-center px-8  
    py-16 ${haveBorder && "border"}`}>
                <h4 className=" font-bold text-lg">{header}</h4>
                <p className=" mt-2 text-gray-600">{description}</p>
                <span className=" absolute top-5 right-11 text-9xl font-bold
                 text-gray-200 -z-10 animate-pulse
                ">{num}</span>
           
    </div>
  )
}

export default Boxes