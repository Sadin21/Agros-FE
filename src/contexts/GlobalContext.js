import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

  const navigate = useNavigate()

  const defaultLogin = {
    email: "",
    password: ""
  }

  const defaultRegister = {
    name: '',
    address: '',
    email: '',
    password: '',
    role: 'Customer',
  }

  const [myData, setMyData] = useState(null)
  const [allData, setAllData] = useState(null)
  const [login, setLogin] = useState(defaultLogin)
  const [wrongEmail, setWrongEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [fetchStatus, setFetchStatus] = useState(false)
  const [register, setRegister] = useState(defaultRegister)

  const handleInputLogin = (event) => {
    let value = event.target.value
    let name = event.target.name

    setLogin({ ...login, [name] : value })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (login.password.length >= 6) {
      setErrorPassword(false)
      setFetchStatus(true)
      
      axios.post("http://emdeapp.my.id/api/auth/login", login 
      )
      .then((res) => {
        setFetchStatus(false)
        if (res.status === 200) {
          setWrongEmail(false)
          let data = res.data
          Cookies.set('token', data.authorization.token, { expires: 1 })
          navigate('/')
        }
        setLogin(defaultLogin)
      })
      .catch((error) => {
        setFetchStatus(false)
        if (error.response.status === 401) {
          setWrongEmail("Email atau Password salah")
        }
      })
    } else {
      setErrorPassword(true)
      setLogin({ ...login, password: "" })
    }
  }

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
      axios.post("http://emdeapp.my.id/api/auth/register", register, {
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

  const isLoggedIn = (event) => {
    return Cookies.get('token') !== undefined
  }

  const fetchMyData = (event) => {

    axios.get(`http://emdeapp.my.id/api/customer/me`, {
        headers: {
          "Authorization": "Bearer " + Cookies.get('token')
        }
      })
      .then((res) => {
        let data = res.data
        setMyData(data.user)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const fetchUserData = (event) => {
    axios.get(`http://emdeapp.my.id/api/customer/query`, {
      headers: {
        "Authorization": "Bearer " + Cookies.get('token')
      }
    })
    .then((res) => {
      const allUsers = res.data.user;
      setAllData([ ...res.data.user ]);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://emdeapp.my.id/api/customer/delete/${id}`, {
      headers: {
        "Authorization": "Bearer " + Cookies.get('token')
      }
    })
    .then((res) => {
      setAllData(allData.filter((data) => data.id !== id))
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    if (isLoggedIn()) {
      fetchMyData();
      fetchUserData();
    }
  }, [])

  return (
    <GlobalContext.Provider value={
      {
        myData,
        allData,
        login,
        wrongEmail,
        errorPassword,
        fetchStatus,
        fetchMyData,
        fetchUserData,
        register,
        setRegister,
        handleInputLogin,
        handleLogin,
        handleInputRegister,
        handleRegister,
        handleDelete
      }
    }>
      {props.children}
    </GlobalContext.Provider>
  )

}