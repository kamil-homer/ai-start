import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    address: { city: "", country: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city" || name === "country") {
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="city"
        value={user.address.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="country"
        value={user.address.country}
        onChange={handleChange}
        placeholder="Country"
      />
    </div>
  );
};

export default App;
