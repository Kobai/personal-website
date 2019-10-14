import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Chip from '@material-ui/core/Chip'

class ExpCard extends Component {

  renderAccomplishments() {
    return this.props.accomplishments.map(a =>
      <Typography paragraph>
        {a}
      </Typography>
    )
  }

  renderTechs() {
    return this.props.technologies.map(tech => 
      <Chip className='chip'
        label={tech}
        color='primary'
        variant='outlined'
      />
    )
  }

  render() {
    return (
      <Card style={{
        'margin': '20px 10px 20px 10px', 
        'boxShadow': '0 10px 20px rgba(0,0,0,0.19)',
        }}>
        <CardHeader
          avatar={
            <Avatar
              src={this.props.logo}
              alt='S'
            />
          }
          title={this.props.title}
          subheader={this.props.duration}
        />
          <CardContent style={{
            'minHeight': '100px'
          }}>
            {this.renderAccomplishments()}
          </CardContent>
        <CardActions 
          style={{'overflow-x': navigator.userAgent.match(/Mobile/i) ? 'scroll' : 'hidden'}}>
          { this.renderTechs() }
        </CardActions>
      </Card>
    )
  }
}

export default ExpCard;