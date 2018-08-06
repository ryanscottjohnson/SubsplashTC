# SubsplashTC

Use the Subsplash API and YouTube API to generate an HTML table of videos matching the specified parameters.

1. Subsplash is providing a url to an API endpoint. It returns a JSON-formatted list of YouTube video urls that our clients have entered on the Dashboard (our CMS):
○ Documentation for the Subsplash API is located here:

`https://gist.github.com/rclod/a880765a21d0f752d225164d792c4fc0`
* A request header named ​X-Sap-Auth​ must be set to ​
`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlN2U5NDhlOC0xMzA3LTRhNDktOTkzZS1jZDQwMGIyNDBiNzMiLCJpYXQiOjE1MTc0NDMyMDB9.cCnoZDiDA1wZDw2jrbRgpwWvtA5nHHaDaUKLl1fAXAY`
* Incorrect requests may result in Status Codes: 401, 400, 405, or 500

2. Use Go (or your programming language of choice) to make a request to YouTube’s API
and get at least the following information about each video:
* Duration of the video
* Number of times the video has been viewed on YouTube.
* Documentation for the YouTube API is located here:
`https://developers.google.com/youtube/v3/docs/videos#properties`

3. Output
* Table should include only the videos LONGER than 45 minutes which have also
been viewed at least 100 times.
* Table should include at least 10 different matching videos.
* Each table row should include at least:
    * Title of the video
    * Duration of the video (in HH:MM:SS format)
    * Video URL
    * Video’s “reach” (as computed by the Subsplash API).
* The table should be sorted by Reach, largest to smallest.

4. Send Subsplash an email containing a zip file containing the git repository of the code
used to perform these actions, as well as the HTML output generated.