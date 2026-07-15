export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashenafi Zewdie",
    url: "https://ashenafi-zewdie.vercel.app",
    image: "https://ashenafi-zewdie.vercel.app/profile.jpg",
    jobTitle: "Computer Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Addis Ababa University",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Ethiopia",
    },
    sameAs: [
      "https://github.com/AshenafiZ"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person),
      }}
    />
  );
}