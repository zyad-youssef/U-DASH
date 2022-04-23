import React from "react";
import ImgMediaCard from "./card";

function Orders() {
  return (
    <div>
      <h1>Orders Page</h1>
      <div class = "center" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div><ImgMediaCard> </ImgMediaCard></div>
        <div><ImgMediaCard> </ImgMediaCard></div>
        <div><ImgMediaCard> </ImgMediaCard></div>
      </div>
    </div>
  );
};

export default Orders;