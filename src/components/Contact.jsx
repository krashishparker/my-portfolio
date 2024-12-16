import { CONTACT } from "../constants";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity :0 , y: 100}}
      transition={{ duration : 1}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter"> 
      <p className="my-4">{CONTACT.address}</p>
      <p className="my-4">{CONTACT.phoneNo}</p>
      <a href="#">{CONTACT.email}</a> 
      </div>  
    </div>
  )
}

export default Contact


/*
import { CONTACT from "../constants":
const Contact = () => {
return (
<div className="border-b border-neutral-900 pb-20">
<h1 className="my-10 text-center text-4x1">Get in Touch</h1>
<div className="text-center tracking-tighter"> 
<p className="my-4">{CONTACT.address}</p>
<p className="my-4">{CONTACT.phoneNo}</p>
<a href=</a>
</div>
</div>
);
};

export default Contact;



    <div className="border-b border-neutral-900 pb-20">
    <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
    <div className="text-center tracking-tighter"> 
    <p className="my-4">{CONTACT.address}</p>
    <p className="my-4">{CONTACT.phoneNo}</p>
    <a href="#">{CONTACT.email}</a>
    </div>
    </div>
*/