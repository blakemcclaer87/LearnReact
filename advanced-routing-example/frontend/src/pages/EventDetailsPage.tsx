import { Fragment } from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {

    const params = useParams();
    
    return (
        <Fragment>
            <div>Event Details Page.</div>
            <div>The event ID is: {params.id}</div>
        </Fragment>
    )
};

export default EventDetailsPage;
