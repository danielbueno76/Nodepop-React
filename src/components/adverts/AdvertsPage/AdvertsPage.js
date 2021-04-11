import React from "react";
import { Link } from "react-router-dom";
import { getLatestAdverts } from "../../../api/adverts";
import Layout from "../../layout/Layout";
import AdvertsList from "./AdvertsList";
import AdvertsFormFilter from "./AdvertsFormFilter";
import { Button } from "../../shared";

const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Be the first ad!</p>
    <Button as={Link} to="/advert/new" variant="primary">
      Create ad
    </Button>
  </div>
);

const AdvertsPage = ({ className, ...props }) => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);

  const handleSubmit = (advertFilter) => {
    const queryArray = [];
    for (const key in advertFilter) {
      if (Array.isArray(advertFilter[key])) {
        advertFilter[key].forEach((elem) => queryArray.push(`${key}=${elem}`));
      } else {
        if (advertFilter[key]) {
          queryArray.push(`${key}=${advertFilter[key]}`);
        }
      }
    }
    const query = `?${queryArray.join("&")}`;
    getLatestAdverts(query).then(setAdverts);
  };

  return (
    <Layout title="List of advertisements" {...props}>
      <div className={className}>
        <AdvertsFormFilter onSubmit={handleSubmit} />
        {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
