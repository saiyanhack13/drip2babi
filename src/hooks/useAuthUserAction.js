import { useState } from "react";

function useAuthUserAction(token) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [pwLoading, setPwLoading] = useState(false);
  const [pwError, setPwError] = useState(null);
  const [pwValidate, setPwValidate] = useState(false);

  async function handleSubmit(event, publishForm, resetForm) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      const formData = new FormData();
      const datasForm = Object.entries(publishForm);

      datasForm.forEach(([key, value]) => {
        if (key === "picture") {
          if (Array.isArray(value)) {
            value.forEach((file) => {
              formData.append("picture", file);
            });
          } else {
            formData.append("picture", value);
          }
        } else {
          formData.append(key, value);
        }
      });
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/offer/publish`,
        {
          method: "POST",
          // not setting the content-type header with fetch
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await response.json();

      if (response.status === 201) {
        // reset the form if success
        resetForm();
        setSuccess("Votre article a été publié avec succes");
      }
      if (
        response.status === 400 &&
        data.message === "Price must be greater than 500 and not exceed 30000"
      ) {
        setError("Le prix doit etre un nombre compris entre 500 et 30000 XOF");
      } else if (
        response.status === 400 &&
        data.message === "Only images files are allowed"
      ) {
        setError("Seul les fichiers de type Images sont acceptes");
      } else if (response.status === 400) {
        setError("Veuillez remplir tous les champs :)");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(event, publishForm, id, resetForm) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      const formData = new FormData();
      const datasForm = Object.entries(publishForm);

      datasForm.forEach(([key, value]) => {
        if (key === "picture") {
          if (Array.isArray(value)) {
            value.forEach((file) => {
              formData.append("picture", file);
            });
          } else {
            formData.append("picture", value);
          }
        } else {
          formData.append(key, value);
        }
      });
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/offer/update/${id}`,
        {
          method: "PUT",
          // not setting the content-type header with fetch
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await response.json();

      if (response.status === 201) {
        // reset the form if success
        resetForm();
        setSuccess("Votre article a été publié avec succes");
      }
      if (
        response.status === 400 &&
        data.message === "Price must be greater than 500 and not exceed 30000"
      ) {
        setError("Le prix doit etre un nombre compris entre 500 et 30000 XOF");
      } else if (
        response.status === 400 &&
        data.message === "Only images files are allowed"
      ) {
        setError("Seul les fichiers de type Images sont acceptes");
      } else if (response.status === 400) {
        setError("Veuillez remplir tous les champs :)");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateUser(event, profile) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      const formData = new FormData();
      const formField = Object.entries(profile);
      formField.forEach(([key, value]) => {
        if (key === "avatar") {
          // check if the value is a new file
          if (value instanceof File) {
            formData.append(key, value);
          }
        } else {
          if (value !== undefined) {
            formData.append(key, value);
          }
        }
      });
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/update`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      await response.json();
      if (response.ok) {
        setSuccess("Profile a bien été mis à jour");
      } else if (response.status === 400) {
        setError("Seul les fichiers de type Image sont acceptés");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateNumber(event, profile) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération du nouveau numéro à partir de l'événement ou d'une autre source
    const newNumber = event.target.value;

    try {
      // Simule une requête réseau pour mettre à jour le numéro dans la base de données
      // Remplacez cette partie par votre propre logique de mise à jour
      const response = await fetch("/api/update-number", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: profile.userId,
          newNumber: newNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du numéro");
      }

      // Mise à jour du profil local après une mise à jour réussie
      profile.number = newNumber;

      // Affichage d'un message de succès ou de mise à jour de l'interface utilisateur
      console.log("Numéro mis à jour avec succès");
    } catch (error) {
      // Gestion des erreurs
      console.error("Erreur lors de la mise à jour du numéro:", error);
    }
  }

  async function handleEditPassword(event, credential, setCredential) {
    event.preventDefault();
    setPwLoading(true);
    setPwValidate(false);
    setPwError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/update-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(credential),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPwValidate("Mot de passe a bien été mis à jour");
        //reset the state
        setCredential((prevState) => {
          return {
            ...prevState,
            oldPassword: "",
            newPassword: "",
          };
        });
      } else if (
        response.status === 401 &&
        data.message === "New password must be different than the previous one"
      ) {
        setPwError("Le nouveau mot de passe doit etre different de l'ancien");
      } else if (response.status === 401) {
        setPwError("Mauvais mot de passe");
      } else if (response.status === 400) {
        setPwError(
          "Le nouveau mot de passe doit comporter au moins 8 caractères"
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPwLoading(false);
    }
  }

  return {
    loading,
    success,
    error,
    handleSubmit,
    handleUpdate,
    handleUpdateUser,
    handleUpdateNumber,
    handleEditPassword,
    pwLoading,
    pwValidate,
    pwError,
  };
}

export default useAuthUserAction;
