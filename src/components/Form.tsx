import React from "react";
import { FaSearch } from "react-icons/fa";

const Form = () => {
  return (
    <form>
      <input type="text" name="city" placeholder="Search City" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
