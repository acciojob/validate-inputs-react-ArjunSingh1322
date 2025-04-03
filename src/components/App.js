
// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   let [nameerr,setnameerr] = useState()
//   let [addresserr,setaddresserr] = useState()
//   let [emailerr,setemailerr] = useState()
//   let [numbererr,setnumbererr] = useState()


//   let [val,setvalue] = useState({
//     name:"",
//     address:"",
//     email:"",
//     number:""
//   })
//   let {name,address,email,number} = val
//   console.log(val)
//   function display(e){
//     let value = e.target.value
//     let key = e.target.name
//     setvalue({...val,[key]:value})
//   }
//   function render(e){
//     e.preventDefault()
//     if(!([...name].every(char=>(char>='a' && char<='z') || (char>='A' && char<='Z')))){
//       setnameerr("Kindly enter pure text")
//     }
//     if(!([...address].every(char=>(char>='a' && char<='z') || (char>='A' && char<='Z') || (char>=0 && char<=9)))){
//      setaddresserr("Kindly enter proper address")
//     }
//     if(!email.includes("@") && !email.includes(".com")){
//       setemailerr("Enter a valid emal")
//     }
//     if(!number==10){
//       setnumbererr("Enter a valid Mobile no.")
//     }
//   }
//   return (
//     <div>
//       <h1>Fill the form</h1>
//       <form>  
//          <input type = "text" placeholder="Enter your name"  name = "name" onChange={display}/> 
//          {
//          nameerr && <p>{nameerr}</p>}<hr></hr>
//         <input type = "text"  placeholder="Enter your Address" name = "address" onChange={display}/>
//         {
//         addresserr && <p>{addresserr}</p>}<hr></hr>
//         <input type = "email" placeholder="Enter your Email" name="email" onChange={display}/> {
//         emailerr && <p>{emailerr}</p>}<hr></hr>
//         <input type = "number" placeholder="Mobile" name="mobile" onChange={display}/> {
//         numbererr && <p>{numbererr}</p>}<hr></hr>
//            <button type = "submit" onClick={render}>Click</button>

//         </form>

//     </div>
//   )
// }

// export default App




import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [nameerr, setnameerr] = useState("");
  let [addresserr, setaddresserr] = useState("");
  let [emailerr, setemailerr] = useState("");
  let [numbererr, setnumbererr] = useState("");

  let [val, setvalue] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
  });

  let { name, address, email, number } = val;
   
  function display(e) {
    let value = e.target.value;
    let key = e.target.name;
    setvalue({ ...val, [key]: value });
  }

  function clearError(field) {
    if (field === "name") setnameerr("");
    if (field === "address") setaddresserr("");
    if (field === "email") setemailerr("");
    if (field === "number") setnumbererr("");
  }

  function render(e) {
    e.preventDefault();

    // Clear previous errors
    setnameerr("");
    setaddresserr("");
    setemailerr("");
    setnumbererr("");

    // Check for empty fields
    if (!name.trim()) {
      setnameerr("Name is required");
    }
    if (!address.trim()) {
      setaddresserr("Address is required");
    }
    if (!email.trim()) {
      setemailerr("Email is required");
    }
    if (!number.trim()) {
      setnumbererr("Mobile number is required");
    }

    // Name Validation
    if (name && ![...name].every(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
      setnameerr("Kindly enter pure text");
    }

    // Address Validation (Allowing letters, numbers, spaces, commas, and periods)
    if (address && ![...address].every(char => 
        (char >= 'a' && char <= 'z') || 
        (char >= 'A' && char <= 'Z') || 
        (char >= '0' && char <= '9') || 
        char === ' ' || char === ',' || char === '.'
      )) {
      setaddresserr("Kindly enter a proper address");
    } 

    // Email Validation
    if (email && (!email.includes("@") || !email.includes(".com"))) {
      setemailerr("Enter a valid email");
    }

    // Mobile Number Validation (Convert to string and check length)
    if (number && number.toString().length !== 10) {
      setnumbererr("Enter a valid Mobile number (10 digits required)");
    }


  }

  return (
    <div>
      <h1>Fill the form</h1>
      <form>
        <input 
          type="text" 
          placeholder="Enter your name" 
          name="name" 
          onChange={display} 
          onFocus={() => clearError("name")} 
        />
        {nameerr && <p className="errorMessage" style={{color:"red"}}>{nameerr}</p>}
        <hr />

        <input 
          type="text" 
          placeholder="Enter your Address" 
          name="address" 
          onChange={display} 
          onFocus={() => clearError("address")}
        />
        {addresserr && <p className="errorMessage" style={{color:"red"}}>{addresserr}</p>}
        <hr />

        <input 
          type="email" 
          placeholder="Enter your Email" 
          name="email" 
          onChange={display} 
          onFocus={() => clearError("email")}
        />
        {emailerr && <p className="errorMessage" style={{color:"red"}}>{emailerr}</p>}
        <hr />

        <input 
          type="number" 
          placeholder="Mobile" 
          name="number" 
          onChange={display} 
          onFocus={() => clearError("number")}
        />
        {numbererr && <p className="errorMessage" style={{color:"red"}}>{numbererr}</p>}
        <hr />

        <button type="submit" onClick={render}>Click</button>
      </form>
    </div>
  );
}

export default App;
