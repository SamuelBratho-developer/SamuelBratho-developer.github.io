const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samuel Bratho",
    "jobTitle": "Desenvolvedor Fullstack",
    "description": "Desenvolvedor Fullstack especializado em React, Python e Design UI/UX com mais de 3 anos de experiência",
    "url": "https://171a5ebe-19e7-47e3-8aa7-c6b161942c37.lovableproject.com",
    "sameAs": [
      "https://github.com/SamuelBratho",
      "https://instagram.com/samuelbrathoo"
    ],
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "Python",
      "Node.js",
      "PHP",
      "UI/UX Design",
      "Figma",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desenvolvedor Fullstack",
      "occupationLocation": {
        "@type": "Country",
        "name": "Brasil"
      },
      "skills": [
        "React Development",
        "Python Programming", 
        "TypeScript",
        "UI/UX Design",
        "Web Development",
        "Database Design",
        "API Development"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "devsamuelbratho@gmail.com",
      "contactType": "professional"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;