import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Popular from "../components/popularSlider";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto bg-white">
        <section id="hero" className="relative flex flex-col items-center justify-center h-screen m-3 bg-top bg-cover rounded-xl bg-hero-placeir">
          <div className="absolute inset-0 bg-black rounded-xl opacity-35"></div>
          <h1 className="relative font-semibold text-center text-white px-[200px] text-8xl">
            Jelajahi Pesona Alam  Nusantara yang Menakjubkan
          </h1>
          <p className="relative text-2xl text-center px-[320px] text-white">Temukan destinasi menakjubkan di seluruh Nusantara. Rencanakan liburan  Anda sekarang dan temukan petualangan tak terlupakan di setiap sudut negeri.</p>
        </section>
        <section id="popular" className="w-full h-auto my-20">
          <Popular />
        </section>
        <section id="popular" className="w-full h-auto my-20">
          <Popular />
        </section>
      </main>
      <Footer />
    </>
  );
}