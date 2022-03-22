import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from '../Components/Home'
import Id from '../Components/Id'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/todo/:id'} element={<Id /> } />
    </Routes>
  )
}

export default AllRoutes