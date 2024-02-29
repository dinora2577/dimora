import React from 'react'

const Navbar = () => {
  return (
   

    <nav className=' containerr w-full h-[80px] bg-[#4285c7] flex justtify-between'>
        <div>
            Dinora.
        </div>
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">My Works</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div>
            <div>RU</div>
            <div>ENG</div>
        </div>

    </nav>
  )
}

export default Navbar