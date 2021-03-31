import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";
const PhotoContainer = (props) => {
  const results = props.data;

  let search;

  if (results.length != 0) {
    search = results.map((photo) => (
      <Photo
        url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        title={photo.title}
        key={photo.id}
      />
    ));
  } else {
    search = <NotFound />;
  }
  return (
    <div className="photo-container">
      <ul>{search}</ul>
    </div>
  );
};

export default PhotoContainer;
