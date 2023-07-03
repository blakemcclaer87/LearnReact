import classes from './EventsContainer.module.css';
import EventList from '../EventList/EventList';
import IEvent from '../../datramodels/IEvent';

const EventsContainer = () => {

    const DUMMY_EVENTS: IEvent[] = [
        {
            id: 'e1',
            title: 'Programming for everyone',
            date: new Date(2021, 5, 12),
            image: 'https://mario.wiki.gallery/images/thumb/3/3e/MPSS_Mario.png/800px-MPSS_Mario.png'
        },
        {
            id: 'e2',
            title: 'Networking for introverts',
            date: new Date(2021, 5, 30),
            image: 'https://play.nintendo.com/images/Masthead_luigi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png'
        },
        {
            id: 'e3',
            title: 'Networking for extroverts',
            date: new Date(2021, 6, 30),
            image: 'https://cdn.vox-cdn.com/thumbor/4dj-LpyW34VgGURMNlsdXFxynfA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24560883/2530_TRP_00060_3587x1500_d3275b2.jpg'
        },
        {
            id: 'e4',
            title: 'How to be a better person',
            date: new Date(2021, 7, 30),
            image: 'https://mario.wiki.gallery/images/2/21/MPSS_Peach.png'
        }
    ];
    return (
        <EventList events={DUMMY_EVENTS} />
    )
};

export default EventsContainer;