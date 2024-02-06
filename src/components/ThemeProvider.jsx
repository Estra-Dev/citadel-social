import React from 'react'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) => {
  const {theme} = useSelector((state) => state.theme)
  return (
    <div className={theme}>
      <div className=" bg-white text-gray-700 dark:bg-[rgb(16,23,42)] dark:text-gray-200 min-h-screen">
        {children}
      </div>
    </div>
  )
}

export default ThemeProvider