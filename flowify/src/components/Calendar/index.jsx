import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useRef, useState } from 'react';
import AddEventModal from '../AddEventModal';


const Calendar = () => {
    const [modalOpen,setModalOpen] = useState(false);
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        const calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(event);
    }

    return(
        <section style={{ width: '100vw' }}>
             <FullCalendar 
                ref = {calendarRef}
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                selectable={[true]}
                headerToolbar={{
                    center: 'addEventButton'
                }}
                customButtons={{
                    addEventButton: {
                      text: 'Add Event',
                      click: ()=> setModalOpen(!modalOpen)
                    },
                }}
                dateClick={function(info) {
                    console.log('clicked ' + info.dateStr);
                    alert('clicked ' + info.dateStr);
                }}
            />
            
            <AddEventModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onEventAdded={event => onEventAdded(event)}
            />
        </section>
    )
}

export default Calendar;