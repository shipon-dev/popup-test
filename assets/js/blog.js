const blogsData = [
  {
    id: 1,
    title: "The Physics of a Perfect Pour-Over",
    category: "BREWING GUIDES",
    excerpt:
      "Discover how water temperature, grind size, and flow rate interact to create a balanced and flavorful cup. We break down the science behind achieving the perfect extraction every time.",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
    date: "June 12, 2023",
    readTime: "5 min read",
    slug: "physics-perfect-pour-over.html",
  },
  {
    id: 2,
    title: "Tracing the Notes: A Journey to Yirgacheffe",
    category: "ORIGIN STORIES",
    excerpt:
      "We traveled to the birthplace of our Ethiopian single origin to meet the farmers and understand the unique terroir that gives our beans their distinctive floral and citrus notes.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "May 28, 2023",
    readTime: "8 min read",
    slug: "journey-to-yirgacheffe.html",
  },
  {
    id: 3,
    title: "The Art and Science of Roast Profiling",
    category: "ROASTING SCIENCE",
    excerpt:
      "How we develop unique roast profiles to highlight the best characteristics of each bean. Learn about the Maillard reaction, development time, and how we achieve consistent results.",
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=2070&auto=format&fit=crop",
    date: "April 15, 2023",
    readTime: "7 min read",
    slug: "art-science-roast-profiling.html",
  },
  {
    id: 4,
    title: "Developing Your Palate: A Cupping Guide",
    category: "TASTING NOTES",
    excerpt:
      "Learn how to taste coffee like a professional. We guide you through the process of cupping, identifying flavor notes, and understanding acidity, body, and aftertaste.",
    image:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=2069&auto=format&fit=crop",
    date: "March 22, 2023",
    readTime: "6 min read",
    slug: "developing-palate-cupping-guide.html",
  },
  {
    id: 5,
    title: "Cold Brew Chemistry: Extraction at Low Temperatures",
    category: "COLD BREW SCIENCE",
    excerpt:
      "Why does cold brew taste different? We explore the science of cold extraction, how it affects flavor compounds, and share our optimal brewing ratio and time recommendations.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1971&auto=format&fit=crop",
    date: "February 18, 2023",
    readTime: "9 min read",
    slug: "cold-brew-chemistry-extraction.html",
  },
  {
    id: 6,
    title: "Beyond Fair Trade: Our Regenerative Agriculture Initiative",
    category: "SUSTAINABILITY",
    excerpt:
      "How we're working with farmers to implement practices that restore soil health, increase biodiversity, and create more resilient coffee ecosystems for future generations.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
    date: "January 5, 2023",
    readTime: "10 min read",
    slug: "beyond-fair-trade-regenerative-agriculture.html",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  if (blogContainer) {
    blogsData.forEach((blog) => {
      blogContainer.innerHTML += `
        <div id="blog-${blog.id}" onclick="window.location.href='/blogs/${blog.slug}'" class="group rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div class="overflow-hidden rounded-t-xl">
                <a href="/blogs/${blog.slug}" class="block">
                    <img
                        src="${blog.image}"
                        alt="${blog.title}"
                        class="w-full h-60 object-cover transition-transform duration-300 ease-out group-hover:scale-110" />
                </a>
            </div>
            <div class="py-6 px-6">
                <span class="text-sm font-semibold brand-accent tracking-wider">${blog.category}</span>
                <h2 class="font-serif text-2xl brand-dark mt-2">
                    <a href="${blog.slug}" class="transition-fast hover:brand-accent">
                        ${blog.title}
                    </a>
                </h2>
                <p class="brand-gray mt-3 leading-relaxed text-sm">
                    Discover how water temperature, grind size, and flow rate
                    interact to create a balanced and flavorful cup. We break down
                    the science behind achieving the perfect extraction every time.
                </p>
                <div class="flex items-center mt-4 text-sm brand-gray">
                    <span>June 12, 2023</span>
                    <span class="mx-2">•</span>
                    <span>5 min read</span>
                </div>
                <a href="${blog.slug}" class="inline-block mt-4 font-semibold brand-dark transition-fast hover:brand-accent">
                    Read More &rarr;
                </a>
            </div>
        </div>
      `;
    });
  }
});
