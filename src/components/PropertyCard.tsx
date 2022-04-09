import React from "react";

import "../styles/PropertyCard.css";

interface PropertyCardProps {
  title: string;
  type: string;
  city: string;
  bathrooms: number;
  bedrooms: number;
  price: number;
  email: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
}): JSX.Element => {
  return (
    <article className="property-card">
      <p className="property-card__title">Title: {title}</p>
      <p className="property-card__type">Type: {type}</p>
      <p className="property-card__city">City: {city}</p>
      <p className="property-card__bathrooms">Bathrooms: {bathrooms}</p>
      <p className="property-card__bedrooms">Bedrooms: {bedrooms}</p>
      <p className="property-card__price">Price: {price}</p>
      <p className="property-card__email">Email: {email}</p>
    </article>
  );
};

export default PropertyCard;
