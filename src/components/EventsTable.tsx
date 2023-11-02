import '../assets/css/Table.css'

const EventsTable = () => {

    const events = [
        {local: "Local 1", date: "21-Oct-2023", time: "02:40", participants: "2"},
        {local: "Local 2", date: "11-Nov-2023", time: "13:40", participants: "6"}
    ]

  return (
    <table className="events-table">
        <thead>
            <tr>
                <th>Local</th>
                <th>Date</th>
                <th>Time</th>
                <th>N. Of Participants</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {events.map((value, key) => {
                return (
                    <tr key={key}>
                        <td>{value.local}</td>
                        <td>{value.date}</td>
                        <td>{value.time}</td>
                        <td>{value.participants}</td>
                        <td>Edit | Delete</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default EventsTable
