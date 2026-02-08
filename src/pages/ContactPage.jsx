import PageTransition from '../components/PageTransition';

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-14 sm:px-8">
        <h1 className="text-3xl font-semibold text-gray-800">Contact</h1>
        <p className="mt-5 leading-relaxed text-gray-500">
          Need a private consultation? Reach out at <span className="text-gray-700">concierge@aureon.shop</span> and our team
          will respond within one business day.
        </p>
      </section>
    </PageTransition>
  );
}
