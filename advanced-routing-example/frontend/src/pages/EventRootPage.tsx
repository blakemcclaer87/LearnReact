import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventNavigation/EventNavigation";

const EventRootPage = () => {
    return (
        <Fragment>
            <EventNavigation/>
            <main>
                <Outlet/>
            </main>
        </Fragment>
    )
};

export default EventRootPage;