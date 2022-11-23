import Navbar from './component/navbar'
import Home from './component/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './create';
import BlogDetails from './component/blogDetails';
import NotFound from './component/notFound';

function App() {
    return (
      <Router>
          <div className="App">

            <Navbar />
            <div className="content">

                <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/create">
                        <Create />
                      </Route>

                      <Route path="/blogs/:id">
                        <BlogDetails />
                      </Route>

                      <Route path='*'>
                        <NotFound />
                      </Route>
                </Switch>
            </div>
          </div>
      </Router>
    );
}

export default App;
