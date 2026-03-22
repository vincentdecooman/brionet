(function () {
  'use strict';

  // ===== Configuration =====
  var CONFIG = {
    web3formsKey: '7345d878-0486-44e6-8d47-a21af69de875',
    consentKey: 'fdc_cookie_consent',
    consentVersion: '1.0',
    langKey: 'fdc_lang',
    defaultLang: 'fr-CA',
  };

  // ===== Embedded Translations =====
  var ALL_TRANSLATIONS = {
    'fr-CA': {
      "META": {
        "TITLE": "FDC Multiservices | Lavage de vitres, conciergerie et entretien",
        "DESCRIPTION": "FDC Multiservices offre le lavage de vitres, la conciergerie, le lavage \u00e0 pression, des services commercial-r\u00e9sidentiel et le d\u00e9neigement manuel dans la r\u00e9gion de Saint-Jean-sur-Richelieu, Montr\u00e9al et la Rive-Sud."
      },
      "NAV": {
        "HOME": "Accueil",
        "SERVICES": "Services",
        "MARKETS": "Client\u00e8les",
        "REGIONS": "R\u00e9gions",
        "ABOUT": "\u00c0 propos",
        "TESTIMONIALS": "T\u00e9moignages",
        "FAQ": "FAQ",
        "CONTACT": "Contact",
        "REQUEST_QUOTE": "Demander une soumission",
        "CALL_US": "Appelez-nous",
        "MENU": "Menu"
      },
      "HERO": {
        "TAGLINE": "Multiservices r\u00e9sidentiel et commercial",
        "TITLE": "Des services professionnels pour votre entreprise ou r\u00e9sidence",
        "DESCRIPTION": "FDC Multiservices offre le lavage de vitres, la conciergerie, le lavage \u00e0 pression et le d\u00e9neigement manuel pour le r\u00e9sidentiel et le commercial, dans la r\u00e9gion de Saint-Jean-sur-Richelieu, Montr\u00e9al et la Rive-Sud.",
        "CTA_PRIMARY": "Demander une soumission",
        "CTA_SECONDARY": "Nos services",
        "OR_CALL": "Ou appelez-nous\u00a0:"
      },
      "SERVICES": {
        "TITLE": "Nos services",
        "SUBTITLE": "Des solutions compl\u00e8tes pour tous vos besoins d\u2019entretien",
        "WINDOW_CLEANING": {
          "TITLE": "LAVAGE DE VITRES",
          "DESCRIPTION": "Nettoyage professionnel de vitres avec \u00e9quipement sp\u00e9cialis\u00e9. Service disponible pour immeubles commerciaux et r\u00e9sidentiels de toutes tailles."
        },
        "JANITORIAL": {
          "TITLE": "CONCIERGERIE",
          "DESCRIPTION": "Services de conciergerie complets pour vos espaces commerciaux. Entretien r\u00e9gulier adapt\u00e9 \u00e0 vos besoins et \u00e0 votre horaire."
        },
        "PRESSURE_WASHING": {
          "TITLE": "LAVAGE \u00c0 PRESSION",
          "DESCRIPTION": "Nettoyage en profondeur \u00e0 haute pression pour vos surfaces ext\u00e9rieures: entr\u00e9es, terrasses, stationnements, fa\u00e7ades et plus encore."
        },
        "COMMERCIAL_RESIDENTIAL": {
          "TITLE": "COMMERCIAL-R\u00c9SIDENTIEL",
          "DESCRIPTION": "Services adapt\u00e9s \u00e0 chaque type de propri\u00e9t\u00e9, qu\u2019il s\u2019agisse d\u2019un immeuble commercial, d\u2019une r\u00e9sidence priv\u00e9e ou d\u2019une copropri\u00e9t\u00e9."
        },
        "SNOW_REMOVAL": {
          "TITLE": "D\u00c9NEIGEMENT MANUEL",
          "DESCRIPTION": "Service de d\u00e9neigement manuel pour toits, balcons, entr\u00e9es et espaces difficiles d\u2019acc\u00e8s. Intervention rapide et s\u00e9curitaire."
        },
        "LEARN_MORE": "En savoir plus"
      },
      "MARKETS": {
        "TITLE": "Commercial et r\u00e9sidentiel",
        "SUBTITLE": "Des services adapt\u00e9s \u00e0 chaque type de propri\u00e9t\u00e9",
        "COMMERCIAL": {
          "TITLE": "Commercial",
          "DESCRIPTION": "Immeubles de bureaux, centres commerciaux, \u00e9tablissements de sant\u00e9, institutions \u00e9ducatives et plus encore. Nous comprenons les exigences uniques des espaces commerciaux.",
          "FEATURES": [
            "Horaires flexibles pour minimiser les perturbations",
            "\u00c9quipement professionnel pour tous les travaux",
            "Service r\u00e9gulier ou ponctuel selon vos besoins",
            "Devis personnalis\u00e9 gratuit"
          ]
        },
        "RESIDENTIAL": {
          "TITLE": "R\u00e9sidentiel",
          "DESCRIPTION": "Maisons, condos, appartements et propri\u00e9t\u00e9s de luxe. Un service attentionn\u00e9 qui respecte votre espace de vie.",
          "FEATURES": [
            "Nettoyage int\u00e9rieur et ext\u00e9rieur des vitres",
            "Attention aux d\u00e9tails pour un r\u00e9sultat impeccable",
            "Respect de votre propri\u00e9t\u00e9 et de votre vie priv\u00e9e",
            "Prix comp\u00e9titifs"
          ]
        }
      },
      "REGIONS": {
        "TITLE": "R\u00e9gions desservies",
        "SUBTITLE": "Nous servons fi\u00e8rement les communaut\u00e9s de la Mont\u00e9r\u00e9gie et du Grand Montr\u00e9al",
        "AREAS": {
          "STJEAN": {
            "NAME": "Saint-Jean-sur-Richelieu",
            "DESCRIPTION": "Notre r\u00e9gion d\u2019origine, o\u00f9 nous servons la communaut\u00e9 avec fiert\u00e9."
          },
          "MONTREAL": {
            "NAME": "Montr\u00e9al",
            "DESCRIPTION": "Service disponible dans l\u2019ensemble de l\u2019\u00eele de Montr\u00e9al et ses environs."
          },
          "SOUTHSHORE": {
            "NAME": "Rive-Sud",
            "DESCRIPTION": "Couvrant Longueuil, Brossard, La Prairie et les municipalit\u00e9s avoisinantes."
          }
        },
        "CTA": "V\u00e9rifiez si nous desservons votre secteur"
      },
      "ABOUT": {
        "TITLE": "\u00c0 propos de FDC Multiservices",
        "SUBTITLE": "Votre partenaire de confiance pour l\u2019entretien et les multiservices",
        "DESCRIPTION": "FDC Multiservices se d\u00e9marque par la qualit\u00e9 et la diversit\u00e9 de ses services d\u2019entretien. Notre \u00e9quipe exp\u00e9riment\u00e9e dessert avec fiert\u00e9 les secteurs r\u00e9sidentiel et commercial de Saint-Jean-sur-Richelieu, Montr\u00e9al et la Rive-Sud.",
        "VALUES": {
          "TITLE": "Nos valeurs",
          "QUALITY": {
            "TITLE": "Qualit\u00e9",
            "DESCRIPTION": "Un travail minutieux et des r\u00e9sultats impeccables \u00e0 chaque intervention."
          },
          "RELIABILITY": {
            "TITLE": "Fiabilit\u00e9",
            "DESCRIPTION": "Respect des engagements et ponctualit\u00e9 garantie."
          },
          "SAFETY": {
            "TITLE": "S\u00e9curit\u00e9",
            "DESCRIPTION": "\u00c9quipement moderne et protocoles de s\u00e9curit\u00e9 rigoureux."
          },
          "SERVICE": {
            "TITLE": "Service client",
            "DESCRIPTION": "Une approche personnalis\u00e9e et une communication transparente."
          }
        }
      },
      "TESTIMONIALS": {
        "TITLE": "Ce que nos clients disent",
        "SUBTITLE": "La satisfaction de nos clients est notre priorit\u00e9",
        "ITEMS": [
          {
            "TEXT": "Service impeccable et \u00e9quipe tr\u00e8s professionnelle. Nos vitres n\u2019ont jamais \u00e9t\u00e9 aussi propres!",
            "AUTHOR": "Client commercial",
            "LOCATION": "Montr\u00e9al"
          },
          {
            "TEXT": "Ponctualit\u00e9, efficacit\u00e9 et r\u00e9sultats remarquables. Je recommande sans h\u00e9sitation.",
            "AUTHOR": "Propri\u00e9taire r\u00e9sidentiel",
            "LOCATION": "Saint-Jean-sur-Richelieu"
          },
          {
            "TEXT": "Excellent rapport qualit\u00e9-prix. L\u2019\u00e9quipe est courtoise et le travail est toujours bien fait.",
            "AUTHOR": "Gestionnaire d\u2019immeuble",
            "LOCATION": "Rive-Sud"
          }
        ]
      },
      "FAQ": {
        "TITLE": "Questions fr\u00e9quentes",
        "SUBTITLE": "Trouvez rapidement les r\u00e9ponses \u00e0 vos questions",
        "ITEMS": [
          {
            "QUESTION": "Quelles r\u00e9gions desservez-vous?",
            "ANSWER": "Nous desservons Saint-Jean-sur-Richelieu, Montr\u00e9al et la Rive-Sud. Contactez-nous pour v\u00e9rifier si nous couvrons votre secteur sp\u00e9cifique."
          },
          {
            "QUESTION": "Offrez-vous des services pour les r\u00e9sidences?",
            "ANSWER": "Oui! Nous offrons nos services tant aux clients commerciaux que r\u00e9sidentiels. Que vous ayez une maison, un condo ou un appartement, nous pouvons vous aider."
          },
          {
            "QUESTION": "Comment obtenir une soumission?",
            "ANSWER": "Remplissez notre formulaire de contact en ligne ou appelez-nous directement. Nous vous fournirons une soumission gratuite et sans engagement."
          },
          {
            "QUESTION": "Offrez-vous le d\u00e9neigement manuel?",
            "ANSWER": "Absolument. Nous offrons un service de d\u00e9neigement manuel pour toits, balcons, entr\u00e9es et espaces difficiles d\u2019acc\u00e8s, avec une intervention rapide et s\u00e9curitaire."
          },
          {
            "QUESTION": "Quelle est la fr\u00e9quence recommand\u00e9e pour le lavage de vitres?",
            "ANSWER": "Pour les commerces, nous recommandons g\u00e9n\u00e9ralement un nettoyage mensuel ou trimestriel selon l\u2019achalandage. Pour les r\u00e9sidences, un nettoyage saisonnier (2 \u00e0 4 fois par ann\u00e9e) est souvent suffisant."
          },
          {
            "QUESTION": "Quels modes de paiement acceptez-vous?",
            "ANSWER": "Nous acceptons les paiements par ch\u00e8que, virement bancaire et les principales cartes de cr\u00e9dit. Les modalit\u00e9s de paiement sont \u00e9tablies lors de la soumission."
          }
        ],
        "MORE_QUESTIONS": "Vous avez d\u2019autres questions?"
      },
      "CONTACT": {
        "TITLE": "Contactez-nous",
        "SUBTITLE": "Demandez votre soumission gratuite d\u00e8s aujourd\u2019hui",
        "FORM": {
          "NAME": "Nom complet",
          "NAME_PLACEHOLDER": "Votre nom",
          "EMAIL": "Courriel",
          "EMAIL_PLACEHOLDER": "votre@courriel.com",
          "PHONE": "T\u00e9l\u00e9phone (optionnel)",
          "PHONE_PLACEHOLDER": "(514) 555-0123",
          "SERVICE": "Service souhait\u00e9",
          "SERVICE_PLACEHOLDER": "S\u00e9lectionnez un service",
          "SERVICE_WINDOW_CLEANING": "Lavage de vitres",
          "SERVICE_JANITORIAL": "Conciergerie",
          "SERVICE_PRESSURE_WASHING": "Lavage \u00e0 pression",
          "SERVICE_COMMERCIAL_RESIDENTIAL": "Commercial-r\u00e9sidentiel",
          "SERVICE_SNOW_REMOVAL": "D\u00e9neigement manuel",
          "REGION": "R\u00e9gion",
          "REGION_PLACEHOLDER": "S\u00e9lectionnez votre r\u00e9gion",
          "MESSAGE": "Message",
          "MESSAGE_PLACEHOLDER": "D\u00e9crivez vos besoins...",
          "SUBMIT": "Envoyer la demande",
          "SUBMITTING": "Envoi en cours...",
          "REQUIRED": "Ce champ est requis",
          "INVALID_EMAIL": "Veuillez entrer un courriel valide"
        },
        "SUCCESS": {
          "TITLE": "Message envoy\u00e9!",
          "MESSAGE": "Merci pour votre demande. Nous vous contacterons dans les plus brefs d\u00e9lais."
        },
        "ERROR": {
          "TITLE": "Erreur",
          "MESSAGE": "Une erreur est survenue. Veuillez r\u00e9essayer ou nous contacter par t\u00e9l\u00e9phone."
        },
        "INFO": {
          "TITLE": "Informations de contact",
          "PHONE": "T\u00e9l\u00e9phone",
          "EMAIL": "Courriel",
          "HOURS": "Heures d\u2019ouverture",
          "HOURS_VALUE": "Lundi au vendredi: 8h \u00e0 17h"
        }
      },
      "FOOTER": {
        "DESCRIPTION": "Services professionnels d\u2019entretien pour le r\u00e9sidentiel et le commercial.",
        "QUICK_LINKS": "Liens rapides",
        "SERVICES": "Services",
        "LEGAL": "L\u00e9gal",
        "PRIVACY": "Politique de confidentialit\u00e9",
        "COOKIES": "Gestion des cookies",
        "TERMS": "Conditions d\u2019utilisation",
        "COPYRIGHT": "\u00a9 {{year}} FDC Multiservices. Tous droits r\u00e9serv\u00e9s.",
        "REGIONS_SERVED": "R\u00e9gions desservies: Saint-Jean-sur-Richelieu, Montr\u00e9al, Rive-Sud",
        "CREDIT": "Con\u00e7u &amp; d\u00e9velopp\u00e9 par <a href=\"https://vincent.decooman.ca\" class=\"text-brionet-steel hover:text-brionet-red underline underline-offset-2 transition-colors\" rel=\"noopener noreferrer\" target=\"_blank\">Vincent De Cooman</a>."
      },
      "COOKIES": {
        "BANNER": {
          "TITLE": "Nous utilisons des cookies",
          "DESCRIPTION": "Ce site utilise des cookies pour am\u00e9liorer votre exp\u00e9rience. Les cookies n\u00e9cessaires sont essentiels au fonctionnement du site. Vous pouvez choisir d\u2019accepter ou de refuser les cookies optionnels.",
          "ACCEPT_ALL": "Accepter tout",
          "REJECT_OPTIONAL": "Refuser les optionnels",
          "CUSTOMIZE": "Personnaliser"
        },
        "MODAL": {
          "TITLE": "Pr\u00e9f\u00e9rences de cookies",
          "DESCRIPTION": "G\u00e9rez vos pr\u00e9f\u00e9rences de cookies. Conform\u00e9ment \u00e0 la Loi 25 du Qu\u00e9bec, nous respectons votre vie priv\u00e9e et vous donnons le contr\u00f4le sur vos donn\u00e9es.",
          "NECESSARY": {
            "TITLE": "Cookies n\u00e9cessaires",
            "DESCRIPTION": "Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas \u00eatre d\u00e9sactiv\u00e9s. Ils permettent la navigation et l\u2019utilisation des fonctionnalit\u00e9s de base.",
            "ALWAYS_ON": "Toujours actifs"
          },
          "ANALYTICS": {
            "TITLE": "Cookies analytiques",
            "DESCRIPTION": "Ces cookies nous aident \u00e0 comprendre comment les visiteurs interagissent avec notre site en collectant des informations de mani\u00e8re anonyme."
          },
          "MARKETING": {
            "TITLE": "Cookies marketing",
            "DESCRIPTION": "Ces cookies sont utilis\u00e9s pour suivre les visiteurs sur les sites web afin d\u2019afficher des publicit\u00e9s pertinentes."
          },
          "SAVE": "Enregistrer mes pr\u00e9f\u00e9rences",
          "ACCEPT_ALL": "Accepter tout"
        }
      },
      "PRIVACY": {
        "TITLE": "Politique de confidentialit\u00e9",
        "LAST_UPDATED": "Derni\u00e8re mise \u00e0 jour",
        "SECTIONS": {
          "INTRO": {
            "TITLE": "Introduction",
            "CONTENT": "FDC Multiservices s\u2019engage \u00e0 prot\u00e9ger votre vie priv\u00e9e. Cette politique explique comment nous collectons, utilisons et prot\u00e9geons vos informations personnelles, conform\u00e9ment \u00e0 la Loi 25 du Qu\u00e9bec sur la protection des renseignements personnels."
          },
          "COLLECTION": {
            "TITLE": "Collecte des informations",
            "CONTENT": "Nous collectons les informations que vous nous fournissez volontairement via notre formulaire de contact: nom, courriel, t\u00e9l\u00e9phone (optionnel), service souhait\u00e9, r\u00e9gion et message."
          },
          "USE": {
            "TITLE": "Utilisation des informations",
            "CONTENT": "Vos informations sont utilis\u00e9es uniquement pour r\u00e9pondre \u00e0 vos demandes de soumission et pour communiquer avec vous concernant nos services."
          },
          "COOKIES": {
            "TITLE": "Cookies et technologies similaires",
            "CONTENT": "Notre site utilise des cookies n\u00e9cessaires au fonctionnement du site. Les cookies analytiques et marketing ne sont activ\u00e9s qu\u2019avec votre consentement explicite."
          },
          "RIGHTS": {
            "TITLE": "Vos droits",
            "CONTENT": "Vous avez le droit d\u2019acc\u00e9der \u00e0 vos donn\u00e9es, de les rectifier ou de demander leur suppression. Contactez-nous pour exercer ces droits."
          },
          "CONTACT": {
            "TITLE": "Contact",
            "CONTENT": "Pour toute question concernant cette politique, contactez-nous via notre formulaire ou par t\u00e9l\u00e9phone."
          }
        }
      },
      "COMMON": {
        "LOADING": "Chargement...",
        "ERROR": "Une erreur est survenue",
        "CLOSE": "Fermer",
        "BACK_TO_TOP": "Retour en haut",
        "BACK_HOME": "Retour \u00e0 l\u2019accueil"
      }
    },
    'en': {
      "META": {
        "TITLE": "FDC Multiservices | Window Cleaning, Janitorial & Maintenance",
        "DESCRIPTION": "FDC Multiservices offers window cleaning, janitorial services, pressure washing, commercial-residential services and manual snow removal across Saint-Jean-sur-Richelieu, Montr\u00e9al, and the South Shore."
      },
      "NAV": {
        "HOME": "Home",
        "SERVICES": "Services",
        "MARKETS": "Markets",
        "REGIONS": "Regions",
        "ABOUT": "About",
        "TESTIMONIALS": "Testimonials",
        "FAQ": "FAQ",
        "CONTACT": "Contact",
        "REQUEST_QUOTE": "Request a quote",
        "CALL_US": "Call us",
        "MENU": "Menu"
      },
      "HERO": {
        "TAGLINE": "Residential & Commercial Multiservices",
        "TITLE": "Professional services for your business or home",
        "DESCRIPTION": "FDC Multiservices offers window cleaning, janitorial services, pressure washing and manual snow removal for residential and commercial clients across Saint-Jean-sur-Richelieu, Montr\u00e9al, and the South Shore.",
        "CTA_PRIMARY": "Request a quote",
        "CTA_SECONDARY": "Our services",
        "OR_CALL": "Or call us:"
      },
      "SERVICES": {
        "TITLE": "Our Services",
        "SUBTITLE": "Complete solutions for all your maintenance needs",
        "WINDOW_CLEANING": {
          "TITLE": "WINDOW CLEANING",
          "DESCRIPTION": "Professional window cleaning with specialized equipment. Service available for commercial and residential buildings of all sizes."
        },
        "JANITORIAL": {
          "TITLE": "JANITORIAL SERVICES",
          "DESCRIPTION": "Complete janitorial services for your commercial spaces. Regular maintenance tailored to your needs and schedule."
        },
        "PRESSURE_WASHING": {
          "TITLE": "PRESSURE WASHING",
          "DESCRIPTION": "Deep high-pressure cleaning for your exterior surfaces: driveways, terraces, parking lots, facades and more."
        },
        "COMMERCIAL_RESIDENTIAL": {
          "TITLE": "COMMERCIAL-RESIDENTIAL",
          "DESCRIPTION": "Services tailored to every type of property, whether it's a commercial building, private residence or condominium."
        },
        "SNOW_REMOVAL": {
          "TITLE": "MANUAL SNOW REMOVAL",
          "DESCRIPTION": "Manual snow removal service for roofs, balconies, entrances and hard-to-reach spaces. Fast and safe intervention."
        },
        "LEARN_MORE": "Learn more"
      },
      "MARKETS": {
        "TITLE": "Commercial & Residential",
        "SUBTITLE": "Services tailored to each type of property",
        "COMMERCIAL": {
          "TITLE": "Commercial",
          "DESCRIPTION": "Office buildings, shopping centers, healthcare facilities, educational institutions and more. We understand the unique requirements of commercial spaces.",
          "FEATURES": [
            "Flexible scheduling to minimize disruption",
            "Professional equipment for all jobs",
            "Regular or one-time service based on your needs",
            "Free customized quote"
          ]
        },
        "RESIDENTIAL": {
          "TITLE": "Residential",
          "DESCRIPTION": "Houses, condos, apartments and luxury properties. Attentive service that respects your living space.",
          "FEATURES": [
            "Interior and exterior window cleaning",
            "Attention to detail for impeccable results",
            "Respect for your property and privacy",
            "Competitive pricing"
          ]
        }
      },
      "REGIONS": {
        "TITLE": "Regions Served",
        "SUBTITLE": "Proudly serving communities in Mont\u00e9r\u00e9gie and Greater Montr\u00e9al",
        "AREAS": {
          "STJEAN": {
            "NAME": "Saint-Jean-sur-Richelieu",
            "DESCRIPTION": "Our home region, where we proudly serve the community."
          },
          "MONTREAL": {
            "NAME": "Montr\u00e9al",
            "DESCRIPTION": "Service available throughout the Island of Montr\u00e9al and surrounding areas."
          },
          "SOUTHSHORE": {
            "NAME": "South Shore",
            "DESCRIPTION": "Covering Longueuil, Brossard, La Prairie and neighboring municipalities."
          }
        },
        "CTA": "Check if we serve your area"
      },
      "ABOUT": {
        "TITLE": "About FDC Multiservices",
        "SUBTITLE": "Your trusted partner for maintenance and multiservices",
        "DESCRIPTION": "FDC Multiservices stands out for the quality and diversity of its maintenance services. Our experienced team proudly serves residential and commercial sectors in Saint-Jean-sur-Richelieu, Montr\u00e9al and the South Shore.",
        "VALUES": {
          "TITLE": "Our Values",
          "QUALITY": {
            "TITLE": "Quality",
            "DESCRIPTION": "Meticulous work and impeccable results with every service."
          },
          "RELIABILITY": {
            "TITLE": "Reliability",
            "DESCRIPTION": "Commitment to our promises and guaranteed punctuality."
          },
          "SAFETY": {
            "TITLE": "Safety",
            "DESCRIPTION": "Modern equipment and strict safety protocols."
          },
          "SERVICE": {
            "TITLE": "Customer Service",
            "DESCRIPTION": "A personalized approach and transparent communication."
          }
        }
      },
      "TESTIMONIALS": {
        "TITLE": "What Our Clients Say",
        "SUBTITLE": "Customer satisfaction is our priority",
        "ITEMS": [
          {
            "TEXT": "Impeccable service and a very professional team. Our windows have never been this clean!",
            "AUTHOR": "Commercial client",
            "LOCATION": "Montr\u00e9al"
          },
          {
            "TEXT": "Punctuality, efficiency and remarkable results. I recommend without hesitation.",
            "AUTHOR": "Residential owner",
            "LOCATION": "Saint-Jean-sur-Richelieu"
          },
          {
            "TEXT": "Excellent value for money. The team is courteous and the work is always well done.",
            "AUTHOR": "Building manager",
            "LOCATION": "South Shore"
          }
        ]
      },
      "FAQ": {
        "TITLE": "Frequently Asked Questions",
        "SUBTITLE": "Quickly find answers to your questions",
        "ITEMS": [
          {
            "QUESTION": "What regions do you serve?",
            "ANSWER": "We serve Saint-Jean-sur-Richelieu, Montr\u00e9al and the South Shore. Contact us to verify if we cover your specific area."
          },
          {
            "QUESTION": "Do you offer services for residences?",
            "ANSWER": "Yes! We offer our services to both commercial and residential clients. Whether you have a house, condo or apartment, we can help."
          },
          {
            "QUESTION": "How do I get a quote?",
            "ANSWER": "Fill out our online contact form or call us directly. We will provide you with a free, no-obligation quote."
          },
          {
            "QUESTION": "Do you offer manual snow removal?",
            "ANSWER": "Absolutely. We offer a manual snow removal service for roofs, balconies, entrances and hard-to-reach spaces, with fast and safe intervention."
          },
          {
            "QUESTION": "What is the recommended frequency for window cleaning?",
            "ANSWER": "For businesses, we generally recommend monthly or quarterly cleaning depending on traffic. For residences, seasonal cleaning (2 to 4 times per year) is often sufficient."
          },
          {
            "QUESTION": "What payment methods do you accept?",
            "ANSWER": "We accept payment by check, bank transfer and major credit cards. Payment terms are established during the quote process."
          }
        ],
        "MORE_QUESTIONS": "Have more questions?"
      },
      "CONTACT": {
        "TITLE": "Contact Us",
        "SUBTITLE": "Request your free quote today",
        "FORM": {
          "NAME": "Full Name",
          "NAME_PLACEHOLDER": "Your name",
          "EMAIL": "Email",
          "EMAIL_PLACEHOLDER": "your@email.com",
          "PHONE": "Phone (optional)",
          "PHONE_PLACEHOLDER": "(514) 555-0123",
          "SERVICE": "Desired Service",
          "SERVICE_PLACEHOLDER": "Select a service",
          "SERVICE_WINDOW_CLEANING": "Window Cleaning",
          "SERVICE_JANITORIAL": "Janitorial Services",
          "SERVICE_PRESSURE_WASHING": "Pressure Washing",
          "SERVICE_COMMERCIAL_RESIDENTIAL": "Commercial-Residential",
          "SERVICE_SNOW_REMOVAL": "Manual Snow Removal",
          "REGION": "Region",
          "REGION_PLACEHOLDER": "Select your region",
          "MESSAGE": "Message",
          "MESSAGE_PLACEHOLDER": "Describe your needs...",
          "SUBMIT": "Send Request",
          "SUBMITTING": "Sending...",
          "REQUIRED": "This field is required",
          "INVALID_EMAIL": "Please enter a valid email"
        },
        "SUCCESS": {
          "TITLE": "Message Sent!",
          "MESSAGE": "Thank you for your request. We will contact you as soon as possible."
        },
        "ERROR": {
          "TITLE": "Error",
          "MESSAGE": "An error occurred. Please try again or contact us by phone."
        },
        "INFO": {
          "TITLE": "Contact Information",
          "PHONE": "Phone",
          "EMAIL": "Email",
          "HOURS": "Business Hours",
          "HOURS_VALUE": "Monday to Friday: 8am to 5pm"
        }
      },
      "FOOTER": {
        "DESCRIPTION": "Professional maintenance services for residential and commercial clients.",
        "QUICK_LINKS": "Quick Links",
        "SERVICES": "Services",
        "LEGAL": "Legal",
        "PRIVACY": "Privacy Policy",
        "COOKIES": "Cookie Settings",
        "TERMS": "Terms of Use",
        "COPYRIGHT": "\u00a9 {{year}} FDC Multiservices. All rights reserved.",
        "REGIONS_SERVED": "Regions served: Saint-Jean-sur-Richelieu, Montr\u00e9al, South Shore",
        "CREDIT": "Designed &amp; developed by <a href=\"https://vincent.decooman.ca\" class=\"text-brionet-steel hover:text-brionet-red underline underline-offset-2 transition-colors\" rel=\"noopener noreferrer\" target=\"_blank\">Vincent De Cooman</a>."
      },
      "COOKIES": {
        "BANNER": {
          "TITLE": "We use cookies",
          "DESCRIPTION": "This site uses cookies to improve your experience. Necessary cookies are essential for the site to function. You can choose to accept or refuse optional cookies.",
          "ACCEPT_ALL": "Accept all",
          "REJECT_OPTIONAL": "Reject optional",
          "CUSTOMIZE": "Customize"
        },
        "MODAL": {
          "TITLE": "Cookie Preferences",
          "DESCRIPTION": "Manage your cookie preferences. In accordance with Quebec's Law 25, we respect your privacy and give you control over your data.",
          "NECESSARY": {
            "TITLE": "Necessary Cookies",
            "DESCRIPTION": "These cookies are essential for the site to function and cannot be disabled. They enable navigation and use of basic features.",
            "ALWAYS_ON": "Always active"
          },
          "ANALYTICS": {
            "TITLE": "Analytics Cookies",
            "DESCRIPTION": "These cookies help us understand how visitors interact with our site by collecting information anonymously."
          },
          "MARKETING": {
            "TITLE": "Marketing Cookies",
            "DESCRIPTION": "These cookies are used to track visitors across websites to display relevant advertisements."
          },
          "SAVE": "Save my preferences",
          "ACCEPT_ALL": "Accept all"
        }
      },
      "PRIVACY": {
        "TITLE": "Privacy Policy",
        "LAST_UPDATED": "Last updated",
        "SECTIONS": {
          "INTRO": {
            "TITLE": "Introduction",
            "CONTENT": "FDC Multiservices is committed to protecting your privacy. This policy explains how we collect, use and protect your personal information, in accordance with Quebec's Law 25 on the protection of personal information."
          },
          "COLLECTION": {
            "TITLE": "Information Collection",
            "CONTENT": "We collect information you voluntarily provide through our contact form: name, email, phone (optional), desired service, region and message."
          },
          "USE": {
            "TITLE": "Use of Information",
            "CONTENT": "Your information is used only to respond to your quote requests and to communicate with you about our services."
          },
          "COOKIES": {
            "TITLE": "Cookies and Similar Technologies",
            "CONTENT": "Our site uses cookies necessary for the site to function. Analytics and marketing cookies are only activated with your explicit consent."
          },
          "RIGHTS": {
            "TITLE": "Your Rights",
            "CONTENT": "You have the right to access your data, correct it or request its deletion. Contact us to exercise these rights."
          },
          "CONTACT": {
            "TITLE": "Contact",
            "CONTENT": "For any questions about this policy, contact us via our form or by phone."
          }
        }
      },
      "COMMON": {
        "LOADING": "Loading...",
        "ERROR": "An error occurred",
        "CLOSE": "Close",
        "BACK_TO_TOP": "Back to top",
        "BACK_HOME": "Back to home"
      }
    }
  };

  // ===== State =====
  var translations = {};
  var currentLang = CONFIG.defaultLang;

  // Try to get saved language
  try {
    var saved = localStorage.getItem(CONFIG.langKey);
    if (saved && ALL_TRANSLATIONS[saved]) {
      currentLang = saved;
    }
  } catch (e) { /* localStorage unavailable */ }

  // =============================================
  //  Translation System
  // =============================================
  function t(key) {
    var keys = key.split('.');
    var value = translations;
    for (var i = 0; i < keys.length; i++) {
      if (value === undefined || value === null) return key;
      value = value[keys[i]];
    }
    return value !== undefined && value !== null ? value : key;
  }

  function loadTranslations(lang) {
    if (!ALL_TRANSLATIONS[lang]) {
      console.error('Unknown language: ' + lang);
      return;
    }
    translations = ALL_TRANSLATIONS[lang];
    currentLang = lang;
    try {
      localStorage.setItem(CONFIG.langKey, lang);
    } catch (e) { /* localStorage unavailable */ }
    applyTranslations();
    renderDynamicContent();
    updateLanguageUI();
    updateDocumentMeta();
  }

  function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = t(key);
      if (typeof value === 'string') {
        var params = el.getAttribute('data-i18n-params');
        if (params) {
          try {
            var p = JSON.parse(params);
            Object.keys(p).forEach(function (k) {
              value = value.replace('{{' + k + '}}', p[k]);
            });
          } catch (e) { /* ignore parse error */ }
        }
        el.textContent = value;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = t(key);
      if (typeof value === 'string') el.setAttribute('placeholder', value);
    });

    // Aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var value = t(key);
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });

    // HTML content (for elements that need innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var value = t(key);
      if (typeof value === 'string') el.innerHTML = value;
    });
  }

  function renderDynamicContent() {
    renderFAQ();
    renderTestimonials();
    renderMarketFeatures('commercial');
    renderMarketFeatures('residential');
    renderServiceOptions();
    renderFooterServices();
  }

  function updateLanguageUI() {
    var langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = currentLang === 'fr-CA' ? 'FR' : 'EN';

    document.querySelectorAll('[data-lang-option]').forEach(function (el) {
      var lang = el.getAttribute('data-lang-option');
      el.classList.toggle('font-bold', lang === currentLang);
      el.setAttribute('aria-selected', lang === currentLang ? 'true' : 'false');
    });
  }

  function updateDocumentMeta() {
    document.documentElement.lang = currentLang;
    document.title = t('META.TITLE');

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('META.DESCRIPTION'));

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('META.TITLE'));

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('META.DESCRIPTION'));

    var twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', t('META.TITLE'));

    var twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', t('META.DESCRIPTION'));

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', currentLang === 'fr-CA' ? 'fr_CA' : 'en_CA');
  }

  // =============================================
  //  Dynamic Content Renderers
  // =============================================

  function renderFAQ() {
    var container = document.getElementById('faq-items');
    if (!container) return;
    var items = t('FAQ.ITEMS');
    if (!Array.isArray(items)) return;

    container.innerHTML = items
      .map(function (item, i) {
        return (
          '<div class="collapse collapse-arrow bg-white shadow-md rounded-lg border border-gray-100">' +
          '<input type="checkbox" id="faq-' + i + '" />' +
          '<label for="faq-' + i + '" class="collapse-title text-lg font-heading font-semibold text-brionet-charcoal cursor-pointer hover:text-brionet-red transition-colors pr-12">' +
          escapeHtml(item.QUESTION) +
          '</label>' +
          '<div class="collapse-content">' +
          '<p class="text-brionet-steel pt-2 pb-4 leading-relaxed">' +
          escapeHtml(item.ANSWER) +
          '</p></div></div>'
        );
      })
      .join('');
  }

  function renderTestimonials() {
    var container = document.getElementById('testimonials-items');
    if (!container) return;
    var items = t('TESTIMONIALS.ITEMS');
    if (!Array.isArray(items)) return;

    container.innerHTML = items
      .map(function (item) {
        return (
          '<article class="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">' +
          '<div class="card-body p-6">' +
          '<div class="mb-4"><svg class="w-10 h-10 text-brionet-red opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>' +
          '<blockquote class="text-white mb-6 leading-relaxed">&ldquo;' +
          escapeHtml(item.TEXT) +
          '&rdquo;</blockquote>' +
          '<footer class="mt-auto"><div class="flex items-center gap-3">' +
          '<div class="w-10 h-10 bg-brionet-red/20 rounded-full flex items-center justify-center"><svg class="w-5 h-5 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg></div>' +
          '<div><cite class="text-white font-semibold not-italic block">' +
          escapeHtml(item.AUTHOR) +
          '</cite><span class="text-gray-400 text-sm">' +
          escapeHtml(item.LOCATION) +
          '</span></div></div></footer></div></article>'
        );
      })
      .join('');
  }

  function renderMarketFeatures(type) {
    var container = document.getElementById(type + '-features');
    if (!container) return;
    var key = type === 'commercial' ? 'MARKETS.COMMERCIAL.FEATURES' : 'MARKETS.RESIDENTIAL.FEATURES';
    var items = t(key);
    if (!Array.isArray(items)) return;

    container.innerHTML = items
      .map(function (feature) {
        return (
          '<li class="flex items-start gap-3">' +
          '<svg class="w-5 h-5 text-brionet-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' +
          '<span class="text-brionet-charcoal">' +
          escapeHtml(feature) +
          '</span></li>'
        );
      })
      .join('');
  }

  function renderServiceOptions() {
    var select = document.getElementById('service-select');
    if (!select) return;
    var services = [
      { value: 'WINDOW_CLEANING', key: 'CONTACT.FORM.SERVICE_WINDOW_CLEANING' },
      { value: 'JANITORIAL', key: 'CONTACT.FORM.SERVICE_JANITORIAL' },
      { value: 'PRESSURE_WASHING', key: 'CONTACT.FORM.SERVICE_PRESSURE_WASHING' },
      { value: 'COMMERCIAL_RESIDENTIAL', key: 'CONTACT.FORM.SERVICE_COMMERCIAL_RESIDENTIAL' },
      { value: 'SNOW_REMOVAL', key: 'CONTACT.FORM.SERVICE_SNOW_REMOVAL' },
    ];
    var placeholder = '<option value="" disabled selected>' + escapeHtml(t('CONTACT.FORM.SERVICE_PLACEHOLDER')) + '</option>';
    select.innerHTML =
      placeholder +
      services
        .map(function (s) {
          return '<option value="' + s.value + '">' + escapeHtml(t(s.key)) + '</option>';
        })
        .join('');
  }

  function renderFooterServices() {
    var container = document.getElementById('footer-services-list');
    if (!container) return;
    var services = [
      { key: 'SERVICES.WINDOW_CLEANING.TITLE' },
      { key: 'SERVICES.JANITORIAL.TITLE' },
      { key: 'SERVICES.PRESSURE_WASHING.TITLE' },
      { key: 'SERVICES.COMMERCIAL_RESIDENTIAL.TITLE' },
      { key: 'SERVICES.SNOW_REMOVAL.TITLE' },
    ];
    container.innerHTML = services
      .map(function (s) {
        return (
          '<li><a href="#contact" class="text-brionet-steel hover:text-brionet-red transition-colors">' +
          escapeHtml(t(s.key)) +
          '</a></li>'
        );
      })
      .join('');
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // =============================================
  //  Language Switcher
  // =============================================
  function switchLanguage(lang) {
    if (lang === currentLang) return;
    loadTranslations(lang);
    closeLangDropdown();
  }

  function closeLangDropdown() {
    var el = document.getElementById('lang-dropdown');
    if (el) el.removeAttribute('open');
    if (document.activeElement) document.activeElement.blur();
  }

  // =============================================
  //  Mobile Menu
  // =============================================
  var mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    var menu = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-menu-btn');
    if (menu) menu.classList.toggle('hidden', !mobileMenuOpen);
    if (btn) btn.setAttribute('aria-expanded', mobileMenuOpen.toString());
    updateMenuIcon();
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    var menu = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-menu-btn');
    if (menu) menu.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    updateMenuIcon();
  }

  function updateMenuIcon() {
    var openIcon = document.getElementById('menu-icon-open');
    var closeIcon = document.getElementById('menu-icon-close');
    if (openIcon) openIcon.classList.toggle('hidden', mobileMenuOpen);
    if (closeIcon) closeIcon.classList.toggle('hidden', !mobileMenuOpen);
  }

  // =============================================
  //  Cookie Consent
  // =============================================
  var cookieConsent = null;

  function loadCookieConsent() {
    try {
      var stored = localStorage.getItem(CONFIG.consentKey);
      if (stored) {
        var consent = JSON.parse(stored);
        if (consent.version === CONFIG.consentVersion) {
          cookieConsent = consent;
          hideCookieBanner();
          applyConsentScripts(consent);
          return;
        }
      }
    } catch (e) { /* ignore */ }
    showCookieBanner();
  }

  function showCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('hidden');
  }

  function hideCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');
  }

  function acceptAllCookies() {
    saveCookieConsent({ necessary: true, analytics: true, marketing: true });
  }

  function rejectOptionalCookies() {
    saveCookieConsent({ necessary: true, analytics: false, marketing: false });
  }

  function saveCookiePreferences() {
    var analytics = document.getElementById('cookie-analytics');
    var marketing = document.getElementById('cookie-marketing');
    saveCookieConsent({
      necessary: true,
      analytics: analytics ? analytics.checked : false,
      marketing: marketing ? marketing.checked : false,
    });
  }

  function saveCookieConsent(consent) {
    consent.timestamp = new Date().toISOString();
    consent.version = CONFIG.consentVersion;
    cookieConsent = consent;
    try {
      localStorage.setItem(CONFIG.consentKey, JSON.stringify(consent));
    } catch (e) { /* ignore */ }
    hideCookieBanner();
    closeCookieModal();
    applyConsentScripts(consent);
  }

  function applyConsentScripts(consent) {
    if (consent.analytics) {
      console.log('Analytics consent granted - analytics scripts would load here');
    }
    if (consent.marketing) {
      console.log('Marketing consent granted - marketing scripts would load here');
    }
  }

  function openCookieModal() {
    var modal = document.getElementById('cookie-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('modal-open');
      if (cookieConsent) {
        var a = document.getElementById('cookie-analytics');
        var m = document.getElementById('cookie-marketing');
        if (a) a.checked = cookieConsent.analytics;
        if (m) m.checked = cookieConsent.marketing;
      }
    }
  }

  function closeCookieModal() {
    var modal = document.getElementById('cookie-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('modal-open');
    }
  }

  function acceptAllFromModal() {
    var a = document.getElementById('cookie-analytics');
    var m = document.getElementById('cookie-marketing');
    if (a) a.checked = true;
    if (m) m.checked = true;
    acceptAllCookies();
  }

  // =============================================
  //  Contact Form
  // =============================================
  function handleFormSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var fields = ['name', 'email', 'service', 'region', 'message'];
    var valid = true;

    // Clear previous errors
    document.querySelectorAll('.field-error').forEach(function (el) {
      el.classList.add('hidden');
    });
    document.querySelectorAll('.input-error, .select-error, .textarea-error').forEach(function (el) {
      el.classList.remove('input-error', 'select-error', 'textarea-error');
    });

    // Validate
    fields.forEach(function (name) {
      var field = form.elements[name];
      if (!field || !field.value || field.value.trim() === '') {
        valid = false;
        markFieldError(field, 'CONTACT.FORM.REQUIRED');
      }
    });

    // Email validation
    var emailField = form.elements['email'];
    if (emailField && emailField.value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value)) {
        valid = false;
        markFieldError(emailField, 'CONTACT.FORM.INVALID_EMAIL');
      }
    }

    if (!valid) return;

    // Show loading state
    var submitBtn = document.getElementById('submit-btn');
    var submitText = document.getElementById('submit-text');
    var submitLoading = document.getElementById('submit-loading');
    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.classList.add('hidden');
    if (submitLoading) submitLoading.classList.remove('hidden');

    // Build form data
    var formData = new FormData();
    formData.append('access_key', CONFIG.web3formsKey);
    formData.append('name', form.elements['name'].value);
    formData.append('email', form.elements['email'].value);
    formData.append('phone', form.elements['phone'] ? form.elements['phone'].value : '');
    formData.append('service', form.elements['service'].value);
    formData.append('region', form.elements['region'].value);
    formData.append('message', form.elements['message'].value);
    formData.append('botcheck', '');
    formData.append(
      'subject',
      currentLang === 'fr-CA'
        ? 'Nouvelle demande de soumission - FDC Multiservices'
        : 'New Quote Request - FDC Multiservices'
    );

    fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      .then(function (response) {
        if (response.ok) {
          showFormMessage('success');
          form.reset();
        } else {
          showFormMessage('error');
        }
      })
      .catch(function () {
        showFormMessage('error');
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.classList.remove('hidden');
        if (submitLoading) submitLoading.classList.add('hidden');
      });
  }

  function markFieldError(field, messageKey) {
    if (!field) return;
    var formControl = field.closest('.form-control');
    if (!formControl) return;
    var errorEl = formControl.querySelector('.field-error');
    if (errorEl) {
      errorEl.textContent = t(messageKey);
      errorEl.classList.remove('hidden');
    }
    var tag = field.tagName.toLowerCase();
    if (tag === 'input') field.classList.add('input-error');
    else if (tag === 'select') field.classList.add('select-error');
    else if (tag === 'textarea') field.classList.add('textarea-error');
  }

  function showFormMessage(type) {
    var successEl = document.getElementById('form-success');
    var errorEl = document.getElementById('form-error');
    if (type === 'success' && successEl) {
      successEl.classList.remove('hidden');
      setTimeout(function () { successEl.classList.add('hidden'); }, 5000);
    }
    if (type === 'error' && errorEl) {
      errorEl.classList.remove('hidden');
      setTimeout(function () { errorEl.classList.add('hidden'); }, 5000);
    }
  }

  // =============================================
  //  Smooth Scroll
  // =============================================
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeMobileMenu();
        }
      });
    });
  }

  // =============================================
  //  Escape key handler
  // =============================================
  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeCookieModal();
      closeLangDropdown();
    }
  }

  // =============================================
  //  Initialization
  // =============================================
  function init() {
    // Set copyright year
    var yearEls = document.querySelectorAll('[data-year]');
    yearEls.forEach(function (el) {
      el.setAttribute('data-i18n-params', JSON.stringify({ year: new Date().getFullYear() }));
    });

    // Expose handlers to global scope for inline onclick FIRST
    window.FDC = {
      switchLanguage: switchLanguage,
      toggleMobileMenu: toggleMobileMenu,
      closeMobileMenu: closeMobileMenu,
      acceptAllCookies: acceptAllCookies,
      rejectOptionalCookies: rejectOptionalCookies,
      openCookieModal: openCookieModal,
      closeCookieModal: closeCookieModal,
      saveCookiePreferences: saveCookiePreferences,
      acceptAllFromModal: acceptAllFromModal,
    };

    // Load translations (synchronous now - no fetch needed)
    loadTranslations(currentLang);

    // Cookie consent
    loadCookieConsent();

    // Smooth scroll
    setupSmoothScroll();

    // Escape key
    document.addEventListener('keydown', handleEscape);

    // Contact form
    var form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleFormSubmit);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
