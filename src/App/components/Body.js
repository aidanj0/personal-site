import React from 'react'

import './Body.css'

const Body = (props) => (
    <div className='bodydiv'>
        {props.children}
    </div>
)

export default Body