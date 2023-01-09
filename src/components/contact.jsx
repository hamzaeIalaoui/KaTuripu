import { useState } from 'react'
import { SocialIcon } from 'react-social-icons';

const initialState = {}


export const Contact = (props) => {
   useState(initialState)
   return (
      <div>
         <div id='contact'>
            <div className='container'>
               <div className='col-md-8'>
                  <div className='section-title'>
                     <h2>Get In Touch</h2>

                  </div>
                  <div className='contact-item '>

                     <p>
                        <span>
                           <i className='fa fa-phone'></i> Phone
                        </span>{' '}
                        {props.data ? props.data.phone : 'loading'}
                     </p>
                     <p>
                        <span>
                           <i className='fa fa-envelope'></i> Email
                        </span>{' '}
                        {props.data ? props.data.email : 'loading'}
                     </p>
                  </div>
               </div>
               <div className='social-media'>
                  <div className='section-title-2'>
                     <h2>Follow us</h2>

                     <SocialIcon ClassName='youtube' url="https://youtube.com/c/KaTuripu" target="blank" bgColor='#fff' />   <span class="spanen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <SocialIcon ClassName='tiktok' url="https://www.tiktok.com/@katuripu" target="blank" bgColor='#fff' /> <span class="spanen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <SocialIcon ClassName='instagram' url="https://www.instagram.com/katuripu" target="blank" bgColor='#fff' />  <span class="spanen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <p></p>
                     <SocialIcon ClassName='facebook' url="https://www.facebook.com/groups/katuripu" target="blank" bgColor='#fff' />  <span class="spanen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <SocialIcon ClassName='whatsapp' url="https://chat.whatsapp.com/FRYi55sFxJ1CZmwA8eGory" target="blank" bgColor='#fff' network='whatsapp' />  <span class="spanen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                     <SocialIcon ClassName='linkedin' url="https://www.linkedin.com/company/katuripu" target="blank" bgColor='#fff' />  <span class="spanen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>

               </div>

            </div>

         </div>
         <div id='footer'>
            <div className='container text-center'>
               © 2023 KaTuripu | All Rights Reserved
            </div>
         </div>
      </div>
   )
}
