import React from "react";

function InfoCard({ title, amount, date, type, css, hidden, ondelete }) {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="mx-[2%]">
          <div className="bg-gradient-to-r from-purple-300 to-indigo-300 md:w-245 w-auto rounded-xl h-12 flex items-center justify-center ">
            <div
              className={`grid grid-cols-5 gap-4 items-center text-center md:text-xl ${css}`}
            >
              <div className="w-auto md:w-30 lg:w-60 h-auto break-words">
                {title}
              </div>
              <div className="w-auto md:w-30 lg:w-60 h-auto">
                {amount}
              </div>
              <div className="w-auto md:w-30 lg:w-60 h-auto">
                {date}
              </div>
              <div className="w-auto md:w-30 lg:w-60 h-auto">
                {type}
              </div>
              <button
                className={`bg-gradient-to-r from-purple-500 to-indigo-500 w-auto px-0.5 py-2 text-black rounded-xl font-semibold ${
                  hidden ? "hidden" : ""
                } `}
                onClick={ondelete}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-purple-400 w-full my-1 h-0.5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
