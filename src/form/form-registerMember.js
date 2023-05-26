import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormregisterMember() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmitForm = (event) => {
        //..
    }

    const err = { fontSize: 'smaller', color: 'red', marginTop: 3 }

    return (

        <div className="container mt-5 p-3 rounded" style={{ width: '500px', background: '#F99111' }}>
            <center><h3>Register Member</h3></center>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label for="Uname">Username</label>
                    <input type="text" class="form-control" id="Uname" placeholder="username" name="Uname"
                        {...register('Uname', { required: true, maxlength: 30 })}
                    />
                    {errors.name && <div style={err} >กรอกยูสเซอร์!!</div>}

                </div>
                <div>
                    <label for="pass">Password</label>
                    <input type="number" class="form-control" id="pass" placeholder="password" name="pass" step="any"
                        {...register('pass', { validate: Value => parseFloat(Value) > 0 })}
                    />
                    {errors.name && <div style={err} >กรอกรหัส!!</div>}
                </div>
                <div>
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="name" name="name"
                        {...register('name', { required: true, maxlength: 30 })}
                    />
                    {errors.name && <div style={err} >กรอกชื่อ!!</div>}

                </div>

                <div >
                    <label for="name">Gender : </label>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        : Male
                    </label>

                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        : Female
                    </label>
                </div>
                <div>
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="age" placeholder="กรอกอายุ" name="age" step="any"
                        {...register('age', { validate: value => parseFloat(value) > 0 })}
                    />
                    {errors.age && <div style={err}>กรอกอายุ!!</div>}

                </div>
                <div>
                    <label for="Password">Salary</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>กรุณาระบุจำนวนเงิน</option>
                        <option value="1">0-10</option>
                        <option value="2">11-20</option>
                        <option value="3">21-30</option>
                    </select>
                    {errors.name && <div style={err} >ระบุจำนวนเงิน!</div>}

                </div>
                <div>
                    <label for="email">อีเมล์</label>
                    <input type="text" class="form-control" id="email" placeholder="กรอกอีเมล์" name="email"
                        {...register('email', {
                            required: true, pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i
                            }
                        })}
                    />
                    {errors.email && <div style={err}>กรุณากรอกอีเมล์</div>}
                    
                </div>
                <div>
                    <label>Intersted :</label> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Game</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label class="form-check-label" for="inlineCheckbox2">Music</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label class="form-check-label" for="inlineCheckbox3">Book</label>
                    </div>
                </div>
                <div>
                <button type='submit' className='btn btn-primary'> Register</button> &nbsp;
                <button type='reset' className='btn btn-primary'> Cancle</button>
                </div>
            </form>
        </div>

    )
}

