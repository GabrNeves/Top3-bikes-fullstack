import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import BikeScooterSharpIcon from "@mui/icons-material/BikeScooterSharp";
import Chip from '@mui/material/Chip';

export default function RankPage({ product }: any) {
  console.log(product);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 900,
        bgcolor: "background.paper",
        margin: "1rem auto",
        marginBottom: '20rem'
      }}
    >
      <h2 className="title">Find here the TOP 3 most dealed products</h2>
      {product &&
        product.slice(0, 3).map((item: any) => {
          return (
            <>
              <List sx={[{transition: '200ms', borderRadius: '0.4rem','&:hover':{background: 'rgba(133, 184, 22, 0.2)'}}]}>
              <ListItem >
                <ListItemAvatar>
                    <Avatar>
                      <BikeScooterSharpIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item._id.Make + ' ' + item._id.Model}
                  secondary={"Latest dealed: " + item.LastDate }
                />
                <Chip label={'Lowest price: € ' + item.MinPrice} sx={{marginRight: '3rem'}}/>
                <Badge badgeContent={item.Count} color='secondary' sx={{marginRight: '2rem'}}></Badge>
              </ListItem>
              </List>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
    </List>
  );
}
