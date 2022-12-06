export const authEndPoint = "https://accounts.spotify.com/authorize";

const client_Id = "739772ff06f3483eb162e35acc2ebb18";
const redirect_uri = "http://localhost:3000/";
const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  const hash = window.location.hash.substring(1);
  const paramsList = hash.split("&");
  return paramsList.reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
};

export const authUrl = `${authEndPoint}?client_id=${client_Id}&scope=${scope.join(
  "%20"
)}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;
