import React,{useState} from 'react'
import authService from '../appwrite/auth'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'


function SignUp() {
    const navigate = useNavigate()
    const[error,setError] = useState('')
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()

    const signup = async(data)=>{   
        setError('')
        try {
            const user = await authService.createAccount(data)
            if(user){
                    const userData = await authService.getCurrentUser()
                    if(userData) dispatch(authLogin(userData));
                    navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
   <>
   <div className='flex items-center justify-center
   '>

    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <Logo width="100%"/>
    </div>
    <h2 className='text-center text-2xl font-bold leading-tight'>
        Create your account
        </h2>
        <p>
            Already have an account&nbsp;
            <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>SignUp</Link>  
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

            <form onSubmit={handleSubmit(signup)}>
                <div className='space-y-5'>
            <Input
            label='Full Name'
            placeholder='Enter your name'
            {...register('name',{
                required:true
            })}
            />
            <Input
             label='Email'
             placeholder='Enter your email'
             type='email'
                {...register('email',{
                    required:true,
                    validate:{
                        matchPattern:(value)=>/^\w+([,-]?w+)*@\w+([,-]?w+)*(\.\w{2,3})+$/.test(value) ||
                        'Email should be a valid address'
                    }
                })}  
            />

            <Input
            label='Password'
            type='password'
            placeholder='Enter your password'
            {...register('password',{
                required:true,
                minLength:{
                    value:6,
                    message:'Password should have atleast 6 characters'
                }
            })}
            />
            <Button type='submit' className='w-full'>Create Account</Button>
                </div>
            </form>
   </div>
   </>
  )
}

export default SignUp