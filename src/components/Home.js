import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'

function Home() {
  return (
    <>
    <div class="flex justify-center text-center" style={{marginTop:"60px"}}>
        <div class="flex-1 justify-center text-center"  style={{width:"545px",height:"260px",marginLeft:"100px"}}>
            <img src={img1} class="" alt="nothing to display" />
        </div>
        <div class="flex-1 justify-center text-center" style={{width:"715px",height:"460px",marginRight:"100px"}}>
            <img src={img2} class="" alt="nothing to display" />
        </div>
    </div>

    <div class="flex text-center justify-center" style={{marginTop:"0px",marginBottom:"80px"}}>
        <div class="flex-1" style={{width:"545px",height:"260px",marginLeft:"100px",paddingLeft:"25px"}} >
            <div class="flex flex-col justify-center text-center" style={{marginTop:"40px",width:"400px"}}>
                <div class="flex-1 justify-center text-center">
                    <p class="mb-3 font-extrabold" style={{color:"#000",fontFamily: "Poppins",fontSize:"25px",fontWeight:"900"}}>Quick and Easy hiring</p>
                </div>
                <div class="flex-1 justify-center text-center">
                    <p style={{color:"#000",fontFamily: "Poppins",fontSize:"18px",fontWeight:"400"}}>Receive prioritised batches of profiles so that you can stop wasting your time sorting hundreds of applicants and connect, collaborate, pay and get work done in a secure environment</p>
                </div>
                <div class="flex-1 justify-center text-center" style={{margin:"20px 0px"}}>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
                </div>
            </div>
        </div>
        <div class="flex-1" style={{width:"500px",height:"230px"}} >
            <img src={img3} class="" alt="nothing to display"/>
        </div>
    </div>



    <div style={{background: "#EDFFFF", width: "100%",height: "350px"}}>
    <div class="flex justify-center text-center">
        <div class="flex-1 justify-center text-center"  style={{width:"545px",height:"260px",marginTop:"125px",paddingLeft:"75px",marginLeft:"100px"}}>
            <img src={img4} class="" alt="nothing to display" />
        </div>
        <div class="flex-1 justify-center text-center" style={{width:"715px",height:"460px",marginTop:"125px",paddingRight:"75px"}}>
            <img src={img5} class="" alt="nothing to display" />
        </div>
    </div>
    </div>


    <div style={{background:"#F5F5F5"}}>
        <img src={img6} alt="nothing to display" style={{width:"100%",padding:"100px"}}/>
    </div>


    <div style={{background:"#FFFFFF"}}>
        <img src={img7} alt="nothing to display" style={{width:"100%",marginBottom:"50px",height:"425px",objectFit:"cover"}}/>
    </div>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexDirection:"column"}}>
        <div>
            <p style={{textAlign:"center",fontFamily:"Poppins",fontSize:"35px",fontWeight:"700"}}>Need Assistance?</p>
        </div>
        <div>
            <p style={{textAlign:"center",fontFamily:"Poppins",fontSize:"17px",fontWeight:"400"}}>Our Friendly Folks will help you</p>
        </div>
        <div>
            <button type="button" class="text-white bg-black text-sm px-4 py-2 text-center mr-3 md:mr-0 rounded-lg">Request a Call Back</button>
        </div>
    </div>

    <div style={{backgroundColor:"#000000",marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img className='' src={img8} alt="nothing to display" style={{padding:"50px"}}/>
    </div>
    </>
  )
}

export default Home