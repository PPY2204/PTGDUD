import MainLayout from './layouts/MainLayout/MainLayout'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css'

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <button>Click</button>
        <Footer />
      </MainLayout>
    </>
  )
}

export default App
