import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import DropFileInput from "../components/DropFileInput";
import useAuthUserAction from "../hooks/useAuthUserAction";
import { useParams } from "react-router-dom";

const EditOffer = ({ token }) => {
  const [editForm, setEditForm] = useState({
    picture: [],
    product_name: "",
    description: "",
    brand: "",
    size: "",
    color: "",
    condition: "",
    city: "",
    price: "",
    category: "",
  });
  const { id } = useParams();
  useEffect(() => {
    async function fetchOfferDetails() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/offer/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur de récupération des détails de l'offre");
        }

        const data = await response.json();

        setEditForm({
          product_name: data.product_name,
          description: data.product_description,
          product_price: data.product_price,
          category: data.product_details[0]?.CATEGORIE,
          brand: data.product_details[1]?.MARQUE,
          size: data.product_details[2]?.TAILLE,
          condition: data.product_details[3]?.ETAT,
          color: data.product_details[4]?.COULEUR,
          city: data.product_details[5]?.EMPLACEMENT,
          picture: data.picture ? data.picture : [], // Conserve les photos existantes si présentes
        });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'offre:",
          error
        );
      }
    }
    fetchOfferDetails();
  }, []);


  function handleChange(event) {
    const { id, value } = event.target;
    console.log(id, value);
    setEditForm({
      ...editForm,
      [id]: value,
    });
  }
  function handlePictureChange(file) {
    setEditForm({
      ...editForm,
      picture: file,
    });
  }
  function resetForm() {
    setEditForm({
      picture: [],
      product_name: "",
      description: "",
      category: "",
      brand: "",
      size: "",
      color: "",
      condition: "",
      city: "",
      price: "",
    });
  }

  // custom hook
  const { loading, error, success, handleUpdate } = useAuthUserAction(token);


  return (
    <fieldset className="mt-[6.5rem] w-full h-full flex">
      <legend className="mx-auto">
        <h3>Modifie ton article</h3>
      </legend>

      <form
        className="container flex flex-col"
        onSubmit={(event) => {
          handleUpdate(event, editForm, id, resetForm);

        }}
      >
        <DropFileInput
          pictures={editForm.picture}
          handlePictureChange={handlePictureChange}
        />

        <div className="flex flex-col my-8">
          <InputForm
            id="product_name"
            inputValue={editForm?.product_name}
            handleChange={handleChange}
            placeholder="ex: chemise sezame verte"
          >
            Titre
          </InputForm>

          <div className="flex flex-col md:flex-row w-[85%] h-40 md:h-32 justify-center mx-auto py-5 border-b border-neutral-200">
            <label
              className="flex flex-1 items-center max-h-[35px] px-4"
              htmlFor="description"
            >
              Decris ton article
            </label>
            <textarea
              className="publishField resize-none"
              id="product_description"
              value={editForm?.product_description}
              placeholder="ex: portee quelquefois, taille 44"
              rows="6"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col">
          <InputForm
            id="category"
            inputValue={editForm?.category}
            handleChange={handleChange}
            placeholder="ex: Homme, Femme, Enfant"
          >
            Catégorie
          </InputForm>

          <InputForm
            id="brand"
            inputValue={editForm?.brand}
            handleChange={handleChange}
            placeholder="ex: Zara"
          >
            Marque
          </InputForm>

          <InputForm
            id="size"
            inputValue={editForm?.size}
            handleChange={handleChange}
            placeholder="ex: L/40/12"
          >
            Taille
          </InputForm>

          <InputForm
            id="color"
            inputValue={editForm?.color}
            handleChange={handleChange}
            placeholder="ex: Turquoise"
          >
            Couleur
          </InputForm>

          <InputForm
            id="condition"
            inputValue={editForm?.condition}
            handleChange={handleChange}
            placeholder="ex: neuf, friperie, bon etat"
          >
            Etat
          </InputForm>

          <InputForm
            id="city"
            inputValue={editForm?.city}
            handleChange={handleChange}
            placeholder="Ex: Ville, Commune, Quartier"
          >
            Lieu
          </InputForm>
        </div>

        <div className="mt-4">
          <InputForm
            id="product_price"
            inputValue={editForm?.product_price}

            handleChange={handleChange}
            placeholder="Ex : 2500"
          >
            Prix en XOF
          </InputForm>
        </div>
        <div className="h-12">
          {success && (
            <p className="mt-6 text-teal-500 text-center">{success}</p>
          )}
          {error && <p className="mt-6 text-red-500 text-center">{error}</p>}
        </div>
        <button className="bg-black mx-auto text-slate-50 w-[85%] sm:w-44 h-10 my-10 text-xl sm:text-sm">
          {loading ? "En cours..." : "MODIFIER"}
        </button>
      </form>
    </fieldset>
  );
};

export default EditOffer;
