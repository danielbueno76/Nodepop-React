import React from "react";
import Layout from "../../layout/Layout";
import { getAdvertDetail, deleteAdvert } from "../../../api/adverts";
import { Redirect } from "react-router";
import { messageSale } from "../../../utils/utils";
import Photo from "../../shared/Photo";
import DeleteButton from "../../shared/DeleteButton";

const AdvertPage = ({ match, ...props }) => {
  const [advert, setAdverts] = React.useState({});
  const [error, setError] = React.useState(null);
  const [adHasBeenDeleted, setAdHasBeenDeleted] = React.useState(false);

  React.useEffect(() => {
    getAdvertDetail(match.params.advertId).then(setAdverts).catch(setError);
  }, [match.params.advertId]);

  if (error && error.status === 404) {
    return <Redirect to="/404" />;
  }

  const handleDeleteAdvert = () => {
    const deleteConfirmed = window.confirm(
      "Are you sure you want to delete the ad?"
    );
    if (deleteConfirmed) {
      deleteAdvert(match.params.advertId)
        .then(setAdHasBeenDeleted(true))
        .catch(setError);
    }
  };

  if (adHasBeenDeleted) {
    window.location.href = "/adverts";
  }

  const { name, price, sale, tags, photo, createdAt } = advert;
  return (
    <Layout title="Advert Detail" {...props}>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>Title: {name}</p>
            <p>Price: {price}</p>
            <p>{messageSale(sale)}</p>
            <p>Tags: {tags && tags.map((tag) => tag + ", ")}</p>
            <time dateTime={createdAt}>{createdAt}</time>
          </div>
        </div>
        <Photo src={photo} alt={name} />
        <DeleteButton onClick={handleDeleteAdvert}>Delete</DeleteButton>
      </div>
    </Layout>
  );
};

export default AdvertPage;
