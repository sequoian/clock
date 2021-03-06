import React from 'react'

const AlarmForm = ({time, message, onChange, onSubmit, error, onBlur}) => (
  <form>
    <div id="inputs">
      <span id="time-input">
        <span className="error">{error}</span>
        <input
          type="text"
          name="timeInput"
          placeholder="Time"
          value={time}
          onChange={onChange}
          onBlur={() => onBlur()}
          onFocus={e => e.target.select()}
          autoFocus
        />
      </span>
      <input
        type="text"
        name="messageInput"
        placeholder="Message (optional)"
        value={message}
        onChange={onChange}
      />
    </div>
    <button
      type="button"
      id="primary-btn"
      onClick={onSubmit}
    >Set Alarm</button>
  </form>
)

export default AlarmForm