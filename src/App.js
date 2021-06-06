import Header from "./Components/header/header";
import PostList from "./Components/postList/postList";
import CreatePost from "./Components/createPost/createPost";
import ViewPost from "./Components/viewPost/viewPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route exact path="/createpost">
            <CreatePost />
          </Route>
          <Route component={ViewPost} exact path="/post/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//      /* <img src={imagenFondo} alt="fondoSutil" />*/
