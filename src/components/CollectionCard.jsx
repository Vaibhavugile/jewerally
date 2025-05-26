import React from 'react';

const CollectionCard = ({ title, image }) => {
  return (
    <div className="collection-card">
      <img src={image} alt={title} className="collection-image" />
      <div className="title">{title}</div>
    </div>
  );
};

export default CollectionCard;
