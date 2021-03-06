import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import PostList from "./Components/postList/postList";
import CreatePostComp from "./Components/createPost/createPostComp";
import ViewPost from "./Components/viewPost/viewPost";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <Router>
        <Header />
        <Switch>
          <Route component={PostList} exact path="/" />
          <Route component={CreatePostComp} exact path="/createpost" />
          <Route component={ViewPost} exact path="/post/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

//      /* <img src={imagenFondo} alt="fondoSutil" />*/
