import MainCircle from "./components/MainCircle";
import UserInfo from "./components/UserInfo";
import Button from "./components/Button";
import arrowImage from "./image/arrow-btn.png";
import prankurImage from "./image/prankur.png";
import keshavImage from "./image/keshav.png";
import saumyaImage from "./image/saumya.png";
import ankitaImage from "./image/ankita.png";
import sauravImage from "./image/saurav.png";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const users = {
    user1: {
      name: "Prankur Gupta",
      imageUrl: prankurImage,
      position: "SDE @Amazon",
      intro:"I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
    },
    user2: {
      name: "Saurav Pal",
      imageUrl: sauravImage,
      position: "SDE-2 @Amazon",
      intro: "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
    },
    user3: {
      name: "Saumya Singh",
      imageUrl: saumyaImage,
      position: "Software Engineer @Red Hat",
      intro: "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
    },
    user4: {
      name: "Keshav Bathla",
      imageUrl: keshavImage,
      position: "SDE-1 @Groww",
      intro: "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
    },
    user5: {
      name: "Ankita",
      imageUrl: ankitaImage,
      position: "ML-Engineer @Firework",
      intro: "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products.",
    },
  };
  const [user, setUser] = useState(Object.values(users));
  let [currentUser, setCurrentUser] = useState(0);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const handlePrev = () => {
    setUser(user)
    currentUser === user.length - 1
      ? setCurrentUser(0)
      : setCurrentUser(currentUser + 1);
  };
  const handleNext = () => {
    currentUser === 0
      ? setCurrentUser(user.length - 1)
      : setCurrentUser(currentUser - 1);
  };
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const closeModal = () => {
    setModal(false);
    setMessage(false)
    setIsLoading(false)
  };

  return (
    <>
      <main
        className={`font-body w-[100%] overflow-x-hidden pb-20 ${
          modal ? "filter blur-sm" : ""
        }`}
      >
        <MainCircle user={user} currentUser={currentUser} />
        <div className="grid grid-cols-3 place-items-center absolute top-[40%] left-0 right-0 m-auto md:w-fit md:left-[28rem] md:top-[52%]">
          <img
            src={arrowImage}
            alt=""
            width={30}
            onClick={handlePrev}
            className="hover:cursor-pointer z-[1000]"
          />
          <div className="grid place-content-center w-fit">
            <img
              src={user[currentUser].imageUrl}
              alt=""
              width={200}
              className="z-[1000]"
            />
            <Button
              bgColor="primary-light ml-6 mt-8 rounded-lg transform translate-x-[-5%] md:w-48"
              color="#C5F8C7"
              text={user[currentUser].name}
            />
          </div>
          <img
            src={arrowImage}
            alt=""
            width={30}
            onClick={handleNext}
            className="hover:cursor-pointer z-[1000] "
          />
        </div>
        <UserInfo
          user={user}
          currentUser={currentUser}
          handleModal={handleModal}
        />
      </main>
      <Modal modal={modal} user={user} closeModal={closeModal} message={message} setMessage={setMessage} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </>
  );
}

export default App;
