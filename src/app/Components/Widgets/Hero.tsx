import Wrapper from "../Shared/Wrapper"
import HeroPoster from "../../../Assets/Images/Hero-poster.png"
import Image from "next/image"
import Button from "../Shared/Button"


const Hero = () => {
  return (
    <section >
        <Wrapper>
            <div className="flex flex-col md:flex-row items-center" >
            <div className="flex-1">
                <h4 className="max-w-xl text-teal-800 text-lg font-semibold animate-bounce">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className="pt-2 text-6xl sm:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
                <p className=" max-w-2xl pt-4 text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet </p>
                <p className=" max-w-2xl mt-1 pt-4 text-lg text-slate-600">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
             <div className="mt-4">
             <Button text={"Enroll Here"}/>   
             </div>
             
            </div>

            <div className="flex-1">
                <Image src={HeroPoster} alt='heroposter' ></Image>
            </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Hero