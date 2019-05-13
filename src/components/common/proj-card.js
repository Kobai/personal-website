import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardMedia } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions'
import Chip from '@material-ui/core/Chip'

class ProjCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file: '',
      types: []
    }
  }

  render() {
    return (
      <Card style={{
        'margin': '20px 10px 20px 10px',
        'boxShadow': '0 10px 20px rgba(0,0,0,0.19)',
      }}>
        <CardMedia
          component='img'
          alt='pokemon'
          height='200'
          style={{ 'objectFit': 'cover' }}
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
          {this.props.techs.map(tech =>
            <Chip
              label={tech}
              color='primary'
              variant='outlined'
            />
          )}
        </CardActions>
        <CardActions style={{'borderTop': 'solid 1px #fafafa'}}>
          <a 
            style={{
              'width': '100%', 
              'textAlign': 'center',
              'color': '#212121',
              'textDecoration': 'none',
              'fontWeight': '500'
            }}
            href={this.props.visit}>
            Visit
         </a>
        </CardActions>
      </Card>
    )
  }
}

export default ProjCard;