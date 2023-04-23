import React from "react";
import Button from "./Button";
import ratingImage from "../image/ratings.png";

function UserInfo({ user, currentUser, handleModal }) {
  return (
    <div className="md:mt-40 w-[90%] m-auto pt-20 text-center mt-[31rem] md:w-[35%] md:text-left md:mx-0 md:pl-10">
      <p className="text-4xl font-semibold text-primary-dark ">5.0</p>
      <img
        src={ratingImage}
        alt=""
        width={120}
        className="m-auto my-3 md:mx-0"
      />
      <p className="text-3xl font-medium">{user[currentUser].name}</p>
      <p className="mt-3 mb-6 text-lg font-medium">
        {user[currentUser].position}
      </p>
      <p className="mb-8 text-justify">{user[currentUser].intro}</p>
      <Button
        bgColor="primary-dark shadow-[25px_15px_150px_#4CAF50]"
        text="Book a session"
        handleModal={handleModal}
      />
    </div>
  );
}

export default UserInfo;
