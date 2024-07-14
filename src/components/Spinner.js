import React from 'react'
import { tailChase } from 'ldrs'
import "./Spinner.css"

tailChase.register()

// Default values shown


const Spinner = () => {
  return (
    <div>
        {/* <div className="spinner"></div> */}
        {/* <l-tail-chase
        size="40"
        speed="1.75" 
        color="#8A65F1" 
        ></l-tail-chase> */}
        <div class="section-center flex flex-col gap-2">
          <div class="section-path">
            <div class="globe">
              <div class="wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <p className='text-[16px]'>Loading....</p>
        </div>
        
    </div>
  )
}

export default Spinner