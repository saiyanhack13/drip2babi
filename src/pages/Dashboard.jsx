import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Dashboard = ({ token, userId }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [offerToDelete, setOfferToDelete] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

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
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/offers?userId=${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

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

  const handleRemoveOffer = async (id) => {
    setOfferToDelete(id);
    setShowDialog(true);
  };

  const confirmDeletion = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/offer/delete/${offerToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur de la suppression de l'offre");
      }

      const data = await response.json();
      
      if (data && Array.isArray(data.offers)) {
        setOffers(
          offers.filter((offer) => offer._id.toString() !== offerToDelete.toString())
        );
        setSuccessMessage("L'offre a été supprimée avec succès !");
      } else {
        throw new Error("Aucune offre trouvée pour cet utilisateur.");
      }
      
      setShowDialog(false);
      setOfferToDelete(null);
      setLoading(false);

      // Réinitialisation du message après 3 secondes
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setShowDialog(false);
      setOfferToDelete(null);
    }
  };

  if (loading) return <div>Chargement des offres...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <Fragment>
      <div className="flex items-middle">
        <div className="mt-[8.5rem] align-middle">
          <h1 className="ml-3 text-3xl font-bold">Mes Offres</h1>
          
          {/* Message de succès */}
          {successMessage && (
            <Alert variant="default" className="mb-4">
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                {offers.map((offer, index) => (
                  <tr
                    key={offer._id.toString()}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {offer.product_name}
                    </td>
                    <td className="px-6 py-4">{offer.product_details[0].CATEGORIE}</td>
                    <td className="px-6 py-4">{offer.product_details[4].COULEUR}</td>
                    <td className="px-6 py-4">{offer.product_price}</td>
                    <td className="flex px-6 py-4">
                      <Link
                        to={`/editoffer/${offer._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Modifier
                      </Link>
                      <p> / </p>
                      <Button
                        variant="destructive"
                        onClick={() => handleRemoveOffer(offer._id)}
                      >
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dialog de confirmation */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmation de suppression</DialogTitle>
            </DialogHeader>
            <p>Êtes-vous sûr(e) de vouloir supprimer cette offre ? Cette action est irréversible.</p>
          </DialogContent>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDeletion}>
              Confirmer la suppression
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </Fragment>
  );
};

export default Dashboard;
