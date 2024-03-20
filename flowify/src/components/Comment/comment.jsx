import React from "react";

const Comment = ({ comment, user }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
        <div className="max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            <p className="text-gray-700 dark:text-gray-400">
                <span className="font-bold text-xl">"</span>
                <span className="text-center">{comment}</span>
                <span className="font-bold text-xl">"</span>
            </p>
            <div className="flex items-center justify-center mt-3">
                <img src={user.image} alt="Icon" className="w-12 h-12 rounded-full flex-shrink-0 mr-3" />
                <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user.name}</h3>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Comment;