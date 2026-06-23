"use client";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Données envoyées :", data);
    alert("Formulaire envoyé avec succès !");
  };

  // Regex pou sèlman lèt (Nom, Prénom, Profession)
  const onlyLettersRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

  // Regex pou adrès (lèt + chif + espas + ponktiyasyon)
  const addressRegex = /^[A-Za-z0-9À-ÖØ-öø-ÿ\s',.-]+$/;

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="titre-centre">Formulaire de contact</h2>

      {/* Nom */}
      <label>Nom</label>
      <input
        type="text"
        placeholder="Entrez votre nom"
        {...register("nom", {
          required: "Le nom est obligatoire",
          pattern: {
            value: onlyLettersRegex,
            message: "Le nom doit contenir uniquement des lettres",
          },
          minLength: { value: 2, message: "Minimum 2 caractères" },
        })}
        onBlur={() => trigger("nom")}
      />
      {errors.nom && <p className="error">{errors.nom.message}</p>}

      {/* Prénom */}
      <label>Prénom</label>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        {...register("prenom", {
          required: "Le prénom est obligatoire",
          pattern: {
            value: onlyLettersRegex,
            message: "Le prénom doit contenir uniquement des lettres",
          },
          minLength: { value: 2, message: "Minimum 2 caractères" },
        })}
        onBlur={() => trigger("prenom")}
      />
      {errors.prenom && <p className="error">{errors.prenom.message}</p>}

      {/* Email */}
      <label>Email</label>
      <input
        type="email"
        placeholder="exemple@gmail.com"
        {...register("email", {
          required: "L'email est obligatoire",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Format email invalide",
          },
        })}
        onBlur={() => trigger("email")}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      {/* Téléphone */}
      <label>Téléphone (format canadien)</label>
      <input
        type="text"
        placeholder="Ex: 514-123-4567"
        {...register("telephone", {
          required: "Le téléphone est obligatoire",
          pattern: {
            value: /^[2-9]\d{2}-\d{3}-\d{4}$/,
            message: "Format canadien requis (ex: 514-123-4567)",
          },
        })}
        onBlur={() => trigger("telephone")}
      />
      {errors.telephone && <p className="error">{errors.telephone.message}</p>}

      {/* Adresse */}
      <label>Adresse</label>
      <input
        type="text"
        placeholder="Votre adresse complète"
        {...register("adresse", {
          required: "L'adresse est obligatoire",
          pattern: {
            value: addressRegex,
            message: "Adresse invalide",
          },
        })}
        onBlur={() => trigger("adresse")}
      />
      {errors.adresse && <p className="error">{errors.adresse.message}</p>}

      {/* Sexe */}
      <label>Sexe</label>
      <select
        {...register("sexe", { required: "Veuillez sélectionner un sexe" })}
        onBlur={() => trigger("sexe")}
      >
        <option value="">-- Choisir --</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
        <option value="Autre">Autre</option>
      </select>
      {errors.sexe && <p className="error">{errors.sexe.message}</p>}

      {/* Profession */}
      <label>Profession</label>
      <input
        type="text"
        placeholder="Votre profession"
        {...register("profession", {
          required: "La profession est obligatoire",
          pattern: {
            value: onlyLettersRegex,
            message: "La profession doit contenir uniquement des lettres",
          },
        })}
        onBlur={() => trigger("profession")}
      />
      {errors.profession && <p className="error">{errors.profession.message}</p>}

      {/* Bouton */}
      <button type="submit" className="btn-envoyer">
        Envoyer
      </button>
    </form>
  );
}
