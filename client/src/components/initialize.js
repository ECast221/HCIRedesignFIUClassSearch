import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"];

const Checkbox = props => (
                            <input type="checkbox" {...props} />
                          );
class InitializePage extends Component {
    
    constructor(){
        super();

        this.state = {
            takenArray: [false,false,false,false,false,false,false,false,false,
                false,false,false,false,false,false,false,false,false,false,false]
        }
    }

    
    handleCheckboxChange(index){

        var takenArray = [...this.state.takenArray]

        takenArray[index] = !takenArray[index]
        // this.state.takenArray[index] = !this.state.takenArray[index];
        this.setState({takenArray: takenArray})
        console.log(index, this.state.takenArray[index]);

    }

    initalize(){
        let initializedCourses = {
                "MAC2311": false,
                "NSE1": false,
                "NSE2": false,
                "COP2210": false,
                "CGS1920": false,
                "ENC3249": false,
                "MAC2312": false,
                "PHY2048": false,
                "MAD2104": false,
                "COT3100": false,
                "COP3337": false,
                "CGS3095": false,
                "PHY2049": false,
                "CDA3102": false,
                "COP3530": false,
                "CEN4010": false,
                "STA3033": false,
                "COP4610": false,
                "COP4338": false,
                "CIS4911": false
            
        };

        fetch('/api/completed/5e7f509b737acab01ef9fe02', {
            method: 'PUT',
            body: JSON.stringify(initializedCourses),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            
            .then((response) => response.json())
            .then((result) => {
            console.log('Success:', result);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }

    setCourses(){
        let setCourses = {
            "MAC2311": this.state.takenArray[0],
            "NSE1": this.state.takenArray[1],
            "NSE2": this.state.takenArray[2],
            "COP2210": this.state.takenArray[3],
            "CGS1920": this.state.takenArray[4],
            "ENC3249": this.state.takenArray[5],
            "MAC2312": this.state.takenArray[6],
            "PHY2048": this.state.takenArray[7],
            "MAD2104": this.state.takenArray[8],
            "COT3100": this.state.takenArray[9],
            "COP3337": this.state.takenArray[10],
            "CGS3095": this.state.takenArray[11],
            "PHY2049": this.state.takenArray[12],
            "CDA3102": this.state.takenArray[13],
            "COP3530": this.state.takenArray[14],
            "CEN4010": this.state.takenArray[15],
            "STA3033": this.state.takenArray[16],
            "COP4610": this.state.takenArray[17],
            "COP4338": this.state.takenArray[18],
            "CIS4911": this.state.takenArray[19]
        
    };

    fetch('/api/completed/5e7f509b737acab01ef9fe02', {
        method: 'PUT',
        body: JSON.stringify(setCourses),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        
        .then((response) => response.json())
        .then((result) => {
        console.log('Success:', result);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
    
    render() {

        
        return (
            <div>
                <h2>Please select the courses you've already taken:</h2>
                {courseNames.map((element, index) => {
                    return <div key={index} style={{float: 'left', margin: '5px',width: '350px', height:'50px', border: '1px solid black', padding: '10px'}}>{element}
                    <Checkbox style={{float: 'right', marginRight: '30px', width: '25px', height: '25px'}}             
                    onClick={this.handleCheckboxChange.bind(this, index)}
                /></div>
                })}
                <div style={{float: 'right', margin: '50px', clear: 'both'}}>
                    <Link to="/searchforclasses">
                    
                    <Button onClick={this.initalize.bind(this)} style={{marginRight:'20px'}} color = "warning">Initialize</Button>
                    <Button onClick={this.setCourses.bind(this)} color = "success">Submit</Button>
                    </Link>
                </div>
             </div>
        );
        
        
    }
}

export default InitializePage;