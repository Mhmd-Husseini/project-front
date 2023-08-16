import React from 'react';

const ListContainer = ({ propstopass }) => {
    console.log(propstopass.submissions[0].grade )
  return (
      <ul>
        <li>ID: {propstopass.id}</li>
        <li>Title: {propstopass.title}</li>
        <li>Description: {propstopass.description}</li>
        <li>Grade: {propstopass.submissions[0].grade} / {propstopass.rubric}</li>
        {/* Add more properties as needed */}
      </ul>
  );
};

export default ListContainer;