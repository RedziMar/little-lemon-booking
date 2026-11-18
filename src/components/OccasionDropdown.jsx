import { useState } from 'react';

const OCCASIONS = ['Birthday', 'Engagement', 'Anniversary'];

function OccasionDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (occasion) => {
    onChange(occasion);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="form-group" onKeyDown={handleKeyDown}>
      <span className="dropdown-label" id="occasion-label">
        Select Occasion
      </span>
      <div className="occasion-dropdown">
        <button
          type="button"
          className={`occasion-trigger ${value ? 'selected' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="occasion-label"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="occasion-trigger-left">
            {!value && <span aria-hidden="true">🥂</span>}
            <span>{value || 'Occasion'}</span>
          </span>
          <span
            className={`chevron ${isOpen || value ? 'rotated' : ''}`}
            aria-hidden="true"
          >
            ⌄
          </span>
        </button>

        {isOpen && (
          <ul
            className="occasion-menu"
            role="listbox"
            aria-labelledby="occasion-label"
          >
            {OCCASIONS.map((occasion) => (
              <li
                key={occasion}
                role="option"
                tabIndex={0}
                aria-selected={value === occasion}
                className="occasion-option"
                onClick={() => handleSelect(occasion)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(occasion);
                  }
                }}
              >
                {occasion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OccasionDropdown;