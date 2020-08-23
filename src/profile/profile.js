import React, { Fragment} from 'react'; 
import './profile.css';
import '../App.css';


class Porfile extends React.Component{
    

    render(){
        
        return(
            <Fragment>
             
                <div className="serprofile">
                    <div className="container">
                        <div className=" col-xs-6 col-md-5 " >
                    <img src="http://nabeel.co.in/files/bootsnipp/team/1.jpg" class="img-responsive"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-7">
                       
                        <h1 className="sername"> heyy its me , 24</h1>
                        <h2>KATHMAND 3 NEPAL </h2>
                      
                    
                        <h3>occpation:engineer</h3>
                        <h3>religion</h3>
                        <hr/>
                        
                        <p>abot me
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        

                    </div>
                        
                    </div>

                    
                </div>  

           <section className="team">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-md-offset">
                  <div className="col-lg-12">
                    <h6 className="description">MATCHES</h6>
                    <div className="matchedprofille">
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/1.jpg" class="img-responsive"/>
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
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/2.jpg" class="img-responsive"/>
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
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/3.jpg" class="img-responsive"/>
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
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/4.jpg" class="img-responsive"/>
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
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
                        <div className="img-box">
                          <img src="http://nabeel.co.in/files/bootsnipp/team/5.jpg" class="img-responsive"/>
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
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 profile">
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
              </div>
            </div>
          </section>

          </Fragment>

            
     


        )
    }


}

export default Porfile;