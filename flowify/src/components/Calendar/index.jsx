import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { useRef, useState } from 'react';
import AddEventModal from '../AddEventModal';
import axios from  "axios";

const holidays = await axios.get("https://www.gov.uk/bank-holidays.json");
    
console.log(holidays);
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
                            click: () => setModalOpen(!modalOpen)
                        },
                    }}
                    dateClick={function(info) {
                        console.log('clicked ' + info.dateStr);
                    }}
                    events={holidays.data["england-and-wales"].events}
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