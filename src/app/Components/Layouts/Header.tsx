import Link from 'next/link'
import logo from '/public/logo.png'
import Image from 'next/image'
import Wrapper from '../Shared/Wrapper'

const Header = () => {
  return (
    <Wrapper>
    <header className=" flex justify-between bg-slate-100 rounded-lg  py-4 sticky top-0 items-center
    bg-gradient-to-br from-gray-50 via-teal-100 to-blue-400 ">
    

        {/*logo*/}
        <div>
        <Image src={logo} alt="Panaverse Logo"/>
        </div>
        {/*list */}
        <ul className="flex space-x-8 font-medium">
            <li>
                <Link href={"/"}>
                Home
                </Link>
            </li>
            <li>
            <Link href={"/courses"}>
                Courses
            </Link>   
            </li>
        </ul>
    </header>
    </Wrapper>
  )
}

export default Header