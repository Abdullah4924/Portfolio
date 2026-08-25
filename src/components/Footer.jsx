export default function Footer({ data }) {
  const years = new Date().getFullYear() - data.careerStartYear
  return (
    <footer>
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} {data.name}</span>
        <span>{years}+ years in cloud infrastructure</span>
      </div>
    </footer>
  )
}
