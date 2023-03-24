import Button from "../Shared/Button"
import Wrapper from "../Shared/Wrapper"
import Boxes from "../Shared/Boxes"
import { Coretrackdata } from '../Shared/Coretrackdata';

const Coretracks = () => {
  const header = "Core Courses\n (Common in All Specializations):"
    return (
    <Wrapper>
    <section className=" mt-16 lg:mt-28">
        <div className="max-w-screen-sm">
            <h4 className="max-w-xl text-teal-800 text-lg font-semibold">Program of Studies</h4>
            <h2 className=" text-4xl font-bold whitespace-pre-line">{header}</h2>
            <p className=" max-w-2xl mt-1 pt-4 text-lg text-slate-600">Every participant of the program will start by completing the following three core courses:</p>
        </div>
        <div className="mt-5  ">
            <Button text="Learn More"/>
        </div>
        <div className="my-20 ">
            <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 
             ">
            {
            Coretrackdata.map((items)=> (
             
                <Boxes 
                key={items.num}  // for warning removal during compile
                header={items.header}
                description={items.desc}
                num={items.num}/>
                
            )
            
            )
            }    
                {/* <Boxes text="Quarter I" head="CS-101: Object-Oriented Programming using TypeScript, HTML, CSS, JAVA Script, GIT" num= '1' />
                <Boxes text="Quarter II " head="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" num= '2' />
                <Boxes te xt="Quarter III" head="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development" num= '3' />*/}
            
            </div>
        </div>
    </section>
    </Wrapper>
  )
}

export default Coretracks