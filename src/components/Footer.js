function Footer() {
  return (
    <footer className="w-full fixed-bottom bottom-0">
      <div className="relative flex align-middle content">
        <img src="./assets/imgs/banner.png" alt="" className="object-cover w-full h-[12vh] md:h-[5vh]"></img>
        <div className="absolute top-5 md:top-1/3 w-full flex justify-center">
          <div className="w-[85%] md:w-[76%] md:flex justify-between">
            <img src="./assets/imgs/logo-mini.png" alt="" className="object-cover w-50 h-[2vh]"></img>
            <p className="text-sm text-white opacity-70 my-2 md:my-0">PT ANTAR GLOBAL PROSPERO © 2021. All rights reserved.</p>
            <div className="flex gap-5">
              <p className="text-sm text-white opacity-80">Syarat & Ketentuan</p>
              <p className="text-sm text-white opacity-80">Kebijakan Privasi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer