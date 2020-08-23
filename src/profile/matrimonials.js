import React, { Fragment} from 'react'; 
import './profile.css';
import '../App.css';
import { Link } from 'react-router-dom';


class Matrimonial extends React.Component{
    

    render(){
        const linkstyle ={
        margin: 5,
         };
     

      
        
        return(
            <Fragment>

              

           <section className="team">
            <div className="container">
              <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">

                  <div className="matrimonial-category">
                  <div className="col-md">
                        
                        <h1 className="parent-cat">langage Matrimonial</h1>
                        <div className="sb-cat">
                        <h3>English</h3>
                        <h3>Hindi</h3>
                        <h3>Nepali</h3>
                        <h3>Marathi</h3>
                        <h3>Newari</h3>
                      </div>
                      </div>
                      
                     

                  <div className="col-md">
                        
                        <h1 className="parent-cat">Religion matritonial</h1>
                        <div className="sb-cat">
                        <h3>Hind</h3>
                        <h3>Mslim</h3>
                        <h3>Nepali</h3>
                        <h3>Marathi</h3>
                        <h3>Newari</h3>
                      </div>
                      </div>

                    
                       

                 
                  <div className="col-md">
                        
                        <h1 className="parent-cat">occpation</h1>
                        <div className="sb-cat">
                        <h3>English</h3>
                        <h3>Hindi</h3>
                        <h3>Nepali</h3>
                        <h3>Marathi</h3>
                        <h3>Newari</h3>
                      </div>
                      </div>

                      <div className="col-md">
                          <div className="row">
                       
                      <h1>Age Range</h1>
                        <select className="selectstyle">
                        
                            <option>18-25</option>
                            <option>18-25</option>
                            <option>18-25</option>
                        </select>
                        </div>
                  
                      
                      </div>
                       
                   </div>
                  
                       

                  </div>

        

             
                  





                <div className="col-md-9 col-md-offset">
                  <div className="col-lg-12">
                    <h2 className="description">
                        <Link to=""  style={linkstyle}> All</Link>
                        <Link to="" style={linkstyle} >  BRIDES</Link>
                        <Link to="" style={linkstyle} >  BRIDESGROOMS </Link>
                    </h2><hr/>
                    <div className="matchedprofille">
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/1.jpg" className="img-responsive"/>
                          <ul className="text-center">
                            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                            <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa fa-instagram"></i></li></a>
                          </ul>
                        </div>
                        <h1>Marrie Doi</h1>
                        <h2>Co-founder/ Operations</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/2.jpg" className="img-responsive"/>
                          <ul class="text-center">
                            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                            <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa fa-instagram"></i></li></a>
                          </ul>
                        </div>
                        <h1>Christopher Di</h1>
                        <h2>Co-founder/ Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/3.jpg" className="img-responsive"/>
                          <ul class="text-center">
                            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                            <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                          </ul>
                        </div>
                        <h1>Heather H</h1>
                        <h2>Co-founder/ Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/4.jpg" className="img-responsive"/>
                          <ul className="text-center">
                            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                            <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                          </ul>
                        </div>
                        <h1>John Doe</h1>
                        <h2>Designer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/5.jpg" className="img-responsive"/>
                          <ul className="text-center">
                            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                            <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                          </ul>
                        </div>
                        <h1>Peter John</h1>
                        <h2>Web Developer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/6.jpg" class="img-responsive"/>
                          <ul className="text-center">
                            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                            <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                          </ul>
                        </div>
                        <h1>Cherry John</h1>
                        <h2>Fullstack Developer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                      </div>
                  </div>
                </div>
                <h5 className="description" >Recent Weedings </h5>
                    <div className="col-md-12">
                        <img src="https://www.weddingo.in/images/couples/roshwita.jpg" className="img-responsive"/> 

                    </div>


                    <div className="happy-matrimonial">
                        
                    <h1>Happy Matrimonial Stories</h1>
                    
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2 ">
                        <div className="stories">
                        <h1>Peter John</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </p>
                      </div>
                      </div>
                       
                    
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                      <div className="stories">
                        <h1>Peter John</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </p>
                      </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2">
                      <div className="stories">
                        <h1>Peter John</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </p>
                      </div>
                      </div>
                      

                     
                    

                    </div>







              </div>
            </div>
          </section>

          </Fragment>

            
     


        )
    }


}

export default Matrimonial;