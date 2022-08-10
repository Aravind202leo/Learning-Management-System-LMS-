import Top from "./aboutCourse/top";
import About from './aboutCourse/about';
import Footer from '../footer/footer';
import Faq from './aboutCourse/faq/faq';

function Coursecomponent() {

    return(
        <> < Top/>
             < About/> 
             < Faq/> 
             < Footer/>
            </>

    )
   
}

export default Coursecomponent


// import ReactPlayer from 'react-player'
// import {useState}  from 'react'
// const courseu="reactjs";
// const content={
//     reactjs:[{title:"link react",vido:"https://youtu.be/QgpJHN_EOGM",des:"This video is about the link"},
// {title:"node js",vido:"https://youtu.be/IKD2-MAkXyQ",des:"This video is about node "},
// {title:"software",vido:"https://youtu.be/Eqi-hYX50MI",des:"This video is basically an software"},
// {title:"hello world",vido:"https://youtu.be/qVTAB8Z2VmA",des:"This video is about the api"},
// ],
// }
// const [vid,uid]=useState(content[courseu][0].vido);
// const [title,utitle]=useState(content[courseu][0].title);
// const [des,udes]=useState(content[courseu][0].des);

// const renderVideo=()=>{
//     return (
      
//      <div>
//         <h1>{title}</h1>
//    <ReactPlayer width='480px' height='240px'controls url={"https://youtu.be/"+vid+"?rel=0"}/>
//        <h4>{des}</h4>
//     </div>
    
    
//     )
// }


// return (
// <>
// <div> Welcome to courses React </div>

//      <br/>
//      <br/>
//      <br/>
//     {renderVideo()}
//     <br/>
//     <br/>
//     <br/>
//     <br/>

//     {content[courseu].map(item=>{
//     return <><a href='#!' onClick={()=>{
//         uid(item.vido)
//         utitle(item.title)
//         udes(item.des)
//     }}>{item.title}</a><br/></>

//  })}


// </>

// )

