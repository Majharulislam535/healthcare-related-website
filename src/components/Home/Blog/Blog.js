import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="text-center service-title py-10">
                <h1 className='text-secondary text-6xl text-center font-bold py-4'>Recent Blog<span className='text-primary'>Posts</span></h1>
                <p className='text-lg w-6/12 mx-auto py-4 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida.</p>
            </div>
            <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto">
                <div>
                    <div className="blog-img">
                        <img width="100%" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/blog1.png" alt="" />
                    </div>
                    <div className="blog-tex">
                        <div className="icons-section flex justify-between ">
                            <div>
                                <p className='cursor-pointer text-secondary hover:text-primary'><i className="fas fa-plus-square text-secondary  hover:text-primary"></i>Medical</p>
                            </div>
                            <div>
                                <p className='cursor-pointer text-secondary hover:text-primary'><i className="far fa-calendar-alt text-secondary hover:text-primary"></i> 11/03/21</p>
                            </div>
                        </div>
                        <p className='text-2xl font-bold text-secondary hover:text-primary py-2'>People Who Move Due To Apply</p>
                        <p className='text-secondary hover:text-primary py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium?</p>
                        <a className='font-bold text-xl cursor-pointer text-secondary hover:text-primary'>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
                <div>
                    <div className="blog-img">
                        <img width="100%" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/blog2.png" alt="" />
                    </div>
                    <div className="blog-tex">
                        <div className="icons-section flex justify-between ">
                            <div>
                                <p className='cursor-pointer text-secondary hover:text-primary'><i className="fas fa-plus-square text-secondary  hover:text-primary"></i>Medical</p>
                            </div>
                            <div>
                                <p className='cursor-pointer text-secondary hover:text-primary'><i className="far fa-calendar-alt text-secondary hover:text-primary"></i> 11/03/21</p>
                            </div>
                        </div>
                        <p className='text-2xl font-bold text-secondary hover:text-primary py-2'>People Who Move Due To Apply</p>
                        <p className='text-secondary hover:text-primary py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium?</p>
                        <a className='font-bold text-xl cursor-pointer text-secondary hover:text-primary'>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
                <div>
                    <div className="blog-img">
                        <img width="100%" src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/blog3.png" alt="" />
                    </div>
                    <div className="blog-tex">
                        <div className="icons-section flex justify-between ">
                            <div>
                                <p className='cursor-pointer text-secondary hover:text-primary'><i className="fas fa-plus-square text-secondary  hover:text-primary"></i>Medical</p>
                            </div>
                            <div>
                                <p className='cursor-pointer text-secondary hover:text-primary'><i className="far fa-calendar-alt text-secondary hover:text-primary"></i> 11/03/21</p>
                            </div>
                        </div>
                        <p className='text-2xl font-bold text-secondary hover:text-primary py-2'>People Who Move Due To Apply</p>
                        <p className='text-secondary hover:text-primary py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium?</p>
                        <a className='font-bold text-xl cursor-pointer text-secondary hover:text-primary'>Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;