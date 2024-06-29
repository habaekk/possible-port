export default function ProjectsLayout({ children }) {
    return (
      <div>
        <header className="bg-gray-800 p-4 text-white">
          <h1 className="text-2xl">Project Details</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  