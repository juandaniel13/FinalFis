import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews {122}</div>
      </div>
      <div className="description-box-description">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis ipsam esse rerum inventore earum delectus, autem consequatur hic, voluptas ex, veritatis deserunt illo dolorum voluptatum animi quod error asperiores.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
