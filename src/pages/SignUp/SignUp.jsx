import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProviders';

const SignUp = () => {

    const {createUser} = useContext(authContext);

    const handleSignin = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-32">
                    <img src={logo} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-black border-2">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">SignUp</h1>
                        <form onSubmit={handleSignin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" className='btn text-white bg-[#FF3811] border-[#FF3811]' value="Sign Up" />
                            </div>
                        </form>

                        <p className='text-center'>Already have an account?<Link className='text-[#FF3811]' to='/login'> log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;