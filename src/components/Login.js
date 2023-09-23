import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img';
import { NavLink,useNavigate } from 'react-router-dom';
function Login() {
    // usenavigate mainly navlink ki tarah kam krta h to apn routing ka bhi use kr sakte h
    const history=useNavigate(); 
    const [inpVal, setinpVal] = useState({
        
        email:"",
        
        password:""
    });
    const [data,setData]=useState([])
    console.log(inpVal);

    // getData field
    const getData=(e)=>{
      const {value,name}=e.target;
      console.log(value,name);
      setinpVal(()=>{
        return{  
            ...inpVal,
            [name]:value
        }
      })
    }
// submit button field
    const addData=(e)=>{
        e.preventDefault();

        const getUserArr=localStorage.getItem("userYT");
        console.log(getUserArr)
        const {email,password}=inpVal;

        
         if(email==="")
        {
            alert("email field is required")
        }
        else if(!email.includes("@"))
        {
            alert("please enter valid email")
        }
        
        else if(password==="")
        {
            alert("please enter valid password")
            document.getElementById('one').innerHTML="Please enter password"
        }
        else if(password.length<5)
        {
            alert("password lenth must be greater than 5")
        }
        else{
            if(getUserArr && getUserArr.length)
            {
                const userdata=JSON.parse(getUserArr)
                const userlogin=userdata.filter((el,index)=>{
                    return (
                        el.email === email && el.password === password
                    )
                })
               if(userlogin.length===0)
               {
                alert("invalid details")
               }
               else{
                console.log("user login successfully")
                history("/details");
               }
            }
        }
    }
  return (
   <>
   <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>
                            
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                
                                <Form.Control type="email" placeholder="Enter email" onChange={getData}  name='email'/>
                                
                            </Form.Group>
                           

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                 
                                <Form.Control type="password" placeholder="Password"  onChange={getData} name='password'/>
                                <p id='one'></p>
                            </Form.Group>
                           
                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-6' style={{background:"rgb(67,185,127)"}}>
                                Submit
                            </Button>
                        </Form>
                        <p>Have an Account?<span><NavLink to="/">Sign Up</NavLink></span></p>
                    </div>
                    
                    <Sign_img/>
                </section>
            </div>
   </>
  );
}

export default Login;
