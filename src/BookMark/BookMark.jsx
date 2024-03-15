import SingleBookMark from "../singleBook/SingleBookMark";

const BookMark = ({BookMark,reading}) => {
    return (
        <div className="lg:w-[30%] ">
            
<div className="bg-slate-300 p-5 rounded-2xl text-center">

<h4 className="font-bold text-purple-700 text-xl">Spent time on read : {reading} min</h4>

</div>

<div className="bg-slate-300 p-5 rounded-lg my-6">
    <h1 className="font-bold text-xl">Bookmarked Blogs : {BookMark.length}</h1>
    {
        BookMark.map((Book,idx)=><SingleBookMark Book={Book} key={idx}/>)
    }
</div>

        </div>
    );
};

export default BookMark;