import React from "react";
import "./input.css"; // Import custom CSS
import { useSearch } from "../../context/context"; // Adjust the path if necessary

interface InputSelectProps {
  options: string[];
  placeholder: string;
}

const InputSelect: React.FC<InputSelectProps> = ({ options, placeholder }) => {
  const { searchInput, searchCategory, setSearchInput, setSearchCategory } =
    useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
  };

  return (
    <div className="input-select-container">
      <select
        className="select-field"
        value={searchCategory}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="input-field"
        value={searchInput}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button className="button">
        <img src="/search.png" alt="Search" />
      </button>
    </div>
  );
};

export default InputSelect;
