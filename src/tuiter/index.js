import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import {Routes, Route} from "react-router";
import ExploreComponent from "./explore/index";
import HomePostItem from "./home";
import PostSummaryList from "./post-summary-list";
import {Navigate} from 'react-router-dom';

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                <Routes>
                    <Route path="/" element={<Navigate to="home"/>}/>
                    <Route path="home"    element={<HomePostItem/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
            </div>
        </div>
    )
}
export default Tuiter;

