import React, { useState, useEffect, Component } from "react";
import "./App.css";
import axios from "axios";
import "./index.js";
import styled from 'styled-components'
import { Header, Segment } from 'semantic-ui-react'
import { Button, Icon, Label } from 'semantic-ui-react'
import { Menu} from 'semantic-ui-react'

 class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='About'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Nasa'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Contact'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}

const ButtonExampleLabeledBasic = () => (
  <div>
    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>
  </div>
)


const HeaderExampleAttached = () => (
  <div>
    <Header as='h2' attached='top'>
      Nasa Photo of The Day
    </Header>
    <Segment className = "discover" attached>
    Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
    </Segment>
  </div>
)


export default function App() {
 //const [nasaPhoto, setNasa] = useState([]);
 const [apod, setApod] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [Head, setHead] = useState([]);

  useEffect(() =>  {
    setIsLoading(true);
    setApod([]);
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res); 
      setApod(res.data.url);  
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }  
  return (
    <div className="App">
      <MenuExampleSecondaryPointing />
        <HeaderExampleAttached  />
        <ButtonExampleLabeledBasic />
        <img className = "picture" src={apod}/>
      
    </div>
  );
}

//export default App;

