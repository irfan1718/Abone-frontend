import React from 'react';
import { MdCall } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

import './Contact.css';

const Contact = () => {
  return (
    <section className='contact-wrapper'>
      <div className='c-container paddings innerWidth flexCenter'>
        {/* Left side */}
        <div className='flexColStart c-left '>
          <span className='orangeText'>Our Contact</span>
          <span className='primaryText'>Easy to Contact Us</span>
          <span className='secondaryText'>
            "Precision in Every Inquiry: Reach Out to Us for Orthopedic
            Excellence, Where Your Needs Meet Our Expertise with Care."
          </span>

          <div className='flexcolStart contactModes'>
            {/* first row */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>call</span>
                    <span className='secondaryText'>+91 999 999 9999</span>
                  </div>
                </div>
                <div className='flexCenter button'>Call Now</div>
              </div>

              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <IoMdMail size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Mail</span>
                    <span className='secondaryText'>
                      info@abonesurgicals
                    </span>
                  </div>
                </div>
                <div className='flexCenter button'>Mail Now</div>
              </div>
            </div>

            {/* second row */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>+91 999 999 9999</span>
                  </div>
                </div>
                <div className='flexCenter button'>Message Now</div>
              </div>

              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <IoLogoWhatsapp size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Whatsapp</span>
                    <span className='secondaryText'>+91 999 999 9999</span>
                  </div>
                </div>
                <div className='flexCenter button'>Whatsapp Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className='flexCenter c-right'>
          <div className='image-container'>
            <img className='contact' src='./contact.png' alt='contact-img' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
