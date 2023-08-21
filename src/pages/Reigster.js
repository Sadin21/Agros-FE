import { useState } from "react"
import Footer from "../components/Footer"
import { InputForm, InputForm2 } from "../components/InputForm"
import { MainText } from "../components/MainText"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"

function Register() {

  let navigate = useNavigate()
  
  const defaultRegister = {
    name: '',
    address: '',
    email: '',
    password: '',
    role: 'Customer',
  }

  const defaultLogin = {
    email: "",
    password: ""
  }

  const [register, setRegister] = useState(defaultRegister)
  const [login, setLogin] = useState(defaultLogin)
  const [wrongEmail, setWrongEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [fetchStatus, setFetchStatus] = useState(false)

  const handleInputRegister = (event) => {
    let name = event.target.name
    let value = event.target.value

    if (name === "name") {
      setRegister({ ...register, name: value })
    } else if (name === "address") {
      setRegister({ ...register, address: value })
    } else if (name === "email") {
      setRegister({ ...register, email: value })
    } else if (name === "password") {
      setRegister({ ...register, password: value })
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (register.password.length >= 6) {
      setErrorPassword(false);
      setFetchStatus(true);
      console.log(register);
      axios.post("http://127.0.01:8000/api/auth/register", register, {
        headers: {
          "Authorization": "Bearer " + Cookies.get('token')
        }
      })
      .then((res) => {
        setFetchStatus(false);
        if (res.status === 200) {
          navigate("/");
          setWrongEmail(false);
        }
        setRegister(defaultRegister);
      })
      .catch((error) => {
        setFetchStatus(false);
        if (error.response.status === 400) {
          setWrongEmail("Email tidak valid");
        }
      })
    } else {
      setErrorPassword(true);
      setRegister({ ...register, password: "" });
    }
  };

  // const handleRegister = async (event) => {
  //   try {
  //     const res = await axios.post("http://127.0.01:8000/api/auth/register", register)
  //     console.log(res)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <Navbar />
      <div className="App pt-36 w-[85%] md:w-[76%]">
        <section className="mb-20">
          <MainText text1={"Daftar Sekarang"} />
          <p className="text-sm md:text-lg py-4 md:py-8">Mari bergabung bersama Kerabat AGROS Indonesia lainnya.</p>
          <form className="w-full" onSubmit={handleRegister}>
            <div className="md:flex md:gap-5">
              <InputForm title={"Nama Lengkap Kerabat"} value={register.name} onChange={handleInputRegister} type={"text"} name={"name"} placeholder={"Contoh : Bambang"}  />
              <InputForm title={"Asal Kota"} value={register.address} onChange={handleInputRegister} type={"text"} name={"address"} placeholder={"Contoh : Pekalongan"}  />
            </div>
            <div className="md:flex md:gap-5">
              <InputForm title={"Email"} value={register.email} onChange={handleInputRegister} type={"text"} name={"email"} placeholder={"Contoh: bambang@gmail.com"}  />
              <InputForm title={"Password"} value={register.password} onChange={handleInputRegister} type={"password"} name={"password"} placeholder={"******"}  />
            </div>
            <div className="md:flex md:gap-5">
              <InputForm2 title2={"Role"} value2={register.role} onChange2={handleInputRegister} type2={"text"} name2={"role"} placeholder2={"Radio Select: Super Admin / Customer"}  />
            </div>
            <button
              className="w-full md:w-1/2 p-4 text-base font-semibold text-white bg-[#459467] rounded-lg shadow-md"
              type="submit"
            >
              Gabung Sekarang
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

export default Register