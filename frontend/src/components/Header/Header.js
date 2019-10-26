import React from 'react'
import './style.css'

function Header() {
    const now = new Date()
    const hour = now.getHours()
    let timeNow = ''

    
    if(hour >=6 && hour < 13) {
        timeNow = 'morning'
    } else if (hour < 18) {
        timeNow = 'afternoon'
    } else {
        timeNow = 'evening'
    }

    return (
        <div className={timeNow}>
            <h1>To-do</h1>
        </div>  
    )

}

export default Header