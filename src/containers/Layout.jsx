import React from "react";
const Layout = ({children}) => {
    return (
        <>
        <div className="wrapper">
   <div className="left">{children}</div>
        <div className="right">
      <div className="right-inner">
      


<div className="">
<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>
         <h2>Administra tu lista de tareas</h2>
         <p>Crea, edita, elimina y marca tus tareas como finalizadas.</p>
      </div>
   </div>
</div>

{/* <a href="javascript:;" className="dark-mode-btn">
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M21.55 1C23.15 3.4 24.1 6.3 24.1 9.4C24.15 17.75 17.3 24.5 8.85 24.5C6 24.5 3.3 23.7 1 22.35C3.6 27.5 8.95 31 15.15 31C23.9 31 31 24 31 15.35C31 8.95 27.1 3.45 21.55 1Z" fill="black" />
   </svg>
</a> */}
</>
    );
}
export default Layout;