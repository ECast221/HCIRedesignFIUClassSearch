import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class MySchedule extends Component {
        
    constructor(props){
        super(props);

        this.state = {
            'totalCourses': [],
            'chosenCourses': [],
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
        .then(results => this.setState({'chosenCourses': results.data, loaded: true}));


    }

    render() {

        if (this.state.loaded != true){
            return <div style={{marginLeft: '35%', marginTop: '10%'}}>Loading...</div>
        }


        {/* No courses in schedule */}
        if (this.state.chosenCourses.length === 0){
            return <div style={{marginLeft: '25%', marginTop: '10%', width:'500px'}}>
                
                    <div style={{marginLeft: '130px'}}><h2>My Schedule</h2></div>
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
                <h2 style={{display: 'flex', margin: '1%',  justifyContent:'center', alignItems:'center'}}>My Schedule</h2>
                {this.state.totalCourses.map(function(item, index) {
                    for (let i = 0; i < this.state.chosenCourses.length; i++){
                        if (item._id === this.state.chosenCourses[i].courseID){
                            return <Card
                            border="secondary"
                    
                            style={{ width: '30%', float: 'left', margin: '15px'}}
                          >
                            <Card.Header><Card.Title>{item.name}</Card.Title></Card.Header>
                            <Card.Body>
                              
                              <Card.Text>
                                <p style={{textIndent: '30px', float: 'left'}}>{item.hour}</p>
                            
                              </Card.Text>
                              
                              
                            </Card.Body>
                            
                          </Card>
                         }
                    }
            }, this)}
             </div>
        );
        }
        
    }
}

export default MySchedule;