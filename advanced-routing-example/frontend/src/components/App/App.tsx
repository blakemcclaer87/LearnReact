import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from '../../pages/RootPage';
import HomePage from '../../pages/HomePage';
import EventsPage from '../../pages/EventsPage';
import EventDetailsPage from '../../pages/EventDetailsPage';
import NewEventPage from '../../pages/NewEventPage';
import EditEventPage from '../../pages/EditEventPage';
import EventRootPage from '../../pages/EventRootPage';

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements) -done
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages -done
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components -done
// 4. Add properly working links to the MainNavigation -done
// 5. Ensure that the links in MainNavigation receive an "active" class when active -done
// 6. Output a list of dummy events to the EventsPage -done
//    Every list item should include a link to the respective EventDetailPage -done
// 7. Output the ID of the selected event on the EventDetailPage -done 
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components --done

const App = () => {

  const routeList = createBrowserRouter([{
    path: "/",
    element:  <RootPage/>,
    children:[
      {index: true, element: <HomePage/>},
      {
        path: "/events",
        element: <EventRootPage/>,
        children: [
          {index: true, element: <EventsPage/>},
          {path:'/events/:id', element: <EventDetailsPage/>},
          {path:'/events/new', element: <NewEventPage/>},
          {path:'/events/:id/edit', element: <EditEventPage/>}
        ]
      }
    ]
  }]);

  return (
    <RouterProvider router={routeList}></RouterProvider>
  );
}

export default App;
