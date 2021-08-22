import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "./hooks/useTheme";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Logout from "./components/Logout";
import ToggleDarkMode from "./components/ToggleDarkMode";
import ProtectedRoute from "./helpers/protectedRoute";

const App = () => {
    return (
        <>
            <Router>
                <ThemeProvider>
                    <Switch>
                        <Route exact path="/">
                            <ToggleDarkMode />
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <ToggleDarkMode />
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <ToggleDarkMode />
                            <Register />
                        </Route>
                        <ProtectedRoute path="/u" component={Index} />
                        <Route exact path="/logout" component={Logout} />
                        <Route>
                            <div className="mx-auto max-w-lg p-5 my-20 text-center text-2xl rounded-xl bg-black-4 text-white">
                                Not found ☹
                            </div>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Router>
        </>
    );
};

export default App;
