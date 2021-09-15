import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (    
    <div className="header">
        <h1 > Your Notes </h1>
        <button onClick={()=> handleToggleDarkMode((prevDarkMode) => !prevDarkMode) } className="toggle">Toggle Mode</button>
    </div>
    )
}

export default Header