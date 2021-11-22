import React, { Component , useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


function Form() {
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
       
       
            <div className="card m-3">
                <h5 className="card-header">React Hook Form - Password and Confirm Password Match Validation</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Password</label>
                                <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div className="form-group col">
                                <label>Confirm Password</label>
                                <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-1"  disabled={password!= confirmPassword} >submit </button>
                            <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    


export default Form
