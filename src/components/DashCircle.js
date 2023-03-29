
function DashCircle({user, currentUser}) {
  return (
    <div className='transform translate-y-[20%] sm:translate-y-[40%] w-[75%] translate-x-[18%] rounded-full h-[50rem] relative md:translate-y-[50rem]'>
    {/* <div className='transform translate-y-[50rem] w-[70%] md:translate-x-32 rounded-full h-[50rem] relative'> */}
      <svg viewBox="0 0 400 400" className="w-full h-full bg-transparent absolute">
          <circle cx="50%" cy="50%" r="50%" stroke="#4CAF50" strokeWidth='1' fill="transparent" strokeDasharray="4 10"></circle>
      </svg>
      <img src={user[currentUser].imageUrl} alt="" width={100} className='transform translate-x-[22rem] -translate-y-12' />
      <img src={currentUser < user.length - 1 ? user[currentUser + 1].imageUrl : user[1].imageUrl} alt="" width={100} className='transform translate-x-[35rem] -translate-y-28' />
      <img src={currentUser < user.length - 2 ? user[currentUser + 2].imageUrl : user[2].imageUrl} alt="" width={100} className='transform translate-x-[44rem] -translate-y-10' />
      <img src={currentUser < user.length - 3 ? user[currentUser + 3].imageUrl : user[3].imageUrl} alt="" width={100} className='transform translate-x-4 -translate-y-40' />
      <img src={currentUser < user.length - 4 ? user[currentUser + 4].imageUrl : user[4].imageUrl} alt="" width={100} className='transform translate-x-[10rem] -translate-y-[24rem]' />
    </div>
  )
}

export default DashCircle