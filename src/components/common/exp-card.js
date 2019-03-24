import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip'

class ExpCard extends Component {

  renderAccomplishments() {
    return this.props.info.accomplishments.map(a =>
      <Typography paragraph>
        {a}
      </Typography>
    )
  }

  renderTechs() {
    return this.props.info.technologies.map(tech => 
      <Chip className='chip'
        label={tech}
        color='primary'
        variant='outlined'
      />
    )
  }

  render() {
    return (
      <Card style={{margin: '20px 10px 20px 10px'}}>
        <CardHeader
          avatar={
            <Avatar
              src={this.props.info.logo}
              alt='S'
            />
          }
          title={this.props.info.title}
          subheader={this.props.info.duration}
        />
        <CardActionArea>
          <CardContent>
            {this.renderAccomplishments()}
          </CardContent>
        </CardActionArea>
        <CardActions 
          style={{'overflow-x': navigator.userAgent.match(/Mobile/i) ? 'scroll' : 'hidden'}}>
          <Typography paragraph>
            Technologies:
          </Typography>
          { this.renderTechs() }
        </CardActions>
      </Card>
    )
  }
}

export default ExpCard;