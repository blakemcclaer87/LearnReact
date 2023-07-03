import { NavLink } from 'react-router-dom';
import IEvent from '../../datramodels/IEvent';
import classes from './EventList.module.css';
import { IEventListProps } from './IEventListProps';

const EventList = ( props: IEventListProps) => {
    return (
        <div className={classes.events}>
        <h1>All Events</h1>
        <ul className={classes.list}>
          {props.events.map((event: IEvent) => (
            <li key={event.id} className={classes.item}>
              <NavLink to={`${event.id}`}>
                <img src={event.image} alt={event.title} />
                <div className={classes.content}>
                  <h2>{event.title}</h2>
                  <time>{event.date.getTime()}</time>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
};

export default EventList;