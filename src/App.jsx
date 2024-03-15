import { useState } from "react"
import BookMark from "./BookMark/BookMark"
import Blogs from "./blogs/Blogs"
import Header from "./header/Header"
import { toast } from 'react-toastify';


function App() {

const [Book,setBookMark]=useState([])

const handleBookmark=(data)=>{

  const remaining=Book.find((V)=>V.id==data.id)
  if(remaining){return toast.error("Already selected", {
    position: "top-center"
  });}
  setBookMark([...Book,data])


}

const [reading,setRead]=useState(0)

function markAsRead(reading_time){
  setRead(reading+reading_time)
  const filterRead=Book.filter((v)=>v.reading_time!==reading_time) 
  setBookMark(filterRead)
}


  return (
    <>
      <Header/>

      <main className="lg:max-w-7xl mx-auto my-20 flex flex-col-reverse md:flex-row gap-20">

      <Blogs handleBookmark={handleBookmark} markAsRead={markAsRead}/>
      <BookMark BookMark={Book} reading={reading}/>

      </main>
    </>
  )
}

export default App
