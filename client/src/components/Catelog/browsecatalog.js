import React, {Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';
import {ProgressBar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]

class BrowseCatalog extends Component {
        

    constructor(props){
        super(props);
        this.state = {
            completedCourses: [],
            completedCount: 0,
            loaded: false,
            courses: [
                {
                    name: "Calculus I",
                    numbr: 2311,
                    selected: true
                },
                {
                    name: "Natural Science I",
                    numbr: 0,
                    selected: false
                },
                {
                    name: "Natural Science II",
                    numbr: 1,
                    selected: false
                },
                {
                    name: "Programming I",
                    numbr: 3337,
                    selected: false
                },
                {
                    name: "Introduction to Computing",
                    numbr: 1920,
                    selected: false
                }, 
                {
                    name: "Professional and Technical Writing",
                    numbr: 3249,
                    selected: false
                },
                {
                    name: "Calculus II",
                    numbr: 2312,
                    selected: false
                }, 
                {
                    name: "Physics I",
                    numbr: 2048,
                    selected: false
                },
                {
                    name: "Discrete Math",
                    numbr: 2104,
                    selected: false
                },
                {
                    name: "Discrete Structures",  
                    numbr: 3100,
                    selected: false
                },
                {
                    name: "Programming II",
                    numbr: 3337,
                    selected: false
                },
                {
                    name: "Technology in the Global Arena",
                    numbr: 3095,
                    selected: false
                },
                {
                    name: "Physics II", 
                    numbr: 2049,
                    selected: false
                },
                {
                    name:"Computer Architecture", 
                    numbr: 3102,
                    selected: false
                },
                {
                    name:"Data Structures",  
                    numbr: 3530,
                    selected: false
                },
                {
                    name:"Software Engineering I",
                    numbr: 4010,
                    selected: false
                },
                {
                    name: "Statistics", 
                    numbr: 3033,
                    selected: false
                },
                {
                    name: "Operating Systems",
                    numbr: 4610,
                    selected: false
                },
                {
                    name: "Systems Programming", 
                    numbr: 4338,
                    selected: false
                },
                {
                    name: "Senior Project",
                    numbr: 4911,
                    selected: false
                }
                
            ],
        }
    }

    componentDidMount(){
        fetch('/api/completed')
        .then(results => results.json())
        .then(results => this.setState({'completedCourses': results.data[0], loaded: true})); 
        

        
    }
    
    render() {

        if (this.state.loaded === true){
            let obj = this.state.completedCourses;
            
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                  if (obj[key] === true){
                    this.state.completedCount = this.state.completedCount +1;
                }
                }
              }
            
            let completionPercentage = (this.state.completedCount / 20)*100;
              
        
            return (
                <div style={{width: '90%', margin: '1%'}}>
                     <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Course Catalog and Degree Info</h2>
                     <ProgressBar animated now={completionPercentage} />
                                      <h3 style={{margin: '10px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>{completionPercentage}% of Computer Science Degree Complete! </h3>
                                      <h4 style={{margin: '10px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>{(100-completionPercentage)/5} Classes Remaining. </h4>
                     {courseNames.map(function(item, index) {
                         let personalArr = [];
                         personalArr.push(this.state.courses[index]);
                         return <Card body style={{float: 'left', margin: '2%', width: '275px', height: '150px', padding: '10px'}}>
                                    <CardTitle><strong>{item}</strong></CardTitle>
                                    <CardText>Supporting details.</CardText>
                                    <Link to={{pathname: '/searchresults', state: {query: personalArr}}}>
                                        <Button 
                                    
                                        color="info" 
                                        style={
                                            {width: '100px'}}>
                                        Search All
                                        </Button>
                                    </Link>
                                </Card>
                         
            
                     }, this)};
                 </div>
            );
        } else {
            return (<div>Loading...</div>);
        }
        
    
        
        
    }
}

export default BrowseCatalog;