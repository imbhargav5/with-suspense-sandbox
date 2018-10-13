import { createResource } from "react-cache";
import wait from "waait";

const UsersResource = createResource(async () => {
  await wait(1000);
  return fetch(`https://api.github.com/users`).then(response => {
    return response.json();
  });
});
export default UsersResource;
