import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Mail, Person } from '@mui/icons-material';



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   title: 'Coffee',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  // },
];

const RightBar = ({width}) => {

  const [maxi, setMaxi] = useState(null)


  useEffect(() => {
    const a = parseInt(width / 48)
    setMaxi(a - 1)
  }, [width])
  console.log(maxi)

  return (
    <Box sx = {{paddingInline: ".5rem"}}>

      <Typography variant = "h5" fontWeight={300}>
        Online Friends
      </Typography>

      <Box sx = {{ display: "flex", justifyContent: "center", marginLeft: {md: "3rem"}}}>
          <AvatarGroup max = {maxi > 0 ? maxi : 2}>
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/79.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Travis Howard" src="https://randomuser.me/api/portraits/women/87.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/55.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/51.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Trevor Henderson" src="https://randomuser.me/api/portraits/women/51.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/55.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/51.jpg" />
            <Avatar sx = {{width: "3rem", height: "3rem"}} alt="Trevor Henderson" src="https://randomuser.me/api/portraits/women/51.jpg" />
          </AvatarGroup>
      </Box>

      <Typography sx = {{marginTop: "2rem"}} variant = "h5" fontWeight={300}>
        Latest Photos
      </Typography>

      <ImageList sx = {{}} gap = {1} cols = {3} rowHeight = "120">
            {itemData.map(item => (
                <ImageListItem sx = {{}} key = {item.img}>
                    <Image src={item.img} layout = "fill" objectFit='cover' alt = {item.title} />
                </ImageListItem>
            ))}
        </ImageList>

        <Typography sx = {{marginTop: "2rem"}} variant = "h5" fontWeight={300}>
          Latest Conversation
        </Typography> 

        <List>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar sx = {{width: "3rem", height: "3rem"}} src = "https://randomuser.me/api/portraits/men/5.jpg" />
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "Will Smith" secondary = {
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    } />
                </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar sx = {{width: "3rem", height: "3rem"}}>
                                    <Person />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "Will Smith" secondary = {
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    } />
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar sx = {{width: "3rem", height: "3rem"}} src = "https://randomuser.me/api/portraits/men/5.jpg" />
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "Will Smith" secondary = {
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    } />
                </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar sx = {{width: "3rem", height: "3rem"}} src = "https://randomuser.me/api/portraits/men/5.jpg" />
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "Will Smith" secondary = {
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    } />
                </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar sx = {{width: "3rem", height: "3rem"}} src = "https://randomuser.me/api/portraits/men/5.jpg" />
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary = "Will Smith" secondary = {
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    } />
                </ListItemButton>
            </ListItem>

            <Divider />

          </List>

    </Box>
  )
}

export default RightBar