import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";

const Pizza = () => {
    return (
        <div>
        <Form>
            <div>
                <label>Name: <Field name="name" type="text"/>
                {touched.name && errors.name && (<p>Errors: {errors.name}</p>)}
                </label>
                <br/>
                <br/>
                <label>Email: <Field name="email" type="email"/></label>
                <br/>
                <br/>
                <label>Password: <Field name="password" type="password"/></label>
                <br/>
                <br/>
                <label>Do you agree to terms of service?: <Field name="terms" type="checkbox"/>
                {touched.terms && errors.terms && (<p>{errors.terms}</p>)}
                </label>
                <br/>
                <br/>
                <button>submit</button>
            </div>
        </Form>
        <UserDisplay users={users}/>
        {/* {user.name && (
            <ul key={user.id}>
                <li>Name: {user.name}</li>
            </ul>
        )} */}
        </div>
    )
}

export default Pizza;