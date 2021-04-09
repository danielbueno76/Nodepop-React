import React from "react";
import { Link } from "react-router-dom";
import { getLatestAdverts } from "../../../api/adverts";
import Layout from "../../layout/Layout";
import AdvertsList from "./AdvertsList";
import { Button } from "../../shared";

const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Be the first ad!</p>
    <Button as={Link} to="/new-advert" variant="primary">
      Create ad
    </Button>
  </div>
);

const AdvertsPage = ({ className, ...props }) => {
  const [adverts, setAdverts] = React.useState([]);
  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, [adverts]);

  return (
    <Layout title="List of advertisements" {...props}>
      <div className={className}>
        {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
