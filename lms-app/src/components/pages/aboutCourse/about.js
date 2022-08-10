import './about.css'

const About =()=>{

const tag = ["HTML & CSS– Content, layout, and styling of web page", "JavaScript Programming– Programming language of the web ", "Dynamic Website Development– Make a web page interactive and do things ", "ReactJS Development– Learn to develop components and single page apps in React", "Back - end Development– Storing and manipulating data permanently", "Full - stack Deployment– Get a full - stack web application up and running"];
const tagitems = tag.map((tag) => <li className = "about-li" > { tag } </li>);
            return (<div>
                <h2 className = "title" > <b> About this course </b>
                 </h2 > <div className = "content" >
                <p> This course is designed to start you on a path toward future studies in web development and design, no matter how little experience or technical knowledge you currently have.The web is a very big place, and
                if you are the typical internet user, you probably visit several websites every day, whether
                for business, entertainment or education.But have you ever wondered how these websites actually work ? How are they built ? How do browsers, computers, and mobile devices interact with the web ? What skills are necessary to build a website ? With almost 1 billion websites now on the internet, the answers to these questions could be your first step toward a better understanding of the internet and developing a new set of internet skills.

                By the end of this course you’ ll be able to describe the structure and functionality of the world wide web, create dynamic web pages using a combination of HTML, CSS, and JavaScript, apply essential programming language concepts when creating HTML forms, select an appropriate web hosting service, and publish your webpages
                for the world to see.Finally, you’ ll be able to develop a working model
                for creating your own personal or business websites in the future and be fully prepared to take the next step in a more advanced web development or design course or specialization. 
                </p> </div >
                <
                div className = "syllabus" >
                <
                div class = "card" >

                <
                div class = "container" >
                < h2 className = "syl" > < b > Syllabus </b> </h2>
                <
                br / >
                <
                ul > { tagitems } </ul > 
                </div> 
                </div> 
                </div > 
                </div >
            );
    };
export default About