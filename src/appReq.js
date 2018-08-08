import axios from "axios";

//@TODO: add timeouts
const appReq = {
  getVideos: () => {
    const url = `https://challenge.subsplash.net`;

    // Make Request
    return axios({
      url: url,
      method: "GET",
      headers: {
        "X-Sap-Auth": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlN2U5NDhlOC0xMzA3LTRhNDktOTkzZS1jZDQwMGIyNDBiNzMiLCJpYXQiOjE1MTc0NDMyMDB9.cCnoZDiDA1wZDw2jrbRgpwWvtA5nHHaDaUKLl1fAXA",
      },
    })
      .then((res) => {
        console.log(res);
        // make a call to the youtube api with the res items to get the necessary data.
        // send this to youtube res._embedded.media_items.id
        return res.data;
      })
      .catch((res) => {
        return res;

      });
  }
}
export default appReq;
// export default mockData;