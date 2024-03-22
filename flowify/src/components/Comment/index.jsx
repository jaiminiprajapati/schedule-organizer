import React, { useState, useEffect } from "react";
import Comment from "./comment.jsx";
import commentsData from './commentData.js';

// ReviewPage component to display user comments/testimonials
const ReviewPage = () => {
    // State for storing the list of comments
    const [comments, setComments] = useState([]);
    // State to keep track of the currently displayed comment
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    // Effect hook to set the comments from the commentsData when the component mounts
    useEffect(() => {
        console.log("Comments data:", commentsData);
        setComments(commentsData); // Load comments data into state
    }, []); // Empty dependency array means this effect runs only once after the initial render

    // Handler function for showing the next comment
    const handleNextComment = () => {
        setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    };

    // Handler function for showing the previous comment
    const handlePrevComment = () => {
        setCurrentCommentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
    };

    return (
        <div className="review-page py-16 relative bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="comments text-center mx-auto">
                    {/* Conditional rendering to display a comment if there are any */}
                    {comments.length > 0 && (
                        <div style={{ width: 'fit-content', margin: '0 auto' }}>
                            {/* Comment component displays the current comment and the user who made it */}
                            <Comment
                                comment={comments[currentCommentIndex].testimonial}
                                user={comments[currentCommentIndex].user}
                            />
                        </div>
                    )}
                </div>
                <div className="absolute inset-x-0 bottom-4 flex justify-between z-30 px-10">
                    {/* Previous comment button */}
                    <button
                        className="focus:outline-none text-white bg-second-color hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        onClick={handlePrevComment}
                    >
                        Previous
                    </button>
                    {/* Next comment button */}
                    <button
                        className="focus:outline-none text-white bg-second-color hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-second-color dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        onClick={handleNextComment}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ReviewPage;
