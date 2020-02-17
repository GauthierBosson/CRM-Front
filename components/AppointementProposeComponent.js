import React, { useState } from "react";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";

import appointementsServices from '../utils/appointementsServices';

moment.locale('fr');

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function AgendaComponent(props) {
    const classes = useStyles();
    const appointementsFinal = []
    props.userAppointements.map(appointement => {
        let appointementFinal = {};
        appointementFinal.start = moment(appointement.start).toDate();
        appointementFinal.end = moment(appointement.end).toDate();
        appointementFinal.title = appointement.title;
        appointementFinal.isMine = true;
        
        appointementsFinal.push(appointementFinal);
    })
    props.clientAppointements.map(appointement => {
        let appointementFinal = {};
        appointementFinal.start = moment(appointement.start).toDate();
        appointementFinal.end = moment(appointement.end).toDate();
        appointementFinal.title = appointement.title;
        appointementFinal.isMine = false;
        
        appointementsFinal.push(appointementFinal);
    })
    const [events, setEvents] = useState(appointementsFinal);
    const [openModal, setOpenModal] = useState(false);
    const [newEvent, setNewEvent] = useState({ userId: props.userId, clientId: props.clientInfos._id, start: '', end: '', title: '', isMine: true })

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleSelect = ({start, end}) => {
        setNewEvent(
            Object.assign({}, newEvent, { start: start, end: end })
        )
        handleOpenModal();
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await appointementsServices.addAppointement(newEvent);
            setEvents(
                [
                    ...events,
                    newEvent
                ]
            )
            handleCloseModal();
        } catch(error) {
            console.log(error)
        }
    }


        return (
            <>
                <div style={{height: "85vh"}}>
                    <Calendar
                        selectable
                        defaultView="week"
                        localizer={localizer}
                        events={events}
                        eventPropGetter={
                            (event, start, end, isSelected) => {
                                let newStyle = {
                                  backgroundColor: "red",
                                  color: 'white',
                                  borderRadius: "5px",
                                  border: "none"
                                };
                          
                                if (event.isMine){
                                  newStyle.backgroundColor = "blue"
                                }
                          
                                return {
                                  className: "",
                                  style: newStyle
                                };
                              }
                        }
                        startAccessor="start"
                        endAccessor="end"
                        onSelectEvent={event => alert(event.title)}
                        onSelectSlot={handleSelect}
                        messages={{
                            date: 'Date',
                            time: 'Heure',
                            event: 'Évènement',
                            allDay: 'Toute la journée',
                            week: 'Semaine',
                            work_week: 'Semaine de travail',
                            day: 'Jour',
                            month: 'Mois',
                            previous: 'Précédent',
                            next: 'Suivant',
                            yesterday: 'Hier',
                            tomorrow: 'Demain',
                            today: 'Aujourd\'hui',
                            agenda: 'Agenda',
                            noEventsInRange: 'Aucun évènement dans cette tranche horaire',
                        }}
                    />
                </div>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openModal}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openModal}>
                        <div className={classes.paper}>
                            <form onSubmit={handleSubmit}>
                                <h2 id="transition-modal-title">Donnez un titre à cet évènement</h2>
                                <TextField 
                                    id="event-title" 
                                    label="Titre de l'évènement" 
                                    onChange={event => {
                                        setNewEvent(
                                            Object.assign({}, newEvent, { title: event.target.value })
                                        )
                                    }}
                                />
                                <Button type="submit" variant="contained" color="primary">Valider</Button>
                            </form>
                        </div>
                    </Fade>
                </Modal>
            </>
        );
}

export default AgendaComponent;
