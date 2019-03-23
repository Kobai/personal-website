import React, { Component } from 'react';
import './experience-mobile.scss';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Chip from '@material-ui/core/Chip'

class ExperienceMobile extends Component {
  render() {
    return (
      <div>
        <div className='experience-container-mobile'>
          <h1>Heres where I've been recently</h1>
          <div className='card-container'>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/1036116-cd826183bd79280c658db461c14febe0-medium_jpg.jpg?buster=1468536628"
                    alt='S'
                  />
                }
                title='SnapTravel: Software Engineering Intern'
                subheader='Jan-Apr 2019'
              />
              <CardContent>
                <Typography paragraph>
                  Implemented Server-Side-Rendering compatibility into 
                  numerous <b>React</b> components, improving the average page loading time by over <b>400%</b>
                </Typography>
              </CardContent>
              <CardActions>
                <Typography paragraph>
                  Technologies:
                </Typography>
                <Chip className='chip'
                  avatar={<Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>}
                  label='React'
                  color='primary'
                  variant='outlined'
                />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceMobile;