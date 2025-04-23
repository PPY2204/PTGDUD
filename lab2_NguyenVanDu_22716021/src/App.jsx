import { useState } from 'react'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className="main-layout">
        <MainLayout>
          <>
            <Header />
            <Footer />
            <button onClick={incrementCount}>Increment Count</button>
            <p>Count: {count}</p>
          </>
        </MainLayout>
      </div>
    </>
  )
}

export default App
