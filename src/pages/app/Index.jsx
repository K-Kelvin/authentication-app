import { Switch, Route } from "react-router-dom";

import CreatedBy from "components/CreatedBy";
import Header from "./Header";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Index = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFB] dark:bg-primary-dark text-secondary dark:text-secondary-dark">
            <Header />
            <div className="mx-auto my-10 max-w-[800px]">
                <Switch>
                    <Route exact path="/u">
                        <Profile />
                    </Route>
                    <Route exact path="/u/edit">
                        <EditProfile />
                    </Route>
                </Switch>
                <CreatedBy className="mt-2" />
            </div>
        </div>
    );
};

export default Index;
