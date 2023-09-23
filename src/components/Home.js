import React ,{useState}from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';
function Home() {
    // usestate field
    const [inpVal, setinpVal] = useState({
        name:'',
        email:"",
        date:"",
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

        const {name,email,date,password}=inpVal;

        if(name==="")
        {
            alert("name field is required")
        }
        else if(email==="")
        {
            alert("email field is required")
        }
        else if(!email.includes("@"))
        {
            alert("please enter valid email")
        }
        else if(date==="")
        {
            alert("please enter date")
        }
        else if(password==="")
        {
            alert("please enter password")
        }
        else if(password.length<5)
        {
            alert("password lenth must be greater than 5")
        }
        else{
            console.log("data added successfully")
            localStorage.setItem("userYT",JSON.stringify([...data,inpVal]))
        }
    }
    return (
        <div>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>Sign UP</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
                                
                                <Form.Control type="text" placeholder="Enter Your Name" onChange={getData} name="name" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                
                                <Form.Control type="email" placeholder="Enter email" onChange={getData}  name='email'/>
                                
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                
                                <Form.Control type="date" onChange={getData} name='date'/>
                                
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                 
                                <Form.Control type="password" placeholder="Password"  onChange={getData} name='password'/>
                            </Form.Group>
                           
                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-6' style={{background:"rgb(67,185,127)"}}>
                                Submit
                            </Button>
                        </Form>
                        <p>Already Have an Account <span><NavLink to="/login">Sign In</NavLink></span></p>
                    </div>
                    
                    <Sign_img/>
                </section>
            </div>
        </div>
    );
}

export default Home;
