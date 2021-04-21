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
          <Route exact path="/" component={Home} />
          <Route path="/update/:id" component={Update} />
          <Route path="/delete/:id" component={Delete} />
          <Route path="/add" component={Add} />
          <Route path="/log" component={Log} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
