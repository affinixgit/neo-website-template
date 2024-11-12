

export function getPaginatedPosts(page, limit) {
    const blogPosts = [
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "Top 10 Web Design Tips",
            excerpt: "Learn how to create stunning and user-friendly websites.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "web-design-tips",
            tags: ["Web Design", "UX", "Tips"],
        },
        {
            title: "Maximizing ROI with Social Media",
            excerpt: "Strategies to boost your return on investment with social media.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "social-media-roi",
            tags: ["Social Media", "ROI", "Strategy"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        }, {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "Top 10 Web Design Tips",
            excerpt: "Learn how to create stunning and user-friendly websites.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "web-design-tips",
            tags: ["Web Design", "UX", "Tips"],
        },
        {
            title: "Maximizing ROI with Social Media",
            excerpt: "Strategies to boost your return on investment with social media.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "social-media-roi",
            tags: ["Social Media", "ROI", "Strategy"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        {
            title: "The Importance of SEO in 2024",
            excerpt: "Discover why SEO is crucial for your business success.",
            image: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
            slug: "importance-of-seo-2024",
            tags: ["SEO", "Marketing", "Trends"],
        },
        // Add more posts if needed
    ];
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedPosts = blogPosts.slice(start, end);

    return {
        posts: paginatedPosts,
        totalPages: Math.ceil(blogPosts.length / limit),
    };
}
