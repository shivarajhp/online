import style from "./home.module.css"
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const Creatuser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()
    let nameData=(e)=>{
      setName(e.target.value)
    }
    let salaryData=(e)=>{
      setSalary(e.target.value)
    }
    let companyData=(e)=>{
      setCompany(e.target.value)
    }
    let btn=(e)=>{
      e.preventDefault();
      let payLoad={name,salary,company}
      axios.post("http://localhost:3000/content",payLoad)
      .then(()=>{
          console.log("data has been Added");
      })
      .catch(()=>{
        console.log("something fishy");
      })
      navigate("/users")
    }
    return(
    
        <section id={style.mainForm}>
        <form action="">
            <table>
                <tr>
                    <th colSpan="2"><h1>Employee Details</h1></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name:</label></td>
                    <td>: <input type="text" value={name} onChange={nameData}/></td>
                   
                </tr>
                <tr>
                    <td><label htmlFor="">Salary:</label></td>
                    <td><input type="text" value={salary} onChange={salaryData} /></td>
                    
                </tr>
                <tr>
                    <td><label htmlFor="">Company:</label></td>
                    <td><input type="text" value={company} onChange={companyData} /></td>
                    
                </tr>
                <tr>
                  <th colSpan="2"><button id={style.btn}>Submit</button></th>  
                </tr>
            </table>
        </form>
        


       </section>
    )
}
export default Creatuser