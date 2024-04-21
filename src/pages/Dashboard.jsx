import React, { useState, useEffect } from "react";

const Dashboard = ({ token, userId, email }) => { // Ajoutez l'email comme argument
 const [offers, setOffers] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchOffers = async () => {
      if (!token) {
        setError("Vous devez être connecté pour accéder à ce contenu.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Ajoutez l'email à l'URL de la requête
        const response = await fetch(`${import.meta.env.VITE_API_URL}/offer/?email=${encodeURIComponent(email)}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Erreur de récupération des offres");
        }
        const data = await response.json();
        setOffers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOffers();
 }, [token, email]); // Ajoutez email comme dépendance pour useEffect

 if (loading) return <div>Chargement des offres...</div>;
 if (error) return <div>Erreur : {error}</div>;

 return (
    <div>
      <h2>Mes offres</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>{offer.title}</li>
        ))}
      </ul>
    </div>
 );
};

export default Dashboard;
