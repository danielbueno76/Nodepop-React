import React from "react";
import { Link } from "react-router-dom";
// import { getLatestTweets } from "../../../api/tweets";
import Layout from "../../layout/Layout";
// import TweetsList from "./TweetsList";
import { Button } from "../../shared";

const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Be the first ad!</p>
    <Button as={Link} to="/tweet" variant="primary">
      Create ad
    </Button>
  </div>
);

const AdvertsPage = ({ className, ...props }) => {
  //   const [tweets, setTweets] = React.useState([]);

  //   React.useEffect(() => {
  //     getLatestTweets().then(setTweets);
  //   }, []);

  return (
    <Layout title="List of advertisements" {...props}>
      <div className={className}>
        {/* {tweets.length ? <TweetsList tweets={tweets} /> : <EmptyList />} */}
        <EmptyList />
      </div>
    </Layout>
  );
};

export default AdvertsPage;
