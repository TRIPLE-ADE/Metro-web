import { useState } from "react";
import {db} from "../firebase"
import { addDoc, collection } from "@firebase/firestore";
import {FaCircleNotch} from "react-icons/fa"

function Modal({ modal, user, closeModal, message, setMessage, isLoading, setIsLoading }) {
  const initialValues = {
    name:'',
    email:'',
    mentor: '',
    date: '',
    comment:'',
  }
  const [isSelected, setIsSelected] = useState(false);
  const [form, setForm] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState({message : ''})
 

  //handle form changes
  const handleFormChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    const inputValue = {
      ...form, [name]: value
    }
    setForm(inputValue)
    const error = {
      ...errorMessage, message : ''
    }
    setErrorMessage(error)
  }
  //handle select change event
  const handleSelectOption = (event) => {
    setIsSelected(true)
    handleFormChange(event)
  }

  //handle form submit 
  const handleSubmit = (event) => {
    //stop default form behavior
    event.preventDefault();
    //check if all inputs are empty
    try{
      //check if all inputs are empty
      if(Object.values(form).every(el => el === '')) throw new Error('Inputs')
      //check if the name is empty
      if(form.name === '') throw new Error('Name')
      //check if the email is empty
      if(form.email === '') throw new Error('Email')
      //check if the email is Valid
      if(!/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+]*/.test(form.email)) throw new Error('Valid')
      //check if a mentor is selected
      if(form.mentor === '') throw new Error('Mentor')
      //check if a date is selected
      if(form.date === '') throw new Error('Date')
      else{
          setIsLoading(true)
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
    }
    //handling error from all inputs
    catch(err){
      //Error mesage for input
      const inputError = {
        ...errorMessage, message : `${err.message} field cannot be empty`
      }
      //Eror mesage for select field
      const selectError = {
        ...errorMessage, message : `${err.message} field needs to be selected`
      }
      //Invalid Input Error Message
      const InvalidInputError = {
        ...errorMessage, message : `Please Enter a ${err.message} Email`
      }
      if(err.message === 'Inputs') setErrorMessage(inputError)
      if(err.message === 'Name') setErrorMessage(inputError)
      if(err.message === 'Email') setErrorMessage(inputError)
      if(err.message ==='Valid') setErrorMessage(InvalidInputError)
      if(err.message === 'Mentor') setErrorMessage(selectError)
      if(err.message === 'Date') setErrorMessage(selectError) 
    }
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
        <p className={`text-white text-sm font-bold text-center -mb-5 ${message ? 'inline' : 'hidden'}`}>Mentor Successfully successfully booked</p>
        <p className="text-red-600 text-sm font-bold text-center -mb-2">{errorMessage.message}</p>
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
            <button onClick={closeModal} disabled={isLoading ? true : false} className="bg-gray-300 rounded-sm px-4 py-1 w-24 font-medium hover:text-primary-deep">Close</button>
            <button type="submit" disabled={isLoading ? true : false} className="bg-primary-light rounded-sm px-4 py-1 w-24 font-medium hover:text-primary-deep">Submit</button>
          </div>
          <FaCircleNotch className={`${isLoading ? 'block' : 'hidden'} text-4xl absolute top-0 left-0 right-0 bottom-0 m-auto animate-spin text-primary-dark`}/>
      </form>
    </>
  );
}

export default Modal;
