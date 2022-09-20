import React from 'react'

export default function SidebarOptions({ active, text, Icon }) {

    return (

        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
          <Icon />
          <h2>{text}</h2>
        </div>
      );

}

