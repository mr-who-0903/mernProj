import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'


const About = () => {

    const history = useHistory();
    const [userdata, setUserData] = useState({});

    const callAboutPage = async () => {
        try{
            const res = await fetch('/about', {
                method:"GET",
                headers:{
                    Accept: "application/json",    // Accept is the media-type of the response it is expecting.
                    "Content-Type": "application/json" // content-type is the media-type of the request being sent from client.
                },
                credentials:"include",
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if(res.status !== 200){
                throw new Error(res.error);
            }
        }
        catch(err){
            console.log(err);
            history.push('/signin');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])


    return (
        <>
          <div className="container about">
              <form method="GET">
                  <div className="content">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="profile-pic-box d-flex justify-content-center">
                                <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{ userdata.name }</h5>
                                <h6 style={{color:"#178af5"}}>{ userdata.work }</h6>
                                <p className="profile-rating mt-3 mb-5">RATING : <span style={{fontWeight:"700"}}>8/10</span> </p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>  {/* end of col-md-6 */}
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" value="Edit Profile"/>
                        </div>

                    </div> {/* end of row */} 

                    <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>WORK LINKS</p>
                                    <a href="">Github</a><br/>
                                    <a href="">Linkedin</a><br/>
                                </div>
                            </div>

                            {/* right side data toggle */}
                            <div className="col-md-8 pl-5 about-info">
                                <div className="tab-content profile-tab" id="myTabContent">

                                    <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                                    
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>User ID</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userdata._id }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userdata.name }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userdata.email }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userdata.ph }</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userdata.work }</p>
                                            </div>
                                        </div>

                                    </div> {/* end of about tab pane */}

                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Intermediate</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>₹ 400/hr</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>19</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Intermediate</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>4 months</p>
                                            </div>
                                        </div>

                                    </div> {/* end of profile tab pane */}
                                </div> {/* end of tab content */}

                            </div> {/* end of col-md-8 */}
                    </div> {/* end of bottom row */}
                  </div> {/* end of class="content" */}
               </form>    
          </div>  {/* end of container */}
        </>
    )
}

export default About;
