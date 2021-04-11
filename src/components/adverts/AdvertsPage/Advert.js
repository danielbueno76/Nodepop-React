import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";
import { messageSale } from "../../../utils/utils";

const Advert = ({ id, createdAt, name, sale, price, tags, ...props }) => {
  return (
    <div as={Link} key={id} className="card" to={`/advert/${id}`}>
      <div className="card-content">
        <div className="content">
          <p>Title: {name}</p>
          <p>Price: {price}</p>
          <p>{messageSale(sale)}</p>
          <p>Tags: {tags.map((tag) => tag + ", ")}</p>
          <time dateTime={createdAt}>{createdAt}</time>
        </div>
      </div>
    </div>
  );
};

export const AdvertType = {
  id: T.string.isRequired,
  createdAt: T.string.isRequired,
  name: T.string.isRequired,
  sale: T.bool.isRequired,
  price: T.number.isRequired,
  tags: T.array.isRequired,
};

Advert.propTypes = AdvertType;

Advert.defaultProps = {
  content: "Nothing here!",
};

export default Advert;
