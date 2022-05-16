import React from 'react'
import Navbar from '../../components/Navbar';
import './styles3.css';

const Success = () => {
  return (
    <div>

<div  className="shadow p-3 mb-3 bg-white rounded" >
          <Navbar />
          </div>  
        <br/>
        <br/>
        <div style={{marginTop: "100px" , marginLeft: "120px", marginRight: "120px"}}>
         <div className=" alert alert-success text-center mt-3" style={{padding: "100px"}} >
         <section className="mail-seccess section">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 offset-lg-3 col-12">
				
				<div className="success-inner">
					<h1><i className="fa fa-envelope"></i><span>Your Mail Sent Successfully!</span></h1>
					<p>Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod diam libero, sed dapibus leo laoreet ut. Suspendisse potenti. Phasellus urna lacus</p>
					<a href="#" className="btn btn-primary btn-lg">Go Home</a>
				</div>
				
			</div>
		</div>
	</div>
</section>
              </div>
              </div>
        </div>
  )
}

export default Success