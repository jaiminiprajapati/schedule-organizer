import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { useRef, useState } from 'react';
import AddEventModal from '../AddEventModal';


const Calendar = () => {
    const [modalOpen,setModalOpen] = useState(false);
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            title: event.title,
            start: event.start.toISOString(),
            end: event.end.toISOString(),
          
        });
    };
        const eventDrop = (info) => {
            alert(`${info.event.title} was dropped to ${info.event.start.toISOString()}`);
    
           
        };
    
        return (
            <section style={{ width: '100vw' }}>
                <FullCalendar 
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin]} 
                    selectable={true}
                    editable={true} 
                    eventDrop={eventDrop} 
                    headerToolbar={{
                        center: 'addEventButton'
                    }}
                    customButtons={{
                        addEventButton: {
                            text: 'Add Event',
                            click: () => setModalOpen(!modalOpen)
                        },
                    }}
                    dateClick={function(info) {
                        console.log('clicked ' + info.dateStr);
                    }}
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