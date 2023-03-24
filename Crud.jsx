import style from "./home.module.css"
import React from "react"
import { Link } from "react-router-dom"
const Crud=()=>{
    return(
        <div id={style.nav}>
           <Link to="/">Creat-user</Link>
           <Link to="/user">User</Link>

        </div>
    )
}
export default Crud