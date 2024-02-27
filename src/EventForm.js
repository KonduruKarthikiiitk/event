// src/EventForm.js
import React, { useState } from 'react';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an object with the form data
      const eventData = {
        eventName: eventName,
        eventDescription: eventDescription,
        imageUrl: imageUrl,
      };

      // Make an API request to send the form data to the server
      const response = await fetch('http://localhost:4000/upload-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        console.log('Form data sent successfully:', eventData);
        // Optionally, reset the form fields or show a success message
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
