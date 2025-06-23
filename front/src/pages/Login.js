// src/pages/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // appel backend ici
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>

        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md"
        >
          Se connecter
        </button>

        {/* Lien vers l'inscription */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Pas encore inscrit ?{" "}
          <Link
            to="/signup"
            className="text-sky-600 hover:underline font-medium"
          >
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
}
