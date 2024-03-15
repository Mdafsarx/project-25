import { FaRegBookmark } from "react-icons/fa";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blog = ({data,handleBookmark,markAsRead}) => {

    const{cover,title,author_img,author,posted_date,reading_time,hashtags}=data
    return (

        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl ">
  <figure className="mb-6"><img src={cover} className="w-full"/></figure>
  <div className="flex items-center justify-between p-2">

    <div className="flex items-center gap-4">
        <img src={author_img} className="w-[50px]" alt="" />
           <div className="space-y-1"><h3 className="font-bold">{author}</h3><h4>{posted_date}</h4></div>
    </div>

     <div className="flex items-center gap-1">
     <p>{reading_time} min read</p>
     <FaRegBookmark onClick={()=>handleBookmark(data)}/>
     <ToastContainer />
     </div>

  </div>

  <div className="card-body">
    <h2 className="text-xl font-bold">{title}</h2>
    <div className=" flex items-center gap-3">
 
{
    hashtags.map((hash,index)=><span className="text-lg font-medium" key={index}>#{hash}</span>)
}

    </div>
  </div>
  <button className="btn btn-link justify-start text-lg" onClick={()=>markAsRead(reading_time)}>Mark as read</button>
</div>


        </div>

    );
};

export default Blog;