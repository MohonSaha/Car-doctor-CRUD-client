import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


const Checkout = () => {
    const service = useLoaderData()

    const { _id, title, price, img } = service;
    const {user} = useContext(authContext);


    const handleBookService = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const amount = form.amount.value;
        
        const booking = {
            customerName : name,
            email,
            date,
            img,
            service_id: _id,
            service: title,
            price: amount
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Confirmed you order',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        

    }

    return (
        <div className="my-20 p-12  bg-slate-200 rounded-lg">
            <h2 className="text-2xl font-bold">Book Service: {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="">
                    <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" readOnly defaultValue={'$'+price} name="amount"  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn  btn-block bg-[#FF3811] border-[#FF3811] " type="submit" value="Order confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;