import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { MainText, SubText } from "../components/MainText";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="App pt-36 w-[85%] md:w-[76%]">
        <section className="mb-20">
          <MainText text1={"Tentang AGROS Indonesia"} />
          <div className="grid my-10 place-items-center">
            <div className="mb-10">
              <img src="./assets/imgs/arah.png" alt="" className="w-full"></img>
            </div>
            <div className="">
              <p className="text-sm md:text-lg text-center">Terinspirasi dari arah mata angin yang membawa pada satu destinasi, Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa menjadi penghubung para stakeholders dalam aktivitas muatan berat, mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan buyer intermoda yang menjangkau seluruh penjuru Nusantara.</p>
            </div>
          </div>
        </section>
        <section className="mb-28">
          <SubText text2={"Layanan AGROS Indonesia"} />
          <div className="md:columns-3">
            <Card cardImg={"./assets/imgs/card1.png"} cardTitle={"AGROS Shipper"} cardText={"Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan"} />
            <Card cardImg={"./assets/imgs/card2.png"} cardTitle={"AGROS Transporter"} cardText={"Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat mendapatkan keuntungan tanpa harus melakukan hal berat."} />
            <Card cardImg={"./assets/imgs/card3.png"} cardTitle={"AGROS Driver"} cardText={"AGROS menawarkan keleluasaan untuk memilih proyek sehingga peningkatan pendapatan bukan lagi jadi impian."} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About