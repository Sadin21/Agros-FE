import { Card } from "../components/Card";
import Footer from "../components/Footer";
import { MainText, SubText } from "../components/MainText";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="App pt-36 w-[85%] md:w-[76%]">
        <section className="mb-20">
          <div className="relative">
            <img src="./assets/imgs/banner.png" alt="" className="object-cover w-full h-[35vh] md:h-[32vh] rounded-2xl"></img>
            <div className="absolute top-8 px-8 md:px-12 text-white md:w-2/3">
              <MainText text1={"Selamat datang, Kerabat!"} />
              <p className="text-sm md:text-lg py-6 md:py-8">Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik Anda. <br /> Melayani dengan sepenuh hati untuk kenyaman Anda dan keamanan barang sampai pada tujuan.<br /> Silakan melakukan pendaftaran untuk dapat menikmati layanan kami.</p>
              <div className="flex gap-5">
                <button className=" px-6 py-2 transition ease-in duration-200 uppercase rounded-lg hover:bg-white hover:text-black border-2 border-white focus:outline-none">
                    Masuk
                </button>
                <button className=" px-6 py-2 transition ease-in duration-200 uppercase rounded-lg bg-white text-[#79C375]">
                    Daftar
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-28">
          <MainText text1={"Mengenal AGROS Indonesia Lebih Dekat"} />
          <p className="text-sm md:text-lg py-6 md:py-8">Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan transparansi sistem transportasi, kemudahan akses untuk layanan pemeliharaan hingga fitur transaksi. </p>
          <SubText text2={"Layanan AGROS Indonesia"} />
          <div className="md:columns-3">
            <Card cardImg={"./assets/imgs/card1.png"} cardTitle={"AGROS Shipper"} cardText={"Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan"} />
            <Card cardImg={"./assets/imgs/card2.png"} cardTitle={"AGROS Transporter"} cardText={"Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat mendapatkan keuntungan tanpa harus melakukan hal berat."} />
            <Card cardImg={"./assets/imgs/card3.png"} cardTitle={"AGROS Driver"} cardText={"AGROS menawarkan keleluasaan untuk memilih proyek sehingga peningkatan pendapatan bukan lagi jadi impian."} />
          </div>
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
        <section className="mb-28">
          <MainText text1={"Mitra AGROS"} />
          <p className="text-sm md:text-lg my-10">Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan keamanan kepada para pelanggan setia AGROS Indonesia. Untuk melihat daftar pelanggan kami, silakan melakukan pendaftaran.</p>
          <div className="flex justify-center">
            <button className="px-6 py-2 transition ease-in duration-200 font-semibold rounded-lg text-white bg-[#459467]">
                Gabung Sekarang
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home;