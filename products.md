app/
└── products/
    ├── layout.js            // Shared layout for product pages
    ├── [id]/
    │   ├── page.js          // Product details page
    │   └── tags/
    │       └── page.js      // Tags for the product
    ├── tags/
    │   └── [tag]/           // Dynamic route for tags
    │       └── page.js      // Products filtered by tag
    └── search/
        └── page.js          // Search results page
