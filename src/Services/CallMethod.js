export function callMethod() {
    console.log("api")
  try {
   return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
  } catch (error) {
    console.log(error);
  }
}
