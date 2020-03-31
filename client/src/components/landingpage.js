import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Logo} from '../img/logo.png';

const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"];

const Checkbox = props => (
                            <input type="checkbox" {...props} />
                          );
class LandingPage extends Component {
    


    
    
    render() {

        
        return (<div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '5%'}}>
                        <h3>Welcome to RedesignMyFIUClassSearch!</h3>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '0%'}}>
                        <img src={require('../img/logo.png')} />
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '0%'}}>
                        <h4>Please click 'Initialize' to tailor the testing environment to your courses.</h4>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '0%'}}>
                        <Link to="/initialize">
                        <Button color="success">
                            Initialize
                        </Button>
                        </Link>
                        </div>
                    
                </div>
        );
        
        
    }
}

export default LandingPage;