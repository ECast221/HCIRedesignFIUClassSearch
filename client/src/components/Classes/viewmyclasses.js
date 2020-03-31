import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './classes.css'

class ViewMyClasses extends Component {
        
    
    render() {
        return (
            <div style={{width:'70%', margin: '8%'}}>
                <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Select a Semester</h2>
                <div style={{marginLeft: '1%', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Link style={{width: '350px', height: '100px', margin: '1%'}} to={{pathname: '/semestercourses', state: {semester: "Fall 2019"}}}>
                        <Button color="warning" style={{width: '350px', height: '100px', margin: '1%'}}>Fall 2019</Button>
                    </Link>
                    <Link style={{width: '350px', height: '100px', margin: '1%'}} to={{pathname: '/semestercourses', state: {semester: "Spring 2020"}}}>
                        <Button color="info" style={{width: '350px', height: '100px', margin: '1%'}}>Spring 2020</Button>
                    </Link>
                    <Link style={{width: '350px', height: '100px', margin: '1%'}} to={{pathname: '/semestercourses', state: {semester: "Summer 2020"}}}>
                        <Button color="success" style={{width: '350px', height: '100px', margin: '1%'}}>Summer 2020</Button>
                    </Link>
                </div>
            </div>
            
        );
        
        
    }
}

export default ViewMyClasses;