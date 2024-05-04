import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ token, userId }) => {
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
      const userInfo = localStorage.getItem("user");
      if (userInfo) {
        const userData = JSON.parse(userInfo);
        userId = userData._id;
      }

      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/offers?userId=${userId}`, {
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
        if (data && Array.isArray(data.offers)) {
          setOffers(data.offers);
        } else {
          throw new Error("Aucune offre trouvée pour cet utilisateur.");
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOffers();
 }, [token, userId]);

 
 
 
 
 

 if (loading) return <div>Chargement des offres...</div>;
 if (error) return <div>Erreur : {error}</div>;

 return (
  <div className="flew items-middle">
    <div className="mt-[8.5rem] align-middle">
    <h1 className=" ml-3 text-3xl font-bold">Mes Offres</h1>
     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
     
       <table className="ml-flex mr-flex w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
           <tr>
             <th scope="col" className="px-6 py-3">Nom du Produit</th>
             <th scope="col" className="px-6 py-3">Categorie</th>
             <th scope="col" className="px-6 py-3">Couleur</th>
             <th scope="col" className="px-6 py-3">Prix</th>
             <th scope="col" className="px-6 py-3">Action</th>
           </tr>
         </thead>
         <tbody>
           {offers.map((offer) => (
             <tr key={offer._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {offer.product_name}
               </th>
               {offer.product_details.map((detail, i) => (
                 <>
                  {detail["COULEUR"] && (
                     <td key={`color-${i}`} className="px-6 py-4">{detail["COULEUR"]}</td>
                  )}
                  {detail["CATEGORIE"] && (
                     <td key={`category-${i}`} className="px-6 py-4">{detail["CATEGORIE"]}</td>
                  )}
                 </>
               ))}
               <td className="px-6 py-4">{offer.product_price}</td>
               <td className="flex px-6 py-4">
                 <Link to={`/editoffer/${offer._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><span>Modifier</span></Link> 
                 <p> / </p>
                 <a href="#"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Supprimer</a>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
  </div>
  
  </div>
  

 );
 
};

export default Dashboard;