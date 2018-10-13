import { createResource } from "react-cache";
import wait from "waait";

const ScriptResource = createResource(async pathname => {
  await wait(7000);
  return import(pathname).then(module => module.default || module);
});
export default ScriptResource;
