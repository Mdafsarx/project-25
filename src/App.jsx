import BookMark from "./BookMark/BookMark"
import Blogs from "./blogs/Blogs"
import Header from "./header/Header"

function App() {

  return (
    <>
      <Header/>

      <main className="lg:max-w-7xl mx-auto my-20 flex flex-col-reverse md:flex-row gap-20">

      <Blogs/>
      <BookMark/>

      </main>
    </>
  )
}

export default App
