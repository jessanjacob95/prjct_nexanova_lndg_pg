import { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'CRM Setup',
    'Automation',
    'Customer Support Integration',
    'Website Design',
    'Sales Outreach Automation',
    'Call Automation',
    'Social Media Automation',
    'Appointment Setting'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Form data:', formData);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: ''
      });
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: ''
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#0d1428] to-[#1a1a3f] rounded-3xl shadow-2xl border border-cyan-500/30 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:rotate-90 duration-300 z-10"
        >
          <X className="w-5 h-5 text-gray-300" />
        </button>

        <div className="p-8 md:p-12">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-black mb-3">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Book Your Free Strategy Call
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Let's discuss how AI automation can transform your business
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/5 border ${
                      errors.fullName ? 'border-red-500' : 'border-cyan-500/30'
                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-cyan-500/30'
                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/5 border ${
                      errors.phone ? 'border-red-500' : 'border-cyan-500/30'
                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/5 border ${
                      errors.service ? 'border-red-500' : 'border-cyan-500/30'
                    } rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-[#1a1a3f]">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#1a1a3f]">
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-sm text-red-400">{errors.service}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-300 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-5 py-4 bg-white/5 border ${
                          errors.date ? 'border-red-500' : 'border-cyan-500/30'
                        } rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                      />
                      <CalendarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
                    </div>
                    {errors.date && (
                      <p className="mt-2 text-sm text-red-400">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-300 mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-white/5 border ${
                          errors.time ? 'border-red-500' : 'border-cyan-500/30'
                        } rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                      />
                      <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
                    </div>
                    {errors.time && (
                      <p className="mt-2 text-sm text-red-400">{errors.time}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-cyan-500/50 mt-8"
                >
                  Submit Booking Request
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <CalendarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Thank You!
              </h3>
              <p className="text-xl text-gray-300 mb-2">
                Your strategy call has been booked.
              </p>
              <p className="text-lg text-gray-400">
                We'll contact you soon to confirm the details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
