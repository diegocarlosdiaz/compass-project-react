import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Dc } from '../pages/Dc'
import { Heroe } from '../pages/Heroe'
import { Home } from '../pages/Home'
import { Marvel } from '../pages/Marvel'
import { Search } from '../pages/Search'

export const DashboardRouter = () => {

  const { pathname } = useLocation()

  localStorage.setItem('lastPath', pathname)


  return (
    <>

      <Navbar />


      <div classnamenameNa='mt-5'>
        <Routes>
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<Dc />} />
          <Route path="/search" element={<Search />} />
          <Route path="/heroe/:id" element={<Heroe />} />
          <Route path="/" element={<Home/>}/>
          <></>
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>Nada Por Aqui!</p>
            </main>
          }></Route>

        </Routes></div>

    </>
  )
}
