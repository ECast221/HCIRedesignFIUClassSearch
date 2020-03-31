import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


class Success extends Component {
        

    render() {

        let link; 
        let message;

        if (this.props.location.state.type === "Shopping Cart"){
            message = "Successfully added to cart.";
            link = <div>
                <Link to="/shoppingcart">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '15%'}}>
                    View Shopping Cart
                </Button>
            </Link>
            </div>
        } else if (this.props.location.state.type === "Schedule"){
            message = "Courses successfully added to your schedule.";
            link = <div>
                <Link to="/myschedule">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '15%'}}>
                    View Schedule
                </Button>
            </Link>
            </div>
        } else if (this.props.location.state.type === "Removed from Cart"){
            message = "Courses successfully removed from Shopping Cart.";
            link = <div>
                <Link to="/shoppingcart">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '15%'}}>
                    View Shopping Cart
                </Button>
            </Link>
            </div>
        } else if (this.props.location.state.type === "Dropped"){
            message = "Courses successfully removed from your schedule.";
            link = <div>
                <Link to="/myschedule">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '15%'}}>
                    View Schedule
                </Button>
            </Link>
            </div>
        }

        return (
            <div style={{marginLeft: '20%', marginTop: '10%'}}>
                <h3>{message}</h3>
                {link}
             </div>
        );
        
        
    }
}

export default Success;