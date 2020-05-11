import React from 'react'

function AppBanner () {
    return <div style={{backgroundColor: '#1E1ECF', height: '48px', width: '100%'}}> 
        <div style={{
            float: 'left', 
            color: 'white', 
            paddingTop: '12px', 
            paddingLeft: '24px',
            fontWeight: 700,
            fontSize: '24px'}}> 
            NOKIA 
        </div>
        <div style={{
            float: 'left', 
            color: 'white', 
            paddingTop: '12px', 
            paddingLeft: '24px',
            fontWeight: 400,
            fontSize: '18px'}}> 
            GIT Quiz 
        </div>

    </div>
}

export default AppBanner