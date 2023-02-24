import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default class MyCalendar extends React.Component {
    render() {
        return (
            <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin, scrollGridPlugin, timeGridPlugin]}
            dateClick={this.handleDateClick}
            eventContent={renderEventContent}
            />
        )
    }

    handleDateClick = (args) => {
        alert(args.dateStr)
    }

    
}
function renderEventContent(eventInfo) {
    //render popup component form here
    
}