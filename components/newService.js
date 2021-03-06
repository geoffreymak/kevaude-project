import React from "react";

export default function newService() {
  return (
    <section id="services" className="section features_area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4
                className="title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Nos Services
              </h4>
              <p
                className="wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                Nous avons pour secteurs d'activité prioritaire, le trading
                pétrolier et l'affrètement des unités fluviales.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div
              className="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <div className="icon color-1">
                <i className="lni lni-briefcase"></i>
              </div>
              <h4>Trading Pétrolier</h4>
              <p>
                La mission de nos équipes : valoriser nos produits, sécuriser
                l'approvisionnement de nos raffineries et acheminer l'énergie
                vers les centres de consommation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div
              className="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.4s"
            >
              <div className="icon color-1">
                <i className="lni lni-clipboard"></i>
              </div>
              <h4>Affrètement des unités fluviales</h4>
              <p>
                Réception et stockage de la marchandise de notre clientèle,
                Acheminement du fret jusqu’à sa destination de livraison, Remise
                à un sous-traitant ou transport jusqu’au lieu de livraison
                final.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div
              className="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.6s"
            >
              <div className="icon color-1">
                <i className="lni lni-target-revenue"></i>
              </div>
              <h4>Agro-Alimentaire</h4>
              <p>
                Nous produisons des aliments issues de l'agriculture et de la
                pêche en aliments industriels destinés essentiellement à la
                consommation humaine.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div
              className="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.8s"
            >
              <div className="icon color-1">
                <i className="lni lni-invention"></i>
              </div>
              <h4>Approvisionnement en Ciment</h4>
              <p>
                GROUPE KEVAUDE occupe la place de major de l’industrie du ciment
                en RDC.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div
              className="item-boxes services-item wow fadeInDown"
              data-wow-delay="1s"
            >
              <div className="icon color-1">
                <i className="lni lni-bar-chart"></i>
              </div>
              <h4> Fournitures et Commercialisation</h4>
              <p>
                Pour aider le monde industriel à trouver des solutions globales,
                à trouver des réponses en matière de services spécialisés, le
                GROUPE KEVAUDE renforce son offre de services en développant la
                commercialisation de fournitures industrielles.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div
              className="item-boxes services-item wow fadeInDown"
              data-wow-delay="1.2s"
            >
              <div className="icon color-1">
                <i className="lni lni-calendar"></i>
              </div>
              <h4> Approvisionnement en Hydrocarbures</h4>
              <p>
                Nous avons La maitrise des Processus Logistiques adoptés dans
                les chaines d’approvisionnement des Hydrocarbures : Pétroles et
                Gaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
