import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import perts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 h-[400px] rounded-lg " />
                    <img src={perts} className="w-2/3 h-[300px] absolute top-1/2 right-6 border-8 border-white rounded-lg " />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className='text-2xl font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="text-white btn bg-[#FF3811] border-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;