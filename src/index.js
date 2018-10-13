import React, { unstable_Suspense as Placeholder } from "react";
import { render } from "react-dom";
import cache from "./cache";
import UsersResource from "./UsersResource";
import ScriptResource from "./ScriptResource";
import "./styles.css";

class Article extends React.Component {
  constructor() {
    super();
    console.log("Article component constructor");
  }
  componentDidMount() {
    console.log("mounted component");
  }
  render() {
    console.log("rendering Article");
    const ArticleComponent = ScriptResource.read(cache, "./Article");
    return <ArticleComponent />;
  }
}
function User({ user }) {
  const { organizations_url } = user;
  return <div>{organizations_url}</div>;
}

function Users() {
  const users = UsersResource.read(cache, null);
  return (
    <div>
      <p> Here are the users you wanted </p>
      {users.map(user => <User user={user} key={user.id} />)}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Placeholder maxDuration={200} fallback={`loading...`}>
        <Users />
      </Placeholder>
      <Placeholder maxDuration={200} fallback={`loading article...`}>
        <Article />
      </Placeholder>
      <p>This is some content</p>
    </div>
  );
}

render(<App />, document.getElementById("root"));
