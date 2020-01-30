import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

class CalendarTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title
          }
        ]
      });
  };

  render() {
    return (
      <>
        <div style={{ height: "85vh" }}>
          <Calendar
            selectable
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
          />
        </div>
      </>
    );
  }
}

export default CalendarTest;
