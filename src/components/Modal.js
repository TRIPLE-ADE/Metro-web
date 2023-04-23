import { useState } from "react";

function Modal({ modal, user, closeModal }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <form
        action=""
        className={`${
          modal ? "flex" : "hidden"
        } flex-col gap-4 fixed left-0 right-0 top-0 bottom-0 m-auto w-[90%] sm:w-[40%] h-[500px] min-w-[300px] box-shadow bg-primary-deep z-[1000] p-10 rounded-md`}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="focus:outline-none focus:shadow-outline p-2.5 rounded-[5px] hover:border-gray-500 border"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="focus:outline-none focus:shadow-outline p-2.5 rounded-[5px] hover:border-gray-500 border"
        />
        <select
          className={`w-full appearance-none border hover:border-gray-500 p-2.5 rounded-[5px] shadow leading-tight focus:outline-none focus:shadow-outline ${
            isSelected ? "text-black" : "text-gray-400"
          }`}
          onChange={() => setIsSelected(true)}
          defaultValue="Default">
          <option value="Default" disabled>
            Select Mentor
          </option>
          {user.map((userName, index) => (
            <option value={userName.name} key={index} className="text-black">
              {userName.name}
            </option>
          ))}
        </select>
        <textarea
          name="comment"
          cols="30"
          rows="10"
          className="focus:outline-none focus:shadow-outline p-2.5 rounded-[5px] border hover:border-gray-500"
          placeholder="Comment"
        ></textarea>
        <div className="flex justify-between">
          <button>Submit</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </form>
    </>
  );
}

export default Modal;
