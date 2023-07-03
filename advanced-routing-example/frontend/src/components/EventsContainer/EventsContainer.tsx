import classes from './EventsContainer.module.css';
import EventList from '../EventList/EventList';
import IEvent from '../../datramodels/IEvent';
import { Fragment, useEffect, useState } from 'react';

const EventsContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchEvents = async () => {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/events');

            if(!response.ok) {
                setError("Fetch Events Failed.");
            }else{
                const returnData = await response.json();
                setEvents(returnData['events']);
            }

            setIsLoading(false);
        };

        fetchEvents();
    }, []);

    return (
        <Fragment>

            {isLoading && 
                <div style={{ textAlign: 'center' }}>
                    <p>Loading...</p>
                </div>
            }

            {(error && error.length > 0) && 
                <div style={{ textAlign: 'center' }}>
                    <p>{error}</p>
                </div>
            }

            {!isLoading && events.length === 0 && 
                <div style={{ textAlign: 'center' }}>
                    <p>No Events Found.</p>
                </div>
            }  

            {!isLoading && events.length > 0 && <EventList events={events} />}
            
        </Fragment>
    )
};

export default EventsContainer;