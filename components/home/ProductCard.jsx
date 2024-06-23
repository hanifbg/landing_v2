import React from "react";
import { Card, CardHeader, CardMedia, CardContent, IconButton, Typography, Avatar } from "@mui/material";
import { Favorite as FavoriteIcon, Star as StarIcon } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const { discount, image, name, rating, price } = product;
  return (
    <Card sx={{ maxWidth: 345, m: 0 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="discount">
            {discount}%
          </Avatar>
        }
        action={
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
        }
        title="Discount"
        subheader={`${discount}% OFF`}
      />
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "gold", mr: 1 }} />
          {rating}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
