import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
const User = () => {
  let[data,setDeta]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((e)=>{
      console.log(e.data);
      setDeta(e.data)
    })
  },[])
  let deleteData=(index)=>{
    axios.delete(`http://localhost:3000/content/${index}`)
    window.location.assign("/users")
    alert("Are you Sure")
  }
  return (
    <div id={style.user}>
      {data.map((x)=>{
        return(
            <section id={style.card}>
              <table>
                <tr>
                  <th colSpan="2"><h3>Employee</h3></th>
                </tr>
                        <tr>
                          <td><label >Name  :</label></td>
                          <td>{x.name}</td>
                        </tr>
                        <tr>
                          <td><label >Salary  :</label></td>
                          <td>{x.salary}</td>
                        </tr>
                        <tr>
                          <td><label >company  :</label></td>
                          <td>{x.company}</td>
                        </tr>
                        <tr>
                          <td colSpan="2" id={style.edit}>
                            <div>
                              <Link to={`/edit/${x.id}`}>EDIT</Link>
                              <Link onClick={()=>{deleteData(x.id)}}>DElETE</Link>  
                            </div>
                          </td>
                        </tr>
                </table>
            </section>
        )
      })}
    </div>  
  )
}

export default User