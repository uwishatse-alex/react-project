import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-14 sm:px-8">
        <h1 className="text-3xl font-semibold text-gray-800">About Aureon</h1>
        <p className="mt-5 leading-relaxed text-gray-500">
          Aureon is built on one idea: premium technology should feel calm, considered, and trustworthy. We curate electronics
          that balance engineering excellence with timeless aesthetics.
        </p>
      </section>
    </PageTransition>
  );
}
