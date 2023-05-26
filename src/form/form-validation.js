import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Formvalidation() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmitForm =(event)=> {
            //..
     }
       
     const err = {fontSize: 'smaller', color: 'red', marginTop:3}
   
    return (
        <div className="container mt-5 p-3 rounded" style={{ width: '500px', background: '#F99111' }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="name" placeholder="กรอกชื่อสินค้า" name="name"
                        {...register('name', { required: true, maxlength: 30 })}
                    />
                    {errors.name && <div style={err} >กรุณาระบุชื่อ</div>}
                    <label for="name">ชื่อสินค้า</label>
                </div>
                <div class="form-floating mb-3 mt-3">
                    <input type="number" class="form-control" id="price" placeholder="กรอกราคาสินค้า" name="price" step="any"
                        {...register('price', {validate: Value=> parseFloat(Value) > 0})}
                    />
                    {errors.name && <div style={err} >กรุณาระบุราคา</div>}
                    <label for="price">ราคาสินค้า</label>
                </div>  
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}
