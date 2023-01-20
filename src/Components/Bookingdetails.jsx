import React from 'react'
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';
import "./Bookingdetail.css"
import {IoIosClose } from "react-icons/io";

const Bookingdetails = () => {
    const [{showform} , dispatch] = useStateValue();

    const formshow = () =>{
        dispatch({
            type: actionType.SET_SHOW_FORM,
            showform: !showform,
        });
    };
  return (
    <div className='bookdetails'>
        <section className='form_header'>
            <div className="close_icon">
                <IoIosClose onClick={formshow} />
            </div>
        </section>
        <section className='booking_form'>
            
        <form class="card-form">
			<div class="input">
				<input type="text" class="input-field"  required/>
				<label class="input-label">Full name</label>
			</div>
						<div class="input">
				<input type="text" class="input-field" value="" required/>
				<label class="input-label">Email</label>
			</div>
						<div class="input">
				<input type="password" class="input-field" required/>
				<label class="input-label">Employee Id / Registration Np.</label>
			</div>
			<div class="action">
				<button class="action-button">Submit</button>
			</div>
		</form>
        </section>
    </div>
  )
}

export default Bookingdetails