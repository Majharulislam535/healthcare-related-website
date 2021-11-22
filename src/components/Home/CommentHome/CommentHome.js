import React from 'react';
import test1 from '../../../img/test-img1.png'
import test2 from '../../../img/test-img2.png'
import './CommentHome.css';

const CommentHome = () => {
    return (
        <div>
            <div className="text-center service-title py-20">
                <h1 className='text-secondary text-6xl text-center font-bold py-4'>Special Service For <span className='text-primary'>Patients</span></h1>
                <p className='text-lg w-6/12 mx-auto py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida.</p>
            </div>
            <div className="grid  lg:grid-cols-2 gap-4">
                <div className='flex first  justify-end items-center'>
                    <div className="comment-img">
                        <img src={test1} alt="" />
                    </div>
                    <div className="comment-text px-4 w-3/6">
                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sequi dolor. Ratione quia rerum magni! Lorem ipsum dolor sit amet.</p>
                        <h2 className='text-secondary text-xl py-2'>Williyam lily</h2>
                        <p className='text-secondary font-bold'>Out Patient surgary</p>
                    </div>
                </div>
                <div className='flex second justify-start items-center'>
                    <div className="comment-img">
                        <img src={test2} alt="" />
                    </div>
                    <div className="comment-text px-4 w-3/6">
                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sequi dolor. Ratione quia rerum magni! Lorem ipsum dolor sit amet.</p>
                        <h2 className='text-secondary text-xl py-2'>Jasccika Brown</h2>
                        <p className='text-secondary font-bold'>Out Patient surgary</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentHome;