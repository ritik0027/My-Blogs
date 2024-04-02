import React from 'react'
import AuthSlice from '../../Store/AuthSlice'
import { LogoutBtn, Container, } from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo'
import { GiFeather } from "react-icons/gi";

function Header() {

  const authStatus = useSelector((state) => state.status)
  const navigate = useNavigate()
  const navItems = [

    {
      name: "Home",
      slug: "/",
      active: !authStatus
    },
    {
      name: 'Feed',
      slug: '/feed',
      active: !authStatus
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'SignUp',
      slug: "/signup",
      active: !authStatus
    },

    {
      name: 'Write',
      slug: '/add-post',
      active: authStatus
    },
    {
      name: 'Feed',
      slug: '/all-post',
      active: authStatus
    }
    
  ]

  return (
    <header className='py-3  bg-[#1D232A] shadow-lg text-white'>
      <Container>
        <nav>
          <div className=' flex justify-end items-baseline pr-4'>
           <div className=''>
           <Link to='/'>
              <Logo width='100px' />
            </Link>
           </div>
            <ul className='flex ml-auto gap-2'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-white hover:text-[#1D232A]
                     rounded-full '
                    >
                      {item.name ==='Write' ? 
                      <div className='flex justify-center items-center gap-1'> <span><GiFeather/></span><span> {item.name}</span></div> :
                       <div>{item.name}</div>  }
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>

    </header>
  )
}

export default Header
