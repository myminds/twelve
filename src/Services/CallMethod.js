export function callMethod() {
    console.log("api")
  try {
   return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
  } catch (error) {
    console.log(error);
  }
}

export function callMethodAlbums(user_id) {
  console.log("api")
try {
 return fetch("https://jsonplaceholder.typicode.com/albums?userId="+user_id)
    .then((response) => response.json())
} catch (error) {
  console.log(error);
}
}

export function callMethodAlbumsDetails(id) {
  console.log("api")
try {
 return fetch("https://jsonplaceholder.typicode.com/photos?albumId="+id)
    .then((response) => response.json())
} catch (error) {
  console.log(error);
}
}



