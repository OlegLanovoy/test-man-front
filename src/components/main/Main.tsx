import { PostsWrapper } from "./PostWrapper";

// Sample data for posts
const posts = [
  {
    id: "1",
    title: "The Future of Web Development: What's Next After React?",
    excerpt:
      "Explore emerging technologies and frameworks that might shape the future of web development beyond React's ecosystem.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-05-15T10:30:00Z",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Technology",
    tags: ["React", "Web Development", "JavaScript"],
    readTime: "5 min read",
    likes: 124,
    comments: 32,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Advanced Techniques for Modern UIs",
    excerpt:
      "Learn how to leverage Tailwind CSS's utility-first approach to build complex user interfaces with minimal custom CSS.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-05-10T14:45:00Z",
    author: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Design",
    tags: ["CSS", "Tailwind", "UI Design"],
    readTime: "8 min read",
    likes: 89,
    comments: 17,
  },
  {
    id: "3",
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt:
      "Discover best practices and techniques for creating web applications that are accessible to users with disabilities.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-05-05T09:15:00Z",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Accessibility",
    tags: ["a11y", "Web Development", "UX"],
    readTime: "10 min read",
    likes: 156,
    comments: 28,
  },
  {
    id: "4",
    title: "The Rise of AI in Content Creation: Opportunities and Challenges",
    excerpt:
      "Explore how artificial intelligence is transforming content creation and what it means for creators and consumers.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-04-28T16:20:00Z",
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "AI",
    tags: ["Artificial Intelligence", "Content", "Technology"],
    readTime: "7 min read",
    likes: 210,
    comments: 45,
  },
  {
    id: "5",
    title: "Serverless Architecture: When to Use It and When to Avoid It",
    excerpt:
      "A practical guide to understanding when serverless architecture makes sense for your projects and when traditional servers might be better.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-04-22T11:40:00Z",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Backend",
    tags: ["Serverless", "Architecture", "Cloud"],
    readTime: "9 min read",
    likes: 78,
    comments: 23,
  },
  {
    id: "6",
    title: "State Management in 2023: Beyond Redux",
    excerpt:
      "Discover modern approaches to state management in React applications that go beyond traditional Redux patterns.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-04-18T13:25:00Z",
    author: {
      name: "Olivia Taylor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Frontend",
    tags: ["React", "State Management", "JavaScript"],
    readTime: "6 min read",
    likes: 132,
    comments: 37,
  },
  {
    id: "7",
    title: "The Psychology of User Experience: Designing for Human Behavior",
    excerpt:
      "Learn how understanding human psychology can help you create more intuitive and engaging user experiences.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-04-12T15:50:00Z",
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "UX",
    tags: ["Psychology", "Design", "User Experience"],
    readTime: "11 min read",
    likes: 167,
    comments: 29,
  },
  {
    id: "8",
    title: "Microservices vs. Monoliths: Making the Right Choice",
    excerpt:
      "A balanced comparison of microservices and monolithic architectures to help you decide which is best for your next project.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-04-05T10:10:00Z",
    author: {
      name: "Sophia Lee",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Architecture",
    tags: ["Microservices", "Monolith", "System Design"],
    readTime: "8 min read",
    likes: 94,
    comments: 19,
  },
  {
    id: "9",
    title: "Web Performance Optimization: Techniques for Faster Websites",
    excerpt:
      "Practical strategies and techniques to improve the loading speed and overall performance of your websites.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-03-30T14:05:00Z",
    author: {
      name: "Daniel Martinez",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Performance",
    tags: ["Web Development", "Optimization", "Speed"],
    readTime: "7 min read",
    likes: 143,
    comments: 26,
  },
  {
    id: "10",
    title: "The Future of CSS: What's Coming in 2024 and Beyond",
    excerpt:
      "Explore upcoming CSS features and how they will change the way we style web applications in the near future.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "2023-03-25T09:35:00Z",
    author: {
      name: "Rachel Brown",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "CSS",
    tags: ["Web Development", "Design", "Frontend"],
    readTime: "6 min read",
    likes: 118,
    comments: 31,
  },
];

export default function MainPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Discover the latest insights, tutorials, and trends
        </p>
      </div>

      <PostsWrapper initialPosts={posts} />
    </main>
  );
}
