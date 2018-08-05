import axios from 'axios';

const appRequest = {
    getVideos: () => {
        const url = `https://challenge.subsplash.net`;

        return axios({
            url: url,
            method: 'GET',
            headers: {
                "X-Sap-Auth": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlN2U5NDhlOC0xMzA3LTRhNDktOTkzZS1jZDQwMGIyNDBiNzMiLCJpYXQiOjE1MTc0NDMyMDB9.cCnoZDiDA1wZDw2jrbRgpwWvtA5nHHaDaUKLl1fAXAY',
            },
        })
        .then((resp) => {
            console.log
            return resp.data;
        })
        .catch((resp) => {
            return resp;
        });
    }
}
export default appRequest;