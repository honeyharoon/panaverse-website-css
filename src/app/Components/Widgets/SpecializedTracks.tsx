'use client'

import Boxes from "../Shared/Boxes"
import Wrapper from "../Shared/Wrapper"
//import SpecialData from "../Shared/SpecializedTrackData"
import { SpecialData } from '../Shared/SpecializedTrackData';
import Image from "next/image";
import { useState } from "react";

const SpecializedTracks = () => {

const [Selecteditem, setSelecteditem] = useState("wmd") // use state hook
const selecteddata = SpecialData.find((item) => item.slug === Selecteditem)


    return (
    <section>
    <Wrapper>
        <div>
            <div>
            <h2 className=" text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
            <p className=" max-w-screen-sm mt-1 pt-4 text-xl text-slate-600">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>  
            </div>

            <div className="mt-10 lg:flex-row flex-col flex gap-x-4 gap-y-6">
            <div className="  basis-8/12 shadow-xl border rounded-xl border-slate-200 py-8 px-6">
                <h4 className=" text-primary text-lg font-medium">Specialized Program</h4>
                <h3 className="text-2xl font-bold">{selecteddata?.header}</h3>
                <p className="text-lg text-slate-600 mt-2">{selecteddata?.description} </p>
                <button className="underline text-lg text-teal-700 mt-4 flex items-end gap-x-2" >learn More
                <svg className = "mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
                </svg>

                </button>
                <div className="flex flex-col md:flex-row gap-4 mt-8 animate-pulse">
                    {
                        selecteddata?.quarters.map((items) => (
                            <Boxes 
                            key={items.no}
                            header={items.header} 
                            description={items.desc}
                             num ={items.no} 
                             haveBorder = {false}/>
                        
                            ))

                    }
                    
                    

                    {/* <Boxes header="Quarter V" 
                    description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                     num ={5} 
                     haveBorder = {false}/> */}
                 </div>
                 </div>
            
                 <div className=" bg-white border rounded-xl basis-4/12 px-4 py-6
                  flex flex-col space-y-5 gap-x-4 cursor-pointer">
                    
                    {

                            SpecialData.map((item,i) => (

                    <div onClick = {() => setSelecteditem(item.slug)} key={item.slug}>
                   
                    <div className="flex gap-x-4 items-center">
                    {/* <div className=" w-20 h-16 rounded bg-slate-900 items-center"> */}
                    <Image src={item.images} alt={item.description}/>
                    {/* </div> */}
                    <div>
                        <h4 className=" text-primary font-medium">Specialized Program</h4>
                        <h3 className="text-xl font-semibold">{item.header}</h3>
                    </div>
                    </div>
                    </div>

                            ))

                    }

                    
                    
                   
              </div>
                 </div>  
        </div>
    </Wrapper>
    </section>
  )

}

export default SpecializedTracks