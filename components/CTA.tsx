import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your way.</div>
      <h2 className="text-3xl font-bold">Join our community of learners and start your personalized learning journey today!</h2>
      <p className="text-lg text-muted-foreground">Sign up now to access personalized learning companions, track your progress, and connect with a community of learners.</p>
      <Image src="images/cta.svg" alt="CTA Image" width={362} height={232} />
      {/* <button className="btn-primary mt-4">
        Sign Up Now
      </button> */}
      <Link href="/companions/new" className="btn-primary mt-4">
      <Image src="/icons/plus.svg" alt="CTA Image" width={12} height={12} />
        <p>Build a New Companion</p>
      </Link>
    </section>
  )
}

export default CTA