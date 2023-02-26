import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';

export default function Calendar () {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
            address: event.address,
            from: event.from,
            price: event.price
        })
    }

    return (
        <section>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
            <div style={{ position: "relative", zIndex: 0 }}>
                <FullCalendar
                ref={calendarRef}
                events={events}
                plugins={[ dayGridPlugin, interactionPlugin, scrollGridPlugin, timeGridPlugin ]}
                initialView="dayGridWeek"
                eventAdd={event => onEventAdded(event)}
                datesSet={(date) => handleDateSet(date)}
                />
                <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
            </div>
        </section>
    )
}