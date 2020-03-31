import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Checkbox = props => (
    <input type="checkbox" {...props} />
  );


class DropClasses extends Component {
        
    constructor(props){
        super(props);

        this.state = {
            'totalCourses': [],
            'enrolledCourses': [],
            'checkedCourses': [],
            loaded: null
            
        }
    }

    componentDidMount () {
        this.getCourses();
    }


    getCourses(){
        
        fetch('/api/courses')
        .then(results => results.json())
        .then(results => this.setState({'totalCourses': results.data}));
        
        fetch('/api/enrolled')
        .then(results => results.json())
        .then(results => this.setState({'enrolledCourses': results.data, loaded: true}));


    }

    handleCheckboxChange(course){
        if (this.state.checkedCourses.includes(course)){
            var index = this.state.checkedCourses.indexOf(course);
            if (index > -1) {
                this.state.checkedCourses.splice(index, 1);
             }
             
        } else {
            this.state.checkedCourses.push(course);
            
        }

        console.log(this.state.checkedCourses);
    }

    dropCourses(){
        for (let i = 0; i < this.state.checkedCourses.length; i++){
            axios.delete(`/api/enrolled/` + this.state.checkedCourses[i])
            .then(res => {
              console.log(res);
              console.log(res.data);
            });

        }
    }

    dropCourse(ID){
       
        axios.delete(`/api/enrolled/` + ID)
        .then(res => {
          console.log(res);
          console.log(res.data);
        });

        window.location.reload();
    
}

    render() {

        if (this.state.loaded != true){
            return <div style={{marginLeft: '35%', marginTop: '10%'}}>Loading...</div>
        }
    

        {/* No courses in schedule */}
        if (this.state.enrolledCourses.length === 0){
            return <div style={{marginLeft: '25%', marginTop: '10%', width:'500px'}}>
                    <div style={{marginLeft: '130px'}}><h2>Drop Courses</h2></div>
                    <div><strong>No courses in schedule, search and add courses to your schedule</strong></div>
                    <div>
                        <Link to="/searchforclasses">
                        <Button 
                            color="success" 
                            style={
                                {
                                    paddingLeft: '60px', 
                                    paddingRight: '60px',
                                    marginLeft: '110px',
                                    marginTop: '20px'}}>
                            Search for classes
                        </Button>
                    </Link>
                </div>
                </div>
        } else {
        return (
            <div>
             <div style={{overflowY: 'scroll', height: '620px', margin: '1%'}}> 
                    <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Drop Classes</h2>
                {this.state.totalCourses.map(function(item, index) {
                    for (let i = 0; i < this.state.enrolledCourses.length; i++){
                        if (item._id === this.state.enrolledCourses[i].courseID){
                            return <Card
                            border="secondary"
                    
                            style={{ width: '30%', margin: '15px',float: 'left'}}
                          >
                            <Card.Header><Card.Title>{item.name}</Card.Title></Card.Header>
                            <Card.Body>
                              
                              <Card.Text>
                                <p style={{textIndent: '30px', float: 'left'}}>{item.hour}</p>
                                <Button onClick={this.dropCourse.bind(this, this.state.enrolledCourses[i]._id)} color="danger" style={{float: 'right', marginRight: '20%'}}>Delete</Button>

                                <label>
                                    <Checkbox style={{float: 'right', position: 'absolute', right: '0', marginRight: '30px', width: '25px', height: '25px'}}
                                        
                                        onClick={this.handleCheckboxChange.bind(this, this.state.enrolledCourses[i]._id)}
                                    />
                                    
                                    </label>
                              </Card.Text>
                              
                              
                            </Card.Body>
                            
                          </Card>
                         }
                    }
            }, this)}
             </div>
             <div>
                 <Link to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Dropped"}}}>
                <Button 
                    onClick={this.dropCourses.bind(this)}
                    color="danger" 
                    style={
                        {
                            paddingLeft: '60px', 
                            paddingRight: '60px',
                            marginLeft: '40%'}}>
                    Drop Courses
                </Button>
            </Link>
            <Button 
                            
                            
                            color="warning" 
                            style={
                                {
                                    paddingLeft: '60px', 
                                    paddingRight: '60px',
                                    height: '40px',
                                    width: '200px',
                                    marginLeft: '10%',
                                }}>
                            Select All
                        </Button>
             </div>
             </div>
        );
        
                        }
    }
}

export default DropClasses;