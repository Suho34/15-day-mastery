import { useState } from "react";

const Example1 = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const addPerson = (e: any) => {
    e.preventDefault();

    if (!newName.trim() || !newNumber.trim()) return;

    const duplicate = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (duplicate) {
      alert(`${newName} is already in the phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Filter shown with:
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} — {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example1;
