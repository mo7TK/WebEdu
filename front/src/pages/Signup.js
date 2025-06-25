import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    dateNaissance: "",
    email: "",
    motDePasse: "",
    confirmPassword: "",
    universite: "",
    specialite: "",
    niveau: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.motDePasse !== form.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    console.log(form);
    // envoyer au backend ici
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Créer un compte</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={form.prenom}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>

        <input
          type="date"
          name="dateNaissance"
          value={form.dateNaissance}
          onChange={handleChange}
          className="w-full mt-4 mb-2 p-2 border rounded-md"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded-md"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="password"
            name="motDePasse"
            placeholder="Mot de passe"
            value={form.motDePasse}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={form.confirmPassword}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>

        <input
          type="text"
          name="universite"
          placeholder="Université"
          value={form.universite}
          onChange={handleChange}
          className="w-full mt-4 mb-2 p-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="specialite"
          placeholder="Spécialité"
          value={form.specialite}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded-md"
          required
        />

        <select
          name="niveau"
          value={form.niveau}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        >
          <option value="" disabled>-- Sélectionner le niveau d’étude --</option>
          <option value="B+1">Bac + 1</option>
          <option value="B+2">Bac + 2</option>
          <option value="B+3">Bac + 3</option>
          <option value="B+4">Bac + 4</option>
          <option value="B+5">Bac + 5</option>
          <option value="B+6">Bac + 6</option>
          <option value="B+7">Bac + 7</option>
        </select>

        <button
          type="submit"
          className="w-full bg-sky-800 hover:bg-sky-900 text-white py-2 rounded-md"
        >
          S'inscrire
        </button>

        {/*Lien vers la page de connexion */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Déjà inscrit ?{" "}
          <Link
            to="/login"
            className="text-sky-800 hover:underline font-medium"
          >
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
}
