import List from './list'
import './course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const courses = () => {
  return (
    <div>
        <h1 className='cor'>COURSES</h1>
        <div className='container'>
        <div class="box"><List title="Python Programming"  des="Python for Beginners - Learn Programming from scratch and Data structures" 
        img="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/></div>
        <div class="box"><List title="Web Development" des="The Complete 2022 Web Development Bootcamp "
         img="https://media.istockphoto.com/photos/web-design-desktop-picture-id1305999733?k=20&m=1305999733&s=612x612&w=0&h=NdaIQrBVP_lHtnk_6x3sMyyHtL2VZVF4SaF3Jv16uxc="/></div>
        <div class="box"><List title="Mechine Learning"  des="Data Science and Machine Learning with Tensorflow "
         img="https://cdn.pixabay.com/photo/2019/04/15/12/09/machine-learning-4129175_960_720.jpg"/></div>
        <div class="box"><List title="Ethical Hacking"  des="Hack computer systems  and secure them like expert"
         img="https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhhY2tlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/></div>
        </div>
    </div>
  )
}


export default courses