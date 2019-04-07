import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardMedia, ExpansionPanel } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import axios from 'axios'

class ProjCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      file: '',
      types: []
    }
  }

  handleFile = e => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    this.setState({file: formData})
    axios({
      method: 'post',
      url: 'https://poketype-api-heroku.herokuapp.com/get_type',
      data: formData,
    }).then(res => {
      this.setState({types: res})
    })
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <Card style={{
        'margin': '20px 10px 20px 10px',
        'borderRadius': '10px',
        'boxShadow': '0 10px 20px rgba(0,0,0,0.19)',
      }}>
        <CardMedia
          component='img'
          alt='pokemon'
          height='160'
          image={this.props.img}
          title='poketype'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {this.props.title}
          </Typography>
          <Typography component='p'>
            {this.props.summary}
          </Typography>
        </CardContent>
        <CardActions>
          {this.props.title === 'PokeType' && (
            <div style={{ 'width': '100%' }}>
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  <Typography>
                    Try it out
                </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <input type='file' onChange={this.handleFile}/>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          )}
        </CardActions>
      </Card>
    )
  }
}

export default ProjCard;