import { PostsWrapper } from "./PostWrapper";

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

      <PostsWrapper />
    </main>
  );
}
