import React, { useState, useEffect } from 'react';

const BookingForm = ({ avalibleTimes, dispatch, submitForm }) => {
    const [ date, setDate ] = useState ('');
    const [ time, setTime ] = useState ('');
    const [ guests, setGuests ] = useState (1);
    const [ occasion, setOccasion ] = useState ('');
    const [ setIsFormValid, setIsFormValid ] = useState(false);

    useEffect (() => {
        const isValid = date && time && guests >= 1 && occasion;
        setIsFormValid (isValid);
    }, [ date, time, guests, occasion ]);

    const handleDateChange = ( event ) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        dispatch( { type: 'update', payload: selectedDate });

    };

    const handleSubmite = (event) => {
        event.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    }

    return (
        <form onSubmit = { handleSubmit }>

            <label htmlFor = "res-date">Choose Date</label>
            <input
            type = "date"
            id = "res-date"
            value = { date }
            onChange = { handleDateChange }
            required
            aria-required = "true"
            aria-label = "Reservation Date"
            />

            <label htmlFor = "res-time">Choose Time</label>
            <select
                id = "res-time"
                value = { time }
                onChange = { (e) => setTime ( e.target.value ) }
                required
                aria-required = "true"
                aria-label = "Reservation Time"

            >
                <option value = "" disabled>Select a time</option>
                { avalibleTimes.map ((time, index) => (
                    <option key = { index } value = { time }>
                        { time }
                    </option>
                ))}
            </select>

            <label htmlFor = "guests">Number of Guests</label>
            <input
            type = "number"
            id = "guests"
            placeholder = "1"
            min = "1"
            max = "10"
            value = { guests }
            onChange = { (e) => setGuests ( e.target.value )}
            required
            aria-required = "true"
            aria-label = "Number of Guests"

            />

            <label htmlFor = "occasion">Occasion</label>
            <select
            id = "occasion"
            value = { occasion }
            onChange = { (e) => setOccasion (e.target.value) }
            required
            aria-required = "true"
            aria-label = "Reservation Occasion"

            >
                <option value = ""disabled>Select an occasion</option>
                <option value = "Birthday">Birthday</option>
                <option value = "Anniversary">Anniversary</option>
            </select>

            <button type = "submit" disabled = { !setIsFormValid } aria-label = "Submit Booking Form">
                Make Your Reservation
            </button>
        </form>
    )
};

export default BookingForm;