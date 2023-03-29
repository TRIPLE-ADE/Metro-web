import DashCircle from "./DashCircle"

function MainCircle({user, currentUser}) {
  return (
    <section className="w-[90%] m-auto absolute  md:left-[25%] bottom-48 rounded-full bg-primary-light h-[70rem] overflow-hidden">
        <DashCircle user={user} currentUser={currentUser}/>
    </section>
  )
}

export default MainCircle