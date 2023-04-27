import { useState } from "react";
import {db} from "../firebase"
import { addDoc, collection } from "@firebase/firestore";

function Modal({ modal, user, closeModal }) {
  const initialValues = {
    name:'',
    email:'',
    mentor: '',
    date: '',
    comment:'',
  }
  const [isSelected, setIsSelected] = useState(false);
  const [form, setForm] = useState(initialValues);
  const [message, setMessage] = useState(false)
  
  const handleFormChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const inputValue = {
      ...form, [name]: value
    }
    setForm(inputValue)
  }
  const handleSelectOption = (event) => {
    setIsSelected(true)
    handleFormChange(event)
  }
  //handle form submit 
  const handleSubmit = (event) => {
    event.preventDefault();
    //pass firebase Database and Collection name as argument 
    const dbRef = collection(db, "mentor");
    //pass dbref and data that will be added to collection
    addDoc(dbRef, form)
      //using docRef created 
      .then(docRef => {
        setMessage(true)
        setTimeout(() => closeModal(), 1000) 
      })
      //error handler
      .catch(error => {
        console.log(error);
      })
      
      setForm(initialValues)
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className={`${
          modal ? "flex" : "hidden"
        } flex-col gap-4 fixed left-0 right-0 top-0 bottom-0 m-auto w-[90%] sm:w-[40%] h-[500px] min-w-[250px] box-shadow bg-primary-deep z-[1000] p-5  sm:p-10 rounded-md`}
      >
      <p className={`text-white font-bold ${message ? 'inline' : 'hidden'}`}>Mentor Successfully successfully booked</p>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Full Name"
          className="focus:outline-none focus:shadow-outline p-2.5 rounded-[5px] hover:border-gray-500 border"
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="focus:outline-none focus:shadow-outline p-2.5 rounded-[5px] hover:border-gray-500 border"
          value={form.email}
          onChange={handleFormChange}
        />
        <select
          className={`w-full appearance-none border hover:border-gray-500 p-2.5 rounded-[5px] shadow leading-tight focus:outline-none focus:shadow-outline ${
            isSelected ? "text-black" : "text-gray-400"
          }`}
          onChange={handleSelectOption}
          defaultValue="Default"
          value={form.select}
          name="mentor"
          >
          <option value="Default" disabled>
            Select Mentor
          </option>
          {user.map((userName, index) => (
            <option value={userName.name} key={index} className="text-black">
              {userName.name}
            </option>
          ))}
        </select>
        <input 
          type="datetime-local" 
          name="date"
          placeholder="mm/dd/yyyy hh:mm:ss"
          className={`w-full focus:outline-none focus:shadow-outline pb-4 pt-1 px-2.5 sm:pt-2 sm:pb-5 rounded-[5px] hover:border-gray-500 border ${isSelected ? "text-black" : "text-gray-400"}`}
          value={form.date}
          onChange={handleSelectOption}  
          />
        <textarea
          name="comment"
          cols="30"
          rows="10"
          className="focus:outline-none focus:shadow-outline p-2.5 rounded-[5px] border hover:border-gray-500"
          placeholder="Comment"
          value={form.comment}
          onChange={handleFormChange}>
          </textarea>
          <div className="flex justify-between">
            <button type="submit">Submit</button>
            <button onClick={closeModal}>Close</button>
          </div>
      </form>
    </>
  );
}

export default Modal;
