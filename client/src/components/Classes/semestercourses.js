import React, {Component} from 'react';
import {Button} from 'reactstrap'
import './classes.css'

class SemesterCourses extends Component {
        
    
    render() {
        return (
            <div style={{width:'70%', marginLeft: '5%', marginTop: '2%'}}>
                <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{this.props.location.state.semester}</h2>
                <div style={{width: '100%', height: '500px', border: 'solid 1px black'}}>
                    <h4 style={{marginTop: '5%', display: 'flex',  justifyContent:'center', alignItems:'center'}}>Classes for {this.props.location.state.semester} go here, TODO </h4>
                </div>
            </div>
            
        );
        
        
    }
}

export default SemesterCourses;