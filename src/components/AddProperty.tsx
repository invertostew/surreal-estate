import React, { useState } from "react";

import axios from "axios";

import Alert from "./Alert";

import "../styles/AddProperty.css";

const AddProperty: React.FC = (): JSX.Element => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      city: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event: React.FormEvent): void => {
    event.preventDefault();

    setAlert({ message: "", isSuccess: false });

    const ENDPOINT = process.env?.REACT_APP_PROPERTY_LISTING_ENDPOINT as string;

    axios
      .post(ENDPOINT, fields)
      .then(() => {
        setAlert({
          message: "Property Added!",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;

    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };

  return (
    <section className="add-property" onSubmit={handleAddProperty}>
      <Alert message={alert.message} success={alert.isSuccess} />

      <form className="add-property-form">
        <label className="add-property-form__label" htmlFor="title">
          Title
          <input
            className="add-property-form__input"
            id="title"
            name="title"
            type="text"
            placeholder="2 Bed Flat"
            value={fields.title}
            onChange={handleFieldChange}
            required
          />
        </label>

        <label className="add-property-form__label" htmlFor="type">
          Type
          <select
            className="add-property-form__select"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            required
          >
            <option value="" disabled defaultValue="">
              Please select...
            </option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label className="add-property-form__label" htmlFor="city">
          City
          <select
            className="add-property-form__select"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            required
          >
            <option value="" disabled defaultValue="">
              Please select...
            </option>
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="London">London</option>
            <option value="Bristol">Bristol</option>
          </select>
        </label>

        <label className="add-property-form__label" htmlFor="bedrooms">
          Bedrooms
          <input
            className="add-property-form__input"
            id="bedrooms"
            name="bedrooms"
            type="number"
            min="1"
            placeholder="2"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            required
          />
        </label>

        <label className="add-property-form__label" htmlFor="bathrooms">
          Bathrooms
          <input
            className="add-property-form__input"
            id="bathrooms"
            name="bathrooms"
            type="number"
            min="1"
            placeholder="2"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            required
          />
        </label>

        <label className="add-property-form__label" htmlFor="price">
          Price
          <input
            className="add-property-form__input"
            id="price"
            name="price"
            type="number"
            min="1"
            placeholder="234995"
            value={fields.price}
            onChange={handleFieldChange}
            required
          />
        </label>

        <label
          id="email-label"
          className="add-property-form__label"
          htmlFor="email"
        >
          Email Address
          <input
            className="add-property-form__input"
            id="email"
            name="email"
            type="email"
            placeholder="person@email.com"
            value={fields.email}
            onChange={handleFieldChange}
            required
          />
        </label>

        <button type="submit" className="add-property-form__button">
          Add Property
        </button>
      </form>
    </section>
  );
};

export default AddProperty;
