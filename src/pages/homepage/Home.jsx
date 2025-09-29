
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Featurs from './components/Featurs';
import Dash from './components/Dash';
import Offer from './components/Offer';
import Faq from './components/Faq';
import HomeContext from '../../context/HomeContext';


const faqData = [
    {
        question: "Comment puis-je créer un compte ?",
        answer: "Cliquez sur le bouton 'Créer un compte' en haut à droite et suivez les instructions pour renseigner vos informations personnelles.\nVous recevrez un email de confirmation pour activer votre compte et accéder à toutes les fonctionnalités."
    },
    {
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), PayPal et virement bancaire.\nToutes les transactions sont sécurisées et vous pouvez choisir votre mode préféré lors de la validation de votre abonnement ou de vos achats."
    },
    {
        question: "Puis-je utiliser l'application sur mobile ?",
        answer: "Oui, notre application est disponible sur Android et iOS. Téléchargez-la gratuitement depuis le store de votre appareil.\nL’interface mobile est optimisée pour une utilisation fluide, que vous soyez marchand ou livreur."
    },
    {
        question: "Comment contacter le support client ?",
        answer: "Vous pouvez nous contacter via le chat intégré à l’application, par email ou par téléphone.\nNotre équipe est disponible 7j/7 pour répondre à vos questions et vous accompagner dans l’utilisation de la plateforme."
    },
    {
        question: "Puis-je tester gratuitement avant de m’engager ?",
        answer: "Oui, vous pouvez essayer gratuitement toutes les fonctionnalités pendant 14 jours, sans engagement ni carte bancaire.\nÀ la fin de la période d’essai, vous pourrez choisir la formule qui correspond le mieux à vos besoins."
    },
    {
        question: "Est-ce que mon équipe peut l’utiliser facilement ?",
        answer: "L’interface est conçue pour être intuitive et collaborative, chaque membre peut avoir son propre accès avec des droits personnalisés.\nDes tutoriels et une assistance sont disponibles pour faciliter la prise en main par toute votre équipe."
    },
    {
        question: "Puis-je suivre mes livreurs en temps réel ?",
        answer: "Oui, le suivi GPS intégré vous permet de visualiser la position de vos livreurs en temps réel sur le dashboard.\nVous pouvez également recevoir des notifications sur l’état des livraisons et optimiser vos tournées."
    }
];

const HomePage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [abonment, setAbonment] = useState({
        type: 'month',

        price: {
            international: {
                month: {
                    premium: '49€',
                    pro: '29€',
                    basic: '15€'
                },
                year: {
                    premium: '590€',
                    pro: '290€',
                    basic: '150€'
                },
            }
        },

        national: {
            month: {
                premium: '120.000Ar',
                pro: '60.000Ar',
                base: '30.000Ar'
            },
            year: {
                premium: '650.000Ar',
                pro: '450.000Ar',
                base: '300.000Ar'
            }
        },

        list: [
            {
                description: "Idéale pour les petits marchands.",
                items: {
                    offer: 'Basic',
                    data: [
                        "Gestion simple de stock (ajout, mise à jour, suppression de produits)",
                        "Alertes automatiques de rupture (pour éviter les manques)",
                        "Tableau de bord basique (ventes, produits disponibles)",
                        "Accès multi-utilisateur limité (1 compte admin + 1 utilisateur)",
                        "Historique des entrées / sorties de stock",
                        "Support email (en jours ouvrés)",
                    ]
                }
            },
            {
                description: "Parfaite pour les PME avec gestion de livraison.",
                items: {
                    offer: 'Pro',
                    data: [
                        "Toutes les fonctionnalités de l’offre Base.",
                        "Suivi logistique en temps réel (GPS des livreurs).",
                        "Génération automatique des factures et archivage.",
                        "Notifications intelligentes (email / SMS / WhatsApp).",
                        "Accès multi-utilisateurs élargi (jusqu’à 5 utilisateurs).",
                        "Tableau de bord avancé avec filtres par période et produit.",
                    ]
                }
            }
            ,
            {
                description: "Conçue pour les grandes structures.",
                items: {
                    offer: 'Premium',
                    data: [
                        'Toutes les fonctionnalités de l’offre Pro.',
                        'Intégration CRM, e-commerce et outils comptables.',
                        'Automatisations avancées avec n8n(zéro tâche manuelle).',
                        'Rapports automatiques(quotidiens / hebdomadaires par email ou Google Sheets).',
                        'Accès multi-utilisateurs illimité avec gestion des rôles.',
                        'Support prioritaire(chat en direct + assistance 24 / 7).'
                    ]
                }
            }
        ]

    });

    const handleAbonmentChange = (type) => {
        setAbonment((prevState) => {
            return { ...prevState, type: prevState.type === 'month' ? 'year' : 'month' };
        })
    };

    const priceDisplay = abonment.price.international[abonment.type];

    return (
        <HomeContext.Provider value={{ abonment, setAbonment, faqData, activeFaq, setActiveFaq, handleAbonmentChange, priceDisplay }}>
            <div id='homepage'>
                <Navbar />
                <Hero />
                <Solutions />
                <Featurs />
                <Dash />
                <Offer/>
                <Faq />
            </div>
        </HomeContext.Provider>
    )
}

export default HomePage