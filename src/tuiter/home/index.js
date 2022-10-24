import React from "react";
import PostSummaryList from "../post-summary-list";
import HomePostItemList from './home-post-list'

const HomeComponent = () => {
    return (
       <>
           <HomePostItemList/>
           <PostSummaryList/>
       </>
    )
}

export default HomeComponent;