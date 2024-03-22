import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { useRef, useState, useEffect } from 'react';
import AddEventModal from '../AddEventModal';
import axios from "axios";

// Calendar component
const Calendar = () => {
    const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
    const [holidays, setHolidays] = useState([]); // State to store fetched holidays
    const calendarRef = useRef(null); // Ref to access the FullCalendar instance

    // Fetch holiday data on component mount
    useEffect(() => {
        const fetchHolidays = async () => {
            const response = await axios.get("https://www.gov.uk/bank-holidays.json");
            // Assuming you want to use the 'england-and-wales' region holidays
            setHolidays(response.data["england-and-wales"].events);
        };

        fetchHolidays().catch(console.error);
    }, []);

    // Handler for adding new events to the calendar
    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            title: event.title,
            start: event.start.toISOString(),
            end: event.end.toISOString(),
        });
    };

    // Handler for event drag and drop
    const eventDrop = (info) => {
        console.log(`${info.event.title} was dropped to ${info.event.start.toISOString()}`);
    };

    return (
        <section style={{ width: '99vw' }}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                initialView='dayGridMonth'
                selectable={true}
                editable={true}
                eventDrop={eventDrop}
                headerToolbar={{
                    left: 'prev,next,title',
                    center: 'addEventButton',
                    right: 'dayGridMonth,listMonth'
                }}
                customButtons={{
                    addEventButton: {
                        text: 'Add Event',
                        click: () => setModalOpen(!modalOpen) // Toggle modal visibility
                    },
                }}
                dateClick={function(info) {
                    console.log('clicked ' + info.dateStr);
                }}
                events={holidays} // Use state variable for events
            />

            <AddEventModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={event => onEventAdded(event)}
            />
        </section>
    );
}

export default Calendar;