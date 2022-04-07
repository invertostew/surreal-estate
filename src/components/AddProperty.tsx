import React, { useState } from "react";

const AddProperty: React.FC = (): JSX.Element => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event: React.FormEvent): void => {
    event.preventDefault();

    console.log(fields);
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
      <form className="add-property-form">
        <label>
          Title
          <input
            className="add-property-form__input"
            id="title"
            name="title"
            type="text"
            placeholder="2 Bed Flat"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>

        <label>
          Type
          <select
            className="add-propert-form__select"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
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

        <label>
          Bedrooms
          <input
            className="add-property-form__input"
            id="bedrooms"
            name="bedrooms"
            type="number"
            placeholder="2"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label>
          Bathrooms
          <input
            className="add-property-form__input"
            id="bathrooms"
            name="bathrooms"
            type="number"
            placeholder="2"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>

        <label>
          Price
          <input
            className="add-property-form__input"
            id="price"
            name="price"
            type="number"
            placeholder="234995"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label>
          City
          <select
            className="add-propert-form__select"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
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

        <label>
          Email
          <input
            className="add-property-form__input"
            id="email"
            name="email"
            type="email"
            placeholder="person@email.com"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>

        <button type="submit" className="add-property__button">
          Add Property
        </button>
      </form>
    </section>
  );
};

export default AddProperty;
