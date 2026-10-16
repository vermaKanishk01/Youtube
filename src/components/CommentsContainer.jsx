const commentData = [
    {
        name: "kanishk verma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae!",
        replies: [],
    },
    {
        name: "kanishk verma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae!",
        replies: [
            {
                name: "kanishk verma",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae!",
                replies: [],
            }, {
                name: "kanishk verma",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae!",
                replies: [],
            },
        ],
    },
    {
        name: "kanishk verma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae!",
        replies: [],
    },
    {
        name: "kanishk verma",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae!",
        replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return <div className="flex items-center bg-gray-200 shadow-sm py-2 px-4 rounded-lg">
        <img className="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH0LzDqJTeorkc_ZfZUGGtjWrHOKqRzRLTAyr6TVZDg&s=10" alt="" />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} className="m-2">
            <Comment data={comment} />
            <div className="pl-2 border-l m-2 border-l-black ml-5">
                <Comment data={comment} />
                <Comment data={comment} />
                <Comment data={comment} />
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='mb-2 text-2xl font-bold'>Comments: </h1>
            <CommentsList comments={commentData} />
        </div>
    )
}

export default CommentsContainer;