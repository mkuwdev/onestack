import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { EXPLORE_PUBLICATIONS } from "./api/publication";

 const Publications = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { loading, error, data } = useQuery(EXPLORE_PUBLICATIONS, {
    variables: {
      request: {
        sortCriteria: "TOP_COMMENTED",
        sources: ["onestacktest3"],
        limit: 20,
        },
    },
  });

  // const data = getPublications(
  //   {
  //      // you can filter the publication types along side it
  //     "publicationTypes": ["POST", "COMMENT", "MIRROR"]
  //     // also dont forget you can filter these queries on sources as well
  //     // "sources": ["lost-place-dapp"]
  //  }
  // )

  console.log(data);
  return (
    <div className="p-2 border rounded">
      <h1
        className="text-xl font-bold text-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Top 20 Commented Publications
      </h1>
      {loading && (
        <h1>Loading</h1>
      )}
      {isOpen && data && (
        <>
          {data.explorePublications.items.map((item, index) => (
            <div key={index} className="m-2 p-2 border rounded">
              <div className="text-xs italic">id: {item.id}</div>

              <div className="font-semibold">Name : {item.metadata.name}</div>
              <div>Content : {item.metadata.content}</div>
              <div>Description : {item.metadata.description}</div>

              <div className="p-4">
                <div className="font-semibold">
                  Username : {item.profile.handle}
                </div>
                <div>AppId : {item.appId}</div>
                <div>Collects : {item.profile.stats.totalCollects}</div>
                <div>Comments : {item.profile.stats.totalComments}</div>
                <div>Followers : {item.profile.stats.totalFollowers}</div>
                <div>Following : {item.profile.stats.totalFollowing}</div>
                <div>Mirrors : {item.profile.stats.totalMirrors}</div>
                <div>Posts : {item.profile.stats.totalPosts}</div>
                <div>Publications : {item.profile.stats.totalPublications}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Publications