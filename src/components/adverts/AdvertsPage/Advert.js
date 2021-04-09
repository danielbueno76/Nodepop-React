import React from "react";
import T from "prop-types";
import Photo from "../../shared/Photo";
import { Link } from "react-router-dom";

const Advert = ({ id, createdAt, name, sale, price, tags, photo }) => {
  let messageSale = "";
  if (sale) {
    messageSale = "This product is available for sale.";
  } else {
    messageSale = "I am looking for this product.";
  }

  return (
    <div className="card">
      <Link to={`/ad.html?id=${id}`}>
        <div className="card-content">
          <div className="content">
            <p>Title: {name}</p>
            <p>Price: {price}</p>
            <p>{messageSale}</p>
            <p>Tags: {tags.map((tag) => tag + ", ")}</p>
            <time dateTime={createdAt}>{createdAt}</time>
          </div>
        </div>
        <Photo src={photo} />
      </Link>
      <button className="button is-danger">Delete</button>
    </div>
  );
};

export const AdvertType = {
  id: T.string.isRequired,
  createdAt: T.string.isRequired,
  name: T.string.isRequired,
  sale: T.bool.isRequired,
  price: T.number.isRequired,
  photo: T.string,
  tags: T.array.isRequired,
};

Advert.propTypes = AdvertType;

Advert.defaultProps = {
  content: "Nothing here!",
};

export default Advert;
