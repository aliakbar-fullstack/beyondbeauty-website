import { useMemo, useState } from 'react';
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SERVICE_CATEGORIES } from '@/data/services';
import { formatRupees } from '@/lib/format';
import { STUDIO, buildWhatsAppUrl } from '@/lib/studio';

const TIME_SLOTS = [
  'Morning (9:00 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 4:00 PM)',
  'Evening (4:00 PM – 8:00 PM)',
];

export default function Booking() {
  const options = useMemo(
    () =>
      SERVICE_CATEGORIES.map((category) => ({
        category,
        items: category.services.map((service) => ({
          key: `${category.id}::${service.name}`,
          label: `${service.name} (${formatRupees(service.price)})`,
          category: category.name,
          service: service.name,
          price: service.price,
        })),
      })),
    [],
  );

  const [clientName, setClientName] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const selected = options.flatMap((group) => group.items).find((item) => item.key === selectedKey);

  const handleBook = () => {
    if (!selected) {
      setError('Please choose a service to continue.');
      return;
    }
    setError('');

    const trimmedName = clientName.trim();
    const trimmedNotes = notes.trim();

    const messageParts = [
      `Hello DEZERT Makeover Studio,${trimmedName ? ` my name is ${trimmedName}.` : ''} I would like to book ${selected.service} (${selected.category}) starting from ${formatRupees(selected.price)}`,
      preferredDate ? `on ${preferredDate}` : null,
      timeSlot ? `during the ${timeSlot} slot` : null,
    ]
      .filter(Boolean)
      .join(' ');

    const notesLine = trimmedNotes ? `\nNotes: ${trimmedNotes}` : '';
    const message = `${messageParts}.${notesLine}\nPlease confirm the availability.`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'mt-2 w-full rounded-2xl border border-primary-300 bg-white px-4 py-3.5 font-sans text-base text-secondary-900 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300';

  return (
    <section id="booking" className="scroll-mt-20 relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-100/70 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent-200/80 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div>
            <span className="section-eyebrow">Book an Appointment</span>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Your Beauty Experience Starts Here</h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-[1.5] text-secondary-700 sm:text-lg">
              Choose the service you have in mind, add a preferred date and our team will confirm your slot on WhatsApp.
              Prefer to talk? Call us directly.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={buildWhatsAppUrl('Hello DEZERT Makeover Studio, I would like to book an appointment. Please let me know the available time slots.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Book on WhatsApp
              </a>
              <a href={`tel:${STUDIO.phoneTel}`} className="btn-outline-gold">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleBook();
            }}
            noValidate
            className="rounded-3xl border border-primary-300/60 bg-accent-50 p-7 shadow-lift sm:p-10"
          >
            <h3 className="font-serif text-3xl font-semibold text-secondary-900">Quick booking request</h3>
            <p className="mt-2 font-sans text-sm text-secondary-600">Your message is pre-filled with your choice.</p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="booking-name" className="block font-sans text-sm font-semibold text-secondary-800">
                  Your name <span className="font-normal text-secondary-600">(optional)</span>
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="booking-service" className="block font-sans text-sm font-semibold text-secondary-800">
                  Service
                </label>
                <select
                  id="booking-service"
                  value={selectedKey}
                  onChange={(e) => {
                    setSelectedKey(e.target.value);
                    setError('');
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'booking-error' : undefined}
                  className={inputClass}
                >
                  <option value="">Select a service</option>
                  {options.map((group) => (
                    <optgroup key={group.category.id} label={group.category.name}>
                      {group.items.map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-date" className="block font-sans text-sm font-semibold text-secondary-800">
                    Preferred date <span className="font-normal text-secondary-600"></span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={preferredDate}
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="booking-time" className="block font-sans text-sm font-semibold text-secondary-800">
                    Time slot <span className="font-normal text-secondary-600">(optional)</span>
                  </label>
                  <select
                    id="booking-time"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Any time</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="booking-notes" className="block font-sans text-sm font-semibold text-secondary-800">
                  Notes <span className="font-normal text-secondary-600">(optional)</span>
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests, venue details, or extra guests..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && (
                <p id="booking-error" role="alert" className="font-sans text-sm font-medium text-error-700">
                  {error}
                </p>
              )}

              <button type="submit" className="btn-gold w-full">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Continue on WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}