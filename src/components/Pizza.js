import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";

const Pizza = ({touched, errors, status}) => {
    const [order, setOrder] = useState([])
    let toppingChoice ="";
    useEffect(()=>{
        setOrder(status)
        status.pineapple == true ? toppingChoice+= " Pineapple,": null;
    },[status]);
    console.log(order)
    return (
        <div>
        <Form>
            <div>
                <label>Name: <Field name="name" type="text"/>
                {touched.name && errors.name && (<p>Errors: {errors.name}</p>)}
                </label>
                <br/>
                <br/>
                <label> {"Choose pizza size:  "}
                <Field as="select" name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </Field>
                {" "}
                </label>
                <br/>
                <br/>
                <label>Select toppings:{" "}
                <label>Cheese<Field name="cheese" type="checkbox"/>{"  "}</label>
                <label>Pepperoni<Field name="pepperoni" type="checkbox"/>{"  "}</label>
                <label>Pineapple<Field name="pineapple" type="checkbox"/>{"  "}</label>
                <label>Ham<Field name="ham" type="checkbox"/>{"  "}</label>
                </label>
                <br/>
                <br/>
                <label>Special Instructions:{" "}<br/>
                <Field component="textarea" name="instructions" />
                </label>
                <br/>
                <br/>
                <button>Order!</button>
            </div>
        </Form>
        <div>
            {}
            <h1>Order for {order.name}</h1>
            <p>Size: {order.size}, toppings:  </p>
        </div>
        {/* {order.name && (
            <ul key={user.id}>
                <li>Name: {user.name}</li>
            </ul>
        )} */}
        </div>
    )
}

export default withFormik({
    mapPropsToValues: props => ({
        name: props.name || "",
        size: "small",
        cheese: false,
        pepperoni: false,
        pineapple: false,
        ham: false,
        instructions: ""
        
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
        .min(2,"Too short!")
        .required("This field is required"),
    }),
    handleSubmit: (values, {resetForm, setStatus})=> {
        
        console.log(values)
        setStatus(values)
        // axios.post("https://reqres.in/api/users/",values)
        // .then(response => {
        //     console.log("success");
        //     setStatus(response.data);
        //     resetForm();
        // })
        // .catch(err => console.log(err.response));

    }
    

})(Pizza)