    import React from 'react';
  import  './SideMenu.css'; 
    import { Link } from 'react-router-dom';
    function SideMenu() {
      let menuList=[
        {id:1,url:"/",title:'HOME'},
        {id:3,url:"/add-form",title:'ADD FORM'},
        {id:4,url:"/tabs",title:'TABS'},
        {id:5,url:"/rich-text",title:'RICHTEXT'},
        {id:6,url:"/details",title:'DETAILS'}


    ]

        return (
          <div className="sideMenu">
            {menuList.map((items)=> (<Link key={items.id} to={items.url} className="menu-item">{items.title}</Link>) )}
          </div>
        );
    };
    

    export default SideMenu;
