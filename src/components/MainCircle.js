import DashCircle from "./DashCircle";

function MainCircle({ user, currentUser }) {
  return (
    <section className="w-[100%] md:w-[90%] m-auto absolute left-0 right-0 md:left-[25%] bottom-[50%] md:bottom-48 rounded-full bg-primary-light h-[40rem]  md:h-[70rem] overflow-hidden">
      <div className="relative h-[50rem] w-[85%]">
        <DashCircle user={user} currentUser={currentUser} />
      </div>
    </section>
  );
}

export default MainCircle;
