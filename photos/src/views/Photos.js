import React from "react";
import Photo from "../components/Photo";
import NotFound from "../components/NotFound";

const Photos = ({ apiKey, search }) => {
  let [photos, setPhotos] = React.useState(null);
  React.useEffect(() => {
    getPhotos();
  }, [search]);

  const getPhotos = async () => {
    await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPhotos(data.photos.photo);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div class="photo-container">
      <h2>{search}</h2>
      <ul>
        {photos && photos.length ? (
          photos.map((photo, index) => {
            return <Photo key={index} photo={photo} />;
          })
        ) : (
          <NotFound />
        )}
      </ul>
    </div>
  );
};

export default Photos;
