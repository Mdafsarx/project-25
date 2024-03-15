
const SingleBookMark = ({Book}) => {
    return (
        <div>
            <div className="bg-[#ffffff] p-2 shadow-xl rounded-xl my-4">
        <h4 className="text-lg font-medium text-black">{Book.title}</h4>
            </div>
        </div>
    );
};

export default SingleBookMark;