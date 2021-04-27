import Home from "./views/Home";
import Update from "./views/Update";
import Delete from "./views/Delete";
import Add from "./views/Add";
import Log from "./views/Log";
import Error404 from "./views/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Log} />
          <Route exact path="/home/:login" component={Home} />
          <Route exact path="/update/:login/:id" component={Update} />
          <Route exact path="/delete/:id" component={Delete} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/log" component={Log} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
