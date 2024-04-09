import React, { useState } from 'react';

function Bookings() {
    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        service: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        setBookingInfo({...bookingInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingInfo)
        });
        const data = await response.json();
        if(data.success) {
            alert('Broneering kinnitatud!');
        } else {
            alert('Broneeringu kinnitamine ebaõnnestus.');
        }
    }

    return (
        <div>
            <h1>Broneeri aeg</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nimi" value={bookingInfo.name} onChange={handleChange} required />
                <select name="service" value={bookingInfo.service} onChange={handleChange} required>
                    <option value="">Vali teenus</option>
                    <option value="dog-washing">Koera pesu - 25€</option>
                    <option value="cat-combing">Kassi harjamine - 15€</option>
                    <option value="nail-clipping">Küünte lõikamine - 10€</option>
                </select>
                <input type="date" name="date" value={bookingInfo.date} onChange={handleChange} required />
                <input type="time" name="time" value={bookingInfo.time} onChange={handleChange} required />
                <button type="submit">Broneeri</button>
            </form>
        </div>
    );
}

export default Bookings;
