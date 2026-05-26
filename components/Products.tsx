import "./Product.css"
import Image from "next/image";

export default function AfficherProduitsPopulaires() {
  return (
    <div className="containerproduits">

      <div id="titre">
        <h2>Produits populaires</h2>
      </div>
      
          <div id="containerproduit12">
               <div id="containerproduit1">
                    <h3>Pull Élégance Femme</h3>

                  <Image
                    src="/images/maillotfille.jpg"
                    alt="Image de produit populaire de Elite Store"
                    width={250}
                    height={250}
                  />

                  <p>
                         Pull tricoté chic et confortable, parfait pour les journées fraîches
                         avec un style moderne et raffiné.
                  </p>

                   <p>49.99 $</p>
               </div>

               <div id="containerproduit2">
                    <h3>Palette Glam Beauty</h3>

                    <Image
                         src="/images/maquillage1.jpg"
                         alt="Image de produit populaire de Elite Store"
                         width={250}
                         height={250}
                    />

                    <p>
                         Palette de maquillage avec plusieurs teintes lumineuses pour créer
                         un look naturel ou glamour.
                    </p>

                    <p>29.99 $</p>
               </div>

               <div id="containerproduit3">
                    <h3>Poudre Naturelle Premium</h3>

                    <Image
                         src="/images/maquillage2.jpg"
                         alt="Image de produit populaire de Elite Store"
                         width={250}
                         height={250}
                    />

                    <p>
                         Poudre légère et douce pour une finition impeccable qui met en valeur
                         la beauté naturelle.
                    </p>

                    <p>24.99 $</p>
               </div>

               <div id="containerproduit4">
                    <h3>Veste Homme Prestige</h3>

                    <Image
                         src="/images/vestehomme.jpg"
                         alt="Image de produit populaire de Elite Store"
                         width={250}
                         height={250}
                    />

                    <p>
                         Veste élégante pour homme avec une coupe moderne, idéale pour les
                         occasions spéciales.
                    </p>

                    <p>89.99 $</p>
               </div>

               <div id="containerproduit5">
                    <h3>Robe Royale Tradition</h3>

                    <Image
                         src="/images/vetementfilleindienne.jpg"
                         alt="Image de produit populaire de Elite Store"
                         width={250}
                         height={250}
                    />

                    <p>
                         Robe traditionnelle raffinée avec des détails luxueux pour un style
                         unique et remarquable.
                    </p>

                    <p>119.99 $</p>
               </div>

          </div>

     </div>
  );
}