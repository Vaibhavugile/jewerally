import React from 'react';

const CollectionCard = ({ title }) => {
  return (
    <div className="collection-card">
      <div className="img-placeholder"></div>
      <div className="title">{title}</div>
    </div>
  );
};

export default CollectionCard;
