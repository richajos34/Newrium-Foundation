export default function Pillars() {
    return (
      <section className="space-y-6 mx-30">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Pillars</h1>
          <p className="text-sm text-gray-500">
            A starter page — fill in content, components, and any calls-to-action here.
          </p>
        </header>

        <a href="/investments">
              <button 
                className="items-center space-x-2 text-white font-medium px-8 py-3 rounded-xl
                bg-(--teal) hover:bg-(--slate) active:scale-96 transition-all duration-200 active:duration-75">
                <span>Investments Page</span>
              </button>
        </a>
  
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border p-4">
            <h2 className="text-xl font-medium">Overview</h2>
            <p className="mt-2 text-sm">
              What self-actualization means within Newrium; guiding principles; key outcomes.
            </p>
          </article>
  
          <article className="rounded-2xl border p-4">
            <h2 className="text-xl font-medium">Next Steps</h2>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Add content sections/components.</li>
              <li>Hook up any forms or links.</li>
              <li>Write basic tests if needed.</li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
  