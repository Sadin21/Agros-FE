import { useContext } from "react"
import Footer from "../components/Footer"
import { InputForm, InputForm2 } from "../components/InputForm"
import { MainText } from "../components/MainText"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"

function Login() {

  const { handleInputLogin, handleLogin, login } = useContext(GlobalContext)

  return (
    <>
      <Navbar />
      <div className="App pt-36 w-[85%] md:w-[76%]">
        <section className="mb-20">
          <MainText text1={"Masuk Sekarang"} />
          <p className="text-sm md:text-lg py-4 md:py-8">Masuk dan nikmati fitur kami</p>
          <form className="w-full" onSubmit={handleLogin}>
            <div className="md:flex md:gap-5">
              <InputForm title={"Email"} value={login.email} onChange={handleInputLogin} type={"text"} name={"email"} placeholder={"Contoh: bambang@gmail.com"}  />
              <InputForm2 title2={"Password"} value2={login.password} onChange2={handleInputLogin} type2={"password"} name2={"password"} placeholder2={""}  />
            </div>
            <button
              className="w-full md:w-1/2 p-4 text-base font-semibold text-white bg-[#459467] rounded-lg shadow-md md:me-10"
              type={'submit'}
            >
              Masuk Sekarang
            </button>
          </form>
        </section>
        <section className="mb-28">
          <MainText text1={"Cerita Kerabat AGROS"} />
          <div className="grid md:grid-cols-3 my-10 place-items-center">
            <div className="mb-10 md:mb-0">
              <img src="./assets/imgs/arah.png" alt="" className="w-full"></img>
            </div>
            <div className="md:col-span-2 md:w-2/3 text-center md:text-start">
              <p className="text-sm md:text-lg ">Terinspirasi dari arah mata angin yang membawa pada satu destinasi, Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa menjadi penghubung para stakeholders dalam aktivitas muatan berat, mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan buyer intermoda yang menjangkau seluruh penjuru Nusantara.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Login