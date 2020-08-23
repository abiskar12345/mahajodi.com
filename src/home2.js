import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Link, Router} from 'react-router-dom';

class App extends React.Component {

    render(){

        const images=[
            { url: "http://kenwheeler.github.io/slick/img/fonz1.png" },
            { url: "http://kenwheeler.github.io/slick/img/fonz2.png" },
            { url: "http://kenwheeler.github.io/slick/img/fonz3.png" },
        ];
        
        return (
            <Fragment>
            <div className="main_div">    
            <div className="text-container">
            <div className="text1">
                <span>SEARCH</span>
            </div>
            <div className="text1 pl-5">
                <span>FIND</span>
            </div>
            <div className="text1 pl-5">
                <span>AND</span>
            </div>
            <div className="text1 pl-5">
                <span>GET</span>
            </div>
        </div>

        <div className="price-container">
             <a href=""><button className="btn">See the plan</button></a> 
            <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                See the plan
            </button>

    
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Select the plan</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body btn-light">
                            <div className="container-fluid">
                                <div className="center_div">
                                    <div className="row">
                                        <div className="col-lg-4 col-4 bg-color">
                                            <p>One Month Plan <span className="one">Rs.300</span></p>
                                            <ul>
                                                <li>plan one</li>
                                                <li>plan one</li>
                                                <li>plan one</li>
                                                <li>plan one</li>
                                                <li>plan one</li>
                                                <li>plan one</li>
                                            </ul>
                                            <p><span className="btn-pln-get"><a href="">Get Plan</a></span></p>

                                        </div>
                                        <div className="col-lg-4 col-4 bg-color">
                                            <p>Six Month Plan <span className="one">Rs.1000</span></p>
                                            <ul>
                                                <li>plan two</li>
                                                <li>plan two</li>
                                                <li>plan two</li>
                                                <li>plan two</li>
                                                <li>plan two</li>
                                                <li>plan two</li>
                                                <li>plan two</li>
                                            </ul>
                                            <p><span className="btn-pln-get"><a href="">Get Plan</a></span></p>

                                        </div>
                                        <div className="col-lg-4 col-4 bg-color">
                                            <p>One Yearly Plan <span className="one">Rs.15000</span></p>
                                            <ul>
                                                <li>plan three</li>
                                                <li>plan three</li>
                                                <li>plan three</li>
                                                <li>plan three</li>
                                                <li>plan three</li>
                                                <li>plan three</li>
                                                <li>plan three</li>
                                            </ul>
                                            <p><span className="btn-pln-get"><a href="">Get Plan</a></span></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="scroll-btn">

            <div className="scroll-bar">
                <a href=""><span></span></a>
            </div>
        </div>

    </div>       
    

   
    <div className="second_div">
        <div className="container text-center">
            <h2>Find your special someone</h2>
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-4">
                        <div className="one">
                            <i className="fa fa-registered"></i>
                        </div>
                        <Link to='/register'>
                            <h3>Sign up</h3>
                        </Link>
                        <p>Register for free & put up your Profile</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="one">
                            <i className="fa fa-users"></i>
                        </div>
                       
                        <Link to=''>
                            <h3>Connect</h3>
                        </Link>
                       
                        <p>Select & Connect with Matches you like</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="one">
                            <i className="fa fa-users"></i>
                        </div>
                        
                        <Link to=''>
                            <h3>Interact</h3>
                        </Link>
                      
                        <p>Become a Premium Member & Start a Conversation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div className="third_div">
        <div className="container text-center">
            <h2>Millions of happy stories</h2>
            <SimpleImageSlider
                    width={1000}
                    height={504}
                    images={images}
                />
        </div>
    </div>
    
    </Fragment>
        );
     }

}
    


export default App;
