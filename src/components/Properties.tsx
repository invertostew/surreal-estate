import React, { useState, useEffect } from "react";

import axios from "axios";

import Alert from "./Alert";
import PropertyCard from "./PropertyCard";

import "../styles/Properties.css";

const Properties: React.FC = (): JSX.Element => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  // todo: come back and fix this any
  const [properties, setProperties] = useState<any[]>(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    const ENDPOINT = process.env?.REACT_APP_PROPERTY_LISTING_ENDPOINT as string;

    axios
      .get(ENDPOINT)
      .then((res) => {
        setProperties(res.data);
        setAlert({
          message: "",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  return (
    <section className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />

      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          title={property.title}
          type={property.type}
          city={property.city}
          bathrooms={property.bathrooms}
          bedrooms={property.bedrooms}
          price={property.price}
          email={property.email}
        />
      ))}
    </section>
  );
};

export default Properties;
