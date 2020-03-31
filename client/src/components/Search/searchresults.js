import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import './styles/searchstyles.css'

// We can inject some CSS into the DOM.
const styles = {
  root: {
    flexGrow: 1,
  },

  cards: {
    background: 'lightgray',
    marginTop: 20,
    marginRight: 20,
    width: 300,
    height: 175,
    paddingLeft: 1,
  },

  title: {
    fontSize: 30,
  },

  checkbox: {
    paddingLeft: 1,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    width: 300,
    height: 175,
  },

  clickedCard: {
    background: '#d59f00',

    display: 'block',
    textAlign: 'initial',
    width: 300,
    height: 175,
  },

  regularCard: {
    display: 'block',
    textAlign: 'initial',
    width: 300,
    height: 175,
  },
}

class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [],
      query: [],
      chosenClasses: [],
      courseCount: 0,
      selected: [],
      courseOptions: [],
    }
  }

  componentDidMount() {
    this.getCourses() // fetch our courses
  }

  async getCourses() {
    await fetch('/api/courses')
      .then(results => results.json())
      .then(results => this.setState({ courses: results.data }))
  }

  handleCheckboxChange(course, itemIndex) {
    // remove if exists
    if (this.state.chosenClasses.includes(course._id)) {
      var index = this.state.chosenClasses.indexOf(course._id)
      if (index > -1) {
        this.state.chosenClasses.splice(index, 1)
      }
      this.setState({ courseCount: this.state.courseCount - 1 })
    } else {
      this.state.chosenClasses.push(course._id)
      this.setState({ courseCount: this.state.courseCount + 1 })
    }

    this.state.selected[itemIndex] = !this.state.selected[itemIndex]
  }

  addToCart() {
    for (let i = 0; i < this.state.courseCount; i++) {
      let submissiondata = {
        courseID: this.state.chosenClasses[i],
      }

      fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify(submissiondata),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }

  addToEnrolled() {
    for (let i = 0; i < this.state.courseCount; i++) {
      let submissiondata = {
        courseID: this.state.chosenClasses[i],
      }

      fetch('/api/enrolled', {
        method: 'POST',
        body: JSON.stringify(submissiondata),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }

  render() {
    const { classes } = this.props // styles object

    // courses user choose in searchforclasses
    const userCourses = this.props.location.state.query

    // populate course options to show user
    // if it is unfilled, populate based on
    // if the name of the course item in
    // userCourses matches a name in big
    // list of courses.
    if (this.state.courseOptions.length == 0) {
      this.state.courses.map(item => {
        for (let i = 0; i < userCourses.length; i++) {
          if (item.name === userCourses[i].name) {
            this.state.courseOptions.push(item)
          }
        }
      })
    }

    return (
      <div className={classes.root}>
        <div className="courseOptionsArea">
          <h1>Click on Course to Select</h1>
          <Grid container direction={'row'} spacing={3}>

            {this.state.courseOptions.map((item, index) => {

				// determines class of card based on if
				// if was selected.
				// if not selected, class of card is regularCard
				// if selected, class of card is clickedCard
              let cardClassName = !this.state.selected[index]
                ? classes.regularCard
                : classes.clickedCard

              return (
                <Card key={index} className={classes.cards}>
                  <ButtonBase
                    onClick={this.handleCheckboxChange.bind(this, item, index)}
                    className={cardClassName}
                  >
                    <CardContent>
                      <Typography className={classes.title} variant="h4">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {item.hour}
                      </Typography>
                    </CardContent>
                  </ButtonBase>
                </Card>
              )
            })}
          </Grid>
        </div>

        <span className="selectionArea">
          <strong style={{ marginRight: '50px' }}>
            {this.state.courseCount} Classes Selected.
          </strong>

          <Link
            to={{
              pathname: '/success',
              state: {
                selected: this.state.chosenClasses,
                type: 'Shopping Cart',
              },
            }}
          >
            <Button
              onClick={this.addToCart.bind(this)}
              color="primary"
              style={{
                paddingLeft: '60px',
                paddingRight: '60px',
              }}
            >
              Add to Cart
            </Button>
          </Link>

          <Link
            to={{
              pathname: '/success',
              state: { selected: this.state.chosenClasses, type: 'Schedule' },
            }}
          >
            <Button
              onClick={this.addToEnrolled.bind(this)}
              color="success"
              style={{
                paddingLeft: '60px',
                paddingRight: '60px',
                marginLeft: '15px',
              }}
            >
              Enroll
            </Button>
          </Link>
        </span>
      </div>
    )
  }
}

// withStyles, higher order component that
// allows us to style react
// From react.js: a higher-order component is a
// function that takes a componenet and returns a new
// component.
export default withStyles(styles)(SearchResults)
