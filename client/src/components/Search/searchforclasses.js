import React, {Component} from 'react';
import '../styles/flowstyles.css';
import FlowChartBox from '../flowchartbox';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom';


class SearchForClasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            
            courses: [
                {
                    name: "Calculus I",
                    numbr: 2311,
                    selected: false
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
            queryCourses: [],
            completedCourses: [],
            loaded: false,
            defaultFlowChartColors: [] //see logic method
        }
    }

    componentDidMount(){
        fetch('/api/completed')
        .then(results => results.json())
        .then(results => this.setState({'completedCourses': results.data[0], loaded: true})); 
        
         
    }

    handleClick(index){
        
        // We might need to change data so that each course object
        // can have a unique number. That way, we can have an array
        // of course numbers and remove them when necessary.
        
        //this.state.courses[index].selected = !this.state.courses[index].selected;
        
        var courses = this.state.courses
        courses[index].selected = !courses[index].selected
        

        this.setState({courses: courses})      
        
        
        var queryCourses = this.state.courses.filter(function(course) {
            return course.selected !== false
        })

       
        this.setState({queryCourses: queryCourses})  
        console.log(this.state.queryCourses);     
    }

    checkColor(index){
        if (this.state.selected[index] === true) {
            return '';
        } else {
            return 'green';
        }
    }

 
    flowLogic(){
        //Working from the bottom up:
        
        // If SE not taken, Senior Proj red, index 19
        if (this.state.completedCourses.CEN4010 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        if (this.state.completedCourses.COP3530 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        // OS red if cda3102 or cop4338 not taken
        if (this.state.completedCourses.COP4338 === false
            || this.state.completedCourses.CDA3102 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //STA3033 red if mac2312 not taken
        if (this.state.completedCourses.MAC2312 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //CEN4010
        if (this.state.completedCourses.CGS3095 === false
            || this.state.completedCourses.COP3337 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //COP3530
        if (this.state.completedCourses.COP3337 === false
            || (this.state.completedCourses.COT3100 || this.state.completedCourses.MAD2104) === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //CDA 3102
        if (this.state.completedCourses.COP3337 === false
            || (this.state.completedCourses.COT3100 || this.state.completedCourses.MAD2104) === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //PHY 2049
        if (this.state.completedCourses.PHY2048 === false
            || this.state.completedCourses.MAC2312 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //CGS 3095
        if (this.state.completedCourses.ENC3249 === false
            || this.state.completedCourses.COP2210 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //COP 3337
        if (this.state.completedCourses.COP2210 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //COT 3100
        if (this.state.completedCourses.COP2210 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //MAD 2104
        if (this.state.completedCourses.COP2210 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //PHY2048
        if (this.state.completedCourses.MAC2311 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }
        
        //MAC 2312
        if (this.state.completedCourses.MAC2311 === false){
            this.state.defaultFlowChartColors.unshift("red");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }



        // taken course logic:

        //ENC3249 
        if (this.state.completedCourses.ENC3249 === true){
            this.state.defaultFlowChartColors.unshift("black");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //CGS1920 
        if (this.state.completedCourses.CGS1920 === true){
            this.state.defaultFlowChartColors.unshift("black");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        //COP2210 
        if (this.state.completedCourses.COP2210 === true){
            this.state.defaultFlowChartColors.unshift("black");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        // NSE2
        if (this.state.completedCourses.NSE2 === true){
            this.state.defaultFlowChartColors.unshift("black");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        // NSE1
        if (this.state.completedCourses.NSE1 === true){
            this.state.defaultFlowChartColors.unshift("black");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        // CAL1
        if (this.state.completedCourses.MAC2311 === true){
            this.state.defaultFlowChartColors.unshift("black");
        } else {
            this.state.defaultFlowChartColors.unshift("");
        }

        // beginning at index 6 [calculus 2]
        // CAL2
        if (this.state.completedCourses.MAC2312 === true){
            this.state.defaultFlowChartColors[6]="black";
        }

        //PHY2048
        if (this.state.completedCourses.PHY2048 === true){
            this.state.defaultFlowChartColors[7]="black";
        }

        //MAD 2104
        if (this.state.completedCourses.MAD2104 === true
            || this.state.completedCourses.COT3100 === true){
            this.state.defaultFlowChartColors[8]="black";
            this.state.defaultFlowChartColors[9]="black";
        }

        //COP3337
        if (this.state.completedCourses.COP3337 === true){
            this.state.defaultFlowChartColors[10]="black";
        }
        
        //CGS3095
        if (this.state.completedCourses.CGS3095 === true){
            this.state.defaultFlowChartColors[11]="black";
        }

        //PHY2049
        if (this.state.completedCourses.PHY2049 === true){
            this.state.defaultFlowChartColors[12]="black";
        }

        //CDA3102
        if (this.state.completedCourses.CDA3102 === true){
            this.state.defaultFlowChartColors[13]="black";
        }

        //COP3530
        if (this.state.completedCourses.COP3530 === true){
            this.state.defaultFlowChartColors[14]="black";
        }

        //CEN4010
        if (this.state.completedCourses.CEN4010 === true){
            this.state.defaultFlowChartColors[15]="black";
        }

        //STA3033
        if (this.state.completedCourses.STA3033 === true){
            this.state.defaultFlowChartColors[16]="black";
        }

        //COP4610
        if (this.state.completedCourses.COP4610 === true){
            this.state.defaultFlowChartColors[17]="black";
        }

        //COP4338
        if (this.state.completedCourses.COP4338 === true){
            this.state.defaultFlowChartColors[18]="black";
        }

        //CIS4911
        if (this.state.completedCourses.CIS4911 === true){
            this.state.defaultFlowChartColors[19]="black";
        }
    }


    render() {

        if (this.state.loaded === true) {
            this.flowLogic();
        
        return (
            <div>
                <div style={{padding: '30px', position: 'relative'}}>
                    <FlowChartBox default={this.state.defaultFlowChartColors[0]} action={this.handleClick.bind(this,0)}   top={44}  left={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[1]} action={this.handleClick.bind(this,1)}   top={44}  left={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[2]} action={this.handleClick.bind(this,2)}   top={44}  left={308} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[3]} action={this.handleClick.bind(this,3)}   top={44}  left={690} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[4]} action={this.handleClick.bind(this,4)}   top={44}  left={840} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[5]} action={this.handleClick.bind(this,5)}   top={44}  left={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[6]} action={this.handleClick.bind(this,6)}   top={177} left={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[7]} action={this.handleClick.bind(this,7)}   top={177} left={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[8]} action={this.handleClick.bind(this,8)}   top={188} left={328} width={101} height={60}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[9]} action={this.handleClick.bind(this,9)}   top={188} left={469} width={93} height={58}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[10]} action={this.handleClick.bind(this,10)}  top={177} left={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[11]} action={this.handleClick.bind(this,11)}  top={177} left={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[12]} action={this.handleClick.bind(this,12)}  top={310} left={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[13]} action={this.handleClick.bind(this,13)}  top={310} left={424} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[14]} action={this.handleClick.bind(this,14)}  top={310} left={690} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[15]} action={this.handleClick.bind(this,15)}  top={310} left={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[16]} action={this.handleClick.bind(this,16)}  top={475} left={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[17]} action={this.handleClick.bind(this,17)}  top={475} left={424} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[18]} action={this.handleClick.bind(this,18)}  top={426} left={690} width={116} height={84}></FlowChartBox>
                    <FlowChartBox default={this.state.defaultFlowChartColors[19]} action={this.handleClick.bind(this,19)}  top={475} left={974} width={116} height={84}></FlowChartBox> 
                    <img src={ require('../../img/flowchart.png') } alt="Flow Chart" />
                </div>
                
                <Link to={{pathname: '/searchresults', state: {query: this.state.queryCourses}}}>
                    <Button 
                   
                    color="success" 
                    style={
                        {float: 'right', 
                        marginRight: '30%', 
                        paddingLeft: '60px', 
                        paddingRight: '60px'}}>
                    Search
                    </Button>
                </Link>
            </div> 
        );
        } else {
            return <div>Loading....</div>
        }
        
    }
}

export default SearchForClasses;