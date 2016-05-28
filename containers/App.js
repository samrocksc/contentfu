import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchContent } from '../actions'
// Dropdown MUI
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentValue: 'Please pick a key to modify',
      value: '2'
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log('componentDidMount',this.props);
    dispatch(fetchContent());
  }

  selectKey(event){
    this.setState({contentValue: event.target.value})
  }

  handleChange() {
    console.log('change happened');
  }


  render() {
    const { content, selectedReddit, posts, isFetching, lastUpdated } = this.props
    const keyMap = content.contentList.map(function(content){
      return <option key={content.id} value={content.content}>{content.key}</option>
    })
    return (
      <div style={divStyle}>

      <Card>
        <CardMedia overlay={<CardTitle title="ContentFu" subtitle="Quickly create a content API" />}>
          <img src="http://lorempixel.com/600/337/nature/" />
        </CardMedia>
          <CardTitle title="Your Content" subtitle="Use the dropdown to view your content" />
          <CardText>
            <select onChange={this.selectKey.bind(this)}>
              <option>Select A Key</option>
              {keyMap}
            </select>
            <p>{this.state.contentValue}</p>
          </CardText>
          <CardActions>
            <FlatButton label="Add Content" />
          </CardActions>
        </Card>


        </div>
    )
  }
}

var textStyle = {
  width: '300px'
}

var divStyle = {
  margin: '0 auto',
  width: '50%'
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  const { content } = state
  return {
    content
  }
}

export default connect(mapStateToProps)(App)
