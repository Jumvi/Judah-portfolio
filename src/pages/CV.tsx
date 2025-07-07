import Layout from "@/components/layout/Layout";

export default function CVPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Judah Mvi Mukanime</h1>
            <h2 className="text-2xl text-gray-600 mb-2">Coach et Développeur Fullstack</h2>
          </header>
          
          {/* Profile */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-1">Profil Professionnel</h3>
            <p className="text-gray-700 leading-relaxed">
              Coach et Développeur Fullstack, je suis un créateur d'applications innovantes 
              doté d'un fort focus sur l'UX/UI design et la gestion agile de projets. 
              Ma polyvalence me permet de maîtriser les technologies front-end et back-end, 
              avec une capacité d'apprentissage rapide de nouveaux langages et frameworks 
              en seulement 1 à 2 semaines, grâce à une approche basée sur l'apprentissage 
              par projet. Mon expérience en coaching me permet de transmettre efficacement 
              des compétences techniques tout en accompagnant les équipes vers l'excellence. 
              Je suis reconnu pour mon travail en équipe, mon respect de la hiérarchie, et ma créativité.
            </p>
          </section>
          
          {/* Technical Skills */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-1">Compétences Techniques</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Languages &amp; Frameworks Frontend:</h4>
                <p className="text-gray-700">React, Gatsby, Next.js, Angular, Flutter, React Native, Vite, TailwindCSS, React, AdonisJs.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Languages &amp; Frameworks Backend:</h4>
                <p className="text-gray-700">Node.js, Express.js, LoopBack, AdonisJS 6, TypeScript, JavaScript, Python.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Bases de données &amp; ORM:</h4>
                <p className="text-gray-700">MongoDB, PostgreSQL, SQL, Prisma ORM, Sequelize ORM.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">DevOps &amp; Outils:</h4>
                <p className="text-gray-700">Docker, Pipelines CI/CD, GitHub, Swagger/OpenAPI, Cloudinary, Nodemailer, bcrypt.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Intelligence Artificielle &amp; Recherche:</h4>
                <p className="text-gray-700">Intégration OpenAI API (traitement du langage naturel), Typesense (recherche sémantique), ainsi qu'une utilisation optimisée des outils IA pour une bonne production.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Gestion de Projet:</h4>
                <p className="text-gray-700">Gestion agile de projets, Principes fondamentaux du génie logiciel, Conception et gestion des bases de données.</p>
              </div>
            </div>
          </section>
          
          {/* Professional Experience */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-1">Expériences Professionnelles</h3>
            
            <div className="mb-8">
              <h4 className="font-medium">Coach et Développeur Fullstack | Kadea academy, Kinshasa, RDC</h4>
              <p className="text-gray-500 italic mb-2">Depuis juin 2024</p>
              <p className="text-gray-700 mb-4">
                Encadrement pédagogique : Animation d'ateliers interactifs basés sur la pédagogie active, avec démonstrations 
                pratiques et suivi personnalisé des apprenants. Accompagnement de projets couvrant une large gamme de technologies, 
                renforçant ma capacité d'adaptation à de nouveaux outils et environnements techniques.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium">Développeur Fullstack | Kadea academy, Kinshasa, RDC</h4>
              <p className="text-gray-500 italic mb-2">De janvier 2024 à juin 2024</p>
              <p className="text-gray-700 mb-2">
                Développement de Kadea Online : Participation clé au développement de cette plateforme de cours en ligne 
                accessible à des milliers d'utilisateurs. Maîtrise des technologies suivantes : Gatsby (React) pour le 
                frontend optimisé SEO, LoopBack et MongoDB pour la gestion des API et données, et Docker, pipelines CI/CD, 
                GitHub pour les outils DevOps.
              </p>
              <p className="text-gray-700">
                Projet Elanga (Chef-d'œuvre défendu pour ma certification à la Kadea academy) : Conception et réalisation 
                d'une plateforme d'investissements participatifs pour projets agricoles et agroalimentaires. Développement 
                du frontend avec React, et du backend avec Node.js (Express.js) incluant validation côté serveur, 
                authentification à double niveau (OTP), et gestion de bases de données avec PostgreSQL et Prisma.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">Développeur Fullstack (Amélioration Continue &amp; Projets Personnels) | Kinshasa, RDC</h4>
              <p className="text-gray-500 italic mb-2">Depuis juin 2023</p>
              <p className="text-gray-700 mb-2">
                Polyvalence Technique : Développement de plusieurs projets d'apprentissage sur des technologies variées 
                telles que React, Angular, Next.js, Python, Flutter, et React Native.
              </p>
              <p className="text-gray-700">
                Résolution de problème : Renforcement de la compréhension des principes fondamentaux des logiciels et 
                frameworks, améliorant ma capacité à concevoir des solutions efficaces et à m'adapter rapidement à des 
                environnements divers. Ces projets sont accessibles sur mon profil GitHub (Jumvi).
              </p>
            </div>
          </section>
          
          {/* Major GitHub Projects */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-1">Projets GitHub Majeurs</h3>
            
            <div className="mb-6">
              <h4 className="font-medium">Rapidosapp - Plateforme E-commerce et Livraison</h4>
              <p className="text-gray-700 mb-1">Plateforme e-commerce complète avec gestion de commandes, paiements, suivi de livraisons en temps réel et portefeuille numérique.</p>
              <p className="text-gray-700 mb-1"><span className="font-medium">Technologies Clés:</span> AdonisJS 6, TypeScript, PostgreSQL, JWT, OTP SMS/WhatsApp, Cloudinary, Swagger/OpenAPI.</p>
              <p className="text-gray-700"><span className="font-medium">Points Forts:</span> API REST documentée, authentification multi-canal, gestion des médias optimisée, architecture scalable.</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium">Course Assistant API - Assistant Pédagogique IA</h4>
              <p className="text-gray-700 mb-1">API d'assistant pédagogique intelligent utilisant l'IA pour améliorer l'apprentissage via des recommandations personnalisées.</p>
              <p className="text-gray-700 mb-1"><span className="font-medium">Technologies Clés:</span> AdonisJS, TypeScript, PostgreSQL, OpenAI API (traitement du langage naturel), Typesense (recherche sémantique).</p>
              <p className="text-gray-700"><span className="font-medium">Points Forts:</span> Intégration avancée d'APIs d'IA, moteur de recherche sémantique performant, algorithmes de recommandation, architecture microservices.</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium">ServerEl - Plateforme de Financement Participatif (Backend)</h4>
              <p className="text-gray-700 mb-1">Backend robuste pour une plateforme de financement participatif sécurisée.</p>
              <p className="text-gray-700 mb-1"><span className="font-medium">Technologies Clés:</span> Node.js, Express.js, Prisma ORM, PostgreSQL, JWT, bcrypt, Nodemailer.</p>
              <p className="text-gray-700"><span className="font-medium">Points Forts:</span> ORM Prisma, système de notifications automatisées, validation et sécurisation des données sensibles, intégration de systèmes de paiement.</p>
            </div>
            
            <div>
              <h4 className="font-medium">Elanga - Plateforme de Financement Participatif Agroalimentaire (Frontend)</h4>
              <p className="text-gray-700 mb-1">Interface utilisateur moderne et intuitive pour une plateforme de crowdfunding agricole, incluant un dashboard administrateur avec statistiques avancées.</p>
              <p className="text-gray-700 mb-1"><span className="font-medium">Technologies Clés:</span> React 18, Vite, TailwindCSS, Redux Toolkit, React Router DOM, React Hook Form.</p>
              <p className="text-gray-700"><span className="font-medium">Points Forts:</span> Architecture modulaire, gestion d'état centralisée et persistante, routes protégées avec contrôle d'accès par rôle, upload de fichiers, filtrage et recherche en temps réel.</p>
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-1">Diplômes et Formations</h3>
            
            <div className="mb-4">
              <h4 className="font-medium">Certification F2F CAPAC'IT RDC | Simplon Kinshasa, RDC</h4>
              <p className="text-gray-500 italic mb-1">Octobre 2024</p>
              <p className="text-gray-700">Formation de formateur axée sur la pédagogie active, développant la maîtrise du déroulement de formations interactives et la conception de situations professionnelles concrètes.</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium">Certification Développeur Full Stack | Kadea academy Kinshasa, RDC</h4>
              <p className="text-gray-500 italic mb-1">De mai 2023 à mai 2024</p>
              <p className="text-gray-700">Formation intensive d'un an (méthode Simplon, axée projets) en développement web et mobile (front-end/back-end), gestion de projets, et UX/UI design. Préparation aux défis professionnels et développement de soft skills clés : communication, gestion du temps, et résilience.</p>
            </div>
            
            <div>
              <h4 className="font-medium">Licence en Génie Informatique | Université de Kinshasa, RDC</h4>
              <p className="text-gray-500 italic mb-1">D'octobre 2016 à juillet 2021</p>
              <p className="text-gray-700">Acquisition de compétences fondamentales en conception et gestion des bases de données, génie logiciel, et optimisation de solutions.</p>
            </div>
          </section>
          
          {/* Languages */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-1">Langues</h3>
            <ul className="list-disc pl-5">
              <li className="text-gray-700">Français</li>
              <li className="text-gray-700">Anglais (B1 : Vocabulaire du quotidien)</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}