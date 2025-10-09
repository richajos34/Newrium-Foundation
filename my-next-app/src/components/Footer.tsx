export default function Footer(){
    const year = new Date().getFullYear()
    return (
      <footer className="border-t" style={{borderColor:'var(--border)'}}>
        <div className="container py-4 text-center text-[var(--muted)]">
          {/* 
            TODO: What information might we need for a footer?
            Implement a simple footer that can bring you back to the top of the screen of you scroll too far
           */}
        </div>
      </footer>
    )
  }