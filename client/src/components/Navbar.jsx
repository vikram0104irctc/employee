

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 shadow-md z-50 bg-white'>
      <div className='max-w-[1360px] m-auto py-3 px-4 flex justify-between'>
        <img src="/logo.svg" alt="Logo" />
        <button className='py-2 px-4 bg-black text-white rounded-md'>Login</button>
      </div>
    </div>
  )
}

export default Navbar