const centres = [
  {
    title: 'Da Lat Health House',
    image:
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Hanoi',
    image:
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Da Lat City',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'HCM City',
    image:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function VietnamCentres() {
  return (
    <section className="fixed bottom-0 left-0 z-0 h-[400px] w-full bg-white">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6">
        <p className="text-center font-playfair text-2xl font-semibold uppercase tracking-[0.2em] text-gray-900 sm:text-3xl">
          Our Other Vietnam Centres
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centres.map((centre) => (
            <article
              key={centre.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={centre.image}
                  alt={centre.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-playfair text-lg font-semibold text-gray-900">
                  {centre.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
