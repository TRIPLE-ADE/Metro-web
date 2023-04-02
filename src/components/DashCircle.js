
function DashCircle({user, currentUser}) {
  return (
    <div className='rounded-full absolute w-full h-full top-[26rem] left-7 sm:top-[25rem] md:top-[50rem]'>
      <div className="w-full h-[50rem] relative">
        <svg viewBox="0 0 400 400" className="w-full bg-transparent absolute">
            <circle cx="50%" cy="50%" r="50%" stroke="#4CAF50" strokeWidth='1' fill="transparent" strokeDasharray="4 10"></circle>
        </svg>
        <img src={user[currentUser].imageUrl} alt="" className='absolute -top-[2rem] sm:-top-9 left-[40%] sm:left-[45%] w-16 sm:w-[16%] md:w-24' />
        <img src={ currentUser + 1 > user.length - 1 ? user[currentUser - 4].imageUrl : user[currentUser + 1].imageUrl } alt="" width={100} className=' absolute left-[72%] top-4 w-16  sm:w-[16%] md:w-24  md:top-0 md:left-[68%]' /> 
        <img src={ currentUser + 2 > user.length - 1 ? user[currentUser - 3].imageUrl : user[currentUser + 2].imageUrl } alt="" width={100} className='absolute left-[88%] top-28 sm:top-28 sm:left-[90%] w-16 sm:w-[16%] md:w-24 md:left-[86%] md:top-40' />
        <img src={currentUser + 3 > user.length - 1 ? user[currentUser - 2].imageUrl : user[currentUser + 3].imageUrl } alt="" width={100} className='absolute right-[87%] top-28 sm:top-20 sm:right-[85%] w-16 sm:w-[16%] md:w-24 md:top-28 md:right-[80%]' />
        <img src={currentUser + 4 > user.length - 1 ? user[currentUser - 1].imageUrl :  user[currentUser + 4].imageUrl } alt="" width={100} className='absolute  right-[75%] top-3 sm:top-0 sm:right-[67%] w-16 sm:w-[16%] md:w-24' />
    
      </div>
    </div>
  )
}

export default DashCircle