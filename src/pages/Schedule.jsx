import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { CheckCircle2, ArrowRight, ArrowLeft, Heart } from 'lucide-react';

const subjects = [
  { value: 'science', label: 'Science', emoji: '🔬' },
  { value: 'technology', label: 'Technology', emoji: '💻' },
  { value: 'engineering', label: 'Engineering', emoji: '⚙️' },
  { value: 'mathematics', label: 'Mathematics', emoji: '📐' },
];

const ageGroups = [
  { value: '6-10', label: 'Ages 6–10' },
  { value: '11-14', label: 'Ages 11–14' },
  { value: '15-18', label: 'Ages 15–18' },
  { value: 'adult', label: 'Adult Learner' },
];

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const times = [
  { value: 'morning', label: 'Morning (9am–12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm–5pm)' },
  { value: 'evening', label: 'Evening (5pm–8pm)' },
];

export default function Schedule() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    student_name: '',
    email: '',
    age_group: '',
    subject: '',
    preferred_day: '',
    preferred_time: '',
    feeling_overwhelmed: false,
    additional_notes: '',
  });

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    // In a static site, we just show the success state.
    // To wire up a real backend, replace this with a fetch/POST to your API or a service like Formspree.
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setForm({
      student_name: '',
      email: '',
      age_group: '',
      subject: '',
      preferred_day: '',
      preferred_time: '',
      feeling_overwhelmed: false,
      additional_notes: '',
    });
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-heading font-semibold text-3xl md:text-4xl mb-4">You're all set!</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We've received your request. One of our tutors will reach out to you within 24 hours
            to schedule your first session. Remember — there's no rush, no pressure.
          </p>
          <Button onClick={handleReset} variant="outline" className="rounded-full px-6">
            Schedule Another Session
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">
            Schedule Tutoring
          </p>
          <h1 className="font-heading font-semibold text-3xl md:text-4xl leading-[1.15] tracking-tight mb-4">
            Let's find your perfect fit.
          </h1>
          <p className="text-muted-foreground">No cost. No commitment. No pressure.</p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                s <= step ? 'bg-primary w-12' : 'bg-border w-8'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label className="text-base">Your name</Label>
                <Input
                  placeholder="Full name"
                  value={form.student_name}
                  onChange={(e) => updateField('student_name', e.target.value)}
                  className="h-14 rounded-xl text-base"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-base">Email address</Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="h-14 rounded-xl text-base"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base">Age group</Label>
                <div className="grid grid-cols-2 gap-3">
                  {ageGroups.map((ag) => (
                    <button
                      key={ag.value}
                      onClick={() => updateField('age_group', ag.value)}
                      className={`p-4 rounded-xl border text-left transition-all duration-500 ${
                        form.age_group === ag.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="font-heading font-medium text-sm">{ag.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <Button
                onClick={() => setStep(2)}
                disabled={!form.student_name || !form.email}
                className="rounded-full w-full h-14 text-base transition-all duration-500"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <Label className="text-base">Choose a subject</Label>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => updateField('subject', s.value)}
                      className={`p-5 rounded-xl border text-left transition-all duration-500 ${
                        form.subject === s.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{s.emoji}</span>
                      <span className="font-heading font-medium">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-base">Preferred day</Label>
                <div className="flex flex-wrap gap-2">
                  {days.map((d) => (
                    <button
                      key={d}
                      onClick={() => updateField('preferred_day', d)}
                      className={`px-4 py-2.5 rounded-full border text-sm capitalize transition-all duration-500 ${
                        form.preferred_day === d
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-base">Preferred time</Label>
                <div className="grid grid-cols-3 gap-3">
                  {times.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => updateField('preferred_time', t.value)}
                      className={`p-3 rounded-xl border text-center text-sm transition-all duration-500 ${
                        form.preferred_time === t.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="rounded-full h-14 px-6">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!form.subject}
                  className="rounded-full flex-1 h-14 text-base transition-all duration-500"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-accent/10 rounded-2xl p-6 flex items-start gap-4">
                <div className="mt-1">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-base font-heading font-medium">No-Pressure Mode</Label>
                    <Switch
                      checked={form.feeling_overwhelmed}
                      onCheckedChange={(val) => updateField('feeling_overwhelmed', val)}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Feeling overwhelmed today? Toggle this on and we'll match you with a tutor
                    trained in low-stress teaching techniques. No judgment, ever.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-base">Anything else we should know?</Label>
                <Textarea
                  placeholder="Learning goals, accommodations, or just say hi..."
                  value={form.additional_notes}
                  onChange={(e) => updateField('additional_notes', e.target.value)}
                  className="min-h-[120px] rounded-xl text-base"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="rounded-full h-14 px-6">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="rounded-full flex-1 h-14 text-base transition-all duration-500"
                >
                  Schedule My Session
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
