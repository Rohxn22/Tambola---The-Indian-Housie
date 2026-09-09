import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <img
          src="/tambola-logo.png"
          alt="Tambola Logo"
          className="h-12 w-auto sm:h-14"
        />
      </Link>

      <nav className="flex shrink-0 items-center gap-1 text-sm font-semibold text-muted-foreground sm:gap-2">
        <a
          href="/#how-to-play"
          className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-primary sm:px-4"
        >
          How to Play
        </a>
        <Link
          to="/create"
          className="rounded-full px-3 py-2 transition-colors hover:bg-accent hover:text-primary sm:px-4"
        >
          Create Room
        </Link>
        <Link
          to="/join"
          className="rounded-full bg-primary px-3 py-2 text-primary-foreground transition-colors hover:bg-primary/90 sm:px-4"
        >
          Join Room
        </Link>
      </nav>
    </header>
  );
}
