import React, { useEffect } from "react";
import {useState} from 'react';


function App() {
const Person_array = ['shafin','konak','ashesh' ,'retul'];
const Person_id = [123,142,145,353];
const place = ['Dhaka' , 'Sylhet' , 'Rajshahi', 'Cumilla'];
const Post_number = [ '1223','4221','1421','3451'];
const Object_Componenet_array = [
{name : "Photoshop" ,Prices : "12"},
{name : "Adobe Priemer Pro" ,Prices : "21"}
,{name : "Adobe After Effet" ,Prices : "$41"}

]
  return (
    <div className="App" >
     <header className="App-header"></header>
       <h1>Hello World</h1>
        
       <div>
         <ul>
        
          { Object_Componenet_array.map(e => <li >{ e.name } </li>)}

         </ul>
        
        </div>  
    
     <Component_Secend place={place[0]} Post={Post_number[0]}></Component_Secend>
    
     <Person name={Person_array[0]}  id={Person_id[0]}></Person>
     <Person name={Person_array[1]} id={Person_id[1]}></Person>
     <Object_Componenet name={Object_Componenet_array[1].name} price={Object_Componenet_array[1].Prices}></Object_Componenet>
      
      <Count></Count>
      <DataLoad></DataLoad>
    </div>
  );
}


function Count(){

 const [count,setCount] = useState(0);
 
const Increase= ()=>{

   const newCount = count+1;
   setCount(newCount);

} 
return(

 <div>
   <h1>Count : {count}</h1>
   <button onClick={Increase}>Increase</button>
   <br />

 </div>

);


}

function DataLoad(){
const [users, setUser] = useState([]);
useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json())
 .then(data => 
         setUser(data)
 )


},[])

return(

 <div>
<h3>Dynamic User</h3>
<h4>User Details : {users.length}</h4>
<h4>User Email : 
{users.map(e=> <li> 
 {e.email} 
</li>)}
</h4>
<h4>User Phone : 
{users.map(e=> <li> 
 {e.phone} 
</li>)}
</h4>
 </div>


);


}

function Person(props){
 const Style = {

  border :"2px solid red",margin:'10px',


 }
return (

    <div style={Style}>
       <h1>Information : {props.name}</h1>
       <h1>ID : {props.id}</h1>
    </div>

);


}


function Object_Componenet(props) {
   
   const [count , setCount] = useState(props.price);
   const Decrease= () =>{
    
    const newCount = count-1;
    setCount(newCount);
    

   }
   const Increase= ()=>{

    const newCount = count+1;
    setCount(newCount);
 
 } 
    return (
     <div>
        <h1>Object Program </h1>
        <h1>Name : {props.name}</h1>
        <h2>Price : {props.price}</h2>
        <h1> Updated price = {count}</h1>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Increase}>Increase</button>
      
 </div>
    );
 



}









function Component_Secend(props){

 const style = {
     border : "2px solid black ",
     margin : '10 px ',
     


 }
  return (
 <div className="div" style={style}>
   <h1 > Hello Football  </h1>
    <h1>Place : {props.place}</h1>
      <h1>Post : {props.Post}</h1>
 </div>

 

);

}


export default App;
