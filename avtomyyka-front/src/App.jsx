import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'


function App() {

  return (
    <>
    <Header />
    <Hero />
      <div className='bg-gradient-to-tl from-[#4f4f50] to-[#202020] h-screen'>
        <h1 className="text-5xl font-[Comfortaa]">
          Здарвова!
        </h1>
      </div>
    </>
  )
}

export default App
