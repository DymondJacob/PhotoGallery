import React from 'react';

//This will display the images, if there are no images found let the user know.
export default props => {
  if (!props.images) return <div></div>;

  return <div className="photo-container">
      <ul>
        {props.images.map(image => {
          return <li key={image.id}>
              <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} alt="flickr images" />
            </li>;
        })}
      </ul>
    </div>;
};
