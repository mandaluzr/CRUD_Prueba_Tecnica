import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import PostList from "./Components/postList/postList";
import CreatePost from "./Components/createPost/createPost";
import ViewPost from "./Components/viewPost/viewPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import imagenFondo from "./Assets/imagenFondo.jpg";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
          <PostList />
          </Route>
          <Route exact path="/createpost">
            <CreatePost />
          </Route>
          <Route component={ViewPost} exact path="/post/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

//      /* <img src={imagenFondo} alt="fondoSutil" />*/
