export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 text-sm">
        <p>&copy; {year} Oluwamuyiwa Praise Oluwakanyinsayomi. All rights reserved.</p>
      </div>
    </footer>
  )
}
