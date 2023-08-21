import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full py-10 bg-white fixed">
      <div className="content flex justify-between w-[85%] md:w-[76%]">
        <a href="/">
          <img src="./assets/imgs/logo-brand.png" alt=""></img>
        </a>
        <ul className="">
          <div className="flex gap-8">
            <p className="f14 font-semibold"> <Link to="/about">TENTANG</Link> </p>
            <p className="f14 font-semibold">PROFILE</p>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar