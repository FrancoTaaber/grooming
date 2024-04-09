const pool = require('./db');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, service, date, time } = req.body;
        try {
            const newBooking = await pool.query(
                'INSERT INTO bookings (name, service, date, time) VALUES ($1, $2, $3, $4) RETURNING *',
                [name, service, date, time]
            );
            res.status(200).json({ success: true, booking: newBooking.rows[0] });
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    } else {
        res.status(405).json({ error: "Only POST requests are allowed" });
    }
};
