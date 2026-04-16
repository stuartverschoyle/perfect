import { Award, User, BookOpen, Shield, Star } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

export default function EeatSection() {
  return (
    <SeoSection id="eeat" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/5 text-amber-600 dark:text-amber-400 shrink-0">
          <Award size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">E-E-A-T & Authority</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Experience, Expertise, Authoritativeness, and Trustworthiness -- the framework Google uses to evaluate content quality.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What is E-E-A-T?</h3>
          <InfoTooltip title="Understanding E-E-A-T">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Not a ranking factor:</strong> E-E-A-T is not a direct algorithm signal. It's a framework from Google's Search Quality Rater Guidelines that human evaluators use to judge content quality. However, the signals that demonstrate E-E-A-T are used algorithmically.</li>
              <li><strong className="text-slate-900 dark:text-white">YMYL pages:</strong> "Your Money or Your Life" pages (health, finance, legal, safety) are held to the highest E-E-A-T standards. A wrong answer could harm users.</li>
              <li><strong className="text-slate-900 dark:text-white">Added in 2022:</strong> The first "E" (Experience) was added to the guidelines in December 2022, reflecting Google's emphasis on first-hand experience over purely theoretical expertise.</li>
              <li><strong className="text-slate-900 dark:text-white">For copywriters:</strong> This affects how you write, who is credited as the author, what sources you cite, and how transparent you are about credentials.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              letter: 'E',
              name: 'Experience',
              icon: User,
              color: 'teal',
              desc: 'Has the content creator actually done the thing they\'re writing about? First-hand experience is a powerful quality signal.',
              actions: [
                'Include personal anecdotes and case studies',
                'Show original photos, not stock images',
                'Reference specific results and outcomes',
                'Write from a practitioner\'s perspective, not a summariser\'s',
              ],
            },
            {
              letter: 'E',
              name: 'Expertise',
              icon: BookOpen,
              color: 'sky',
              desc: 'Does the creator have the knowledge and skill in the field? Formal qualifications, training, or deep topical knowledge.',
              actions: [
                'Display author credentials and bios on every article',
                'Link to the author\'s relevant work and profiles',
                'Cover topics with technical depth, not surface-level summaries',
                'Use proper terminology and cite specific sources',
              ],
            },
            {
              letter: 'A',
              name: 'Authoritativeness',
              icon: Award,
              color: 'amber',
              desc: 'Is the creator or website a recognised authority on the topic? Are they cited by others as a go-to source?',
              actions: [
                'Build quality backlinks from reputable sites in your niche',
                'Get featured in industry publications and podcasts',
                'Create comprehensive, definitive guides on your core topics',
                'Earn mentions and citations from other experts',
              ],
            },
            {
              letter: 'T',
              name: 'Trustworthiness',
              icon: Shield,
              color: 'emerald',
              desc: 'Is the page and site honest, safe, and reliable? This is the most important E-E-A-T component according to Google.',
              actions: [
                'Display clear contact information and business address',
                'Use HTTPS and keep security certificates current',
                'Show transparent editorial and correction policies',
                'Include genuine reviews and avoid manipulated testimonials',
              ],
            },
          ].map((item) => (
            <div key={item.name} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-2xl font-bold text-${item.color}-400`}>{item.letter}</span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</h4>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{item.desc}</p>
              <ul className="space-y-1.5">
                {item.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                    <Star size={10} className={`text-${item.color}-400/50 shrink-0 mt-0.5`} />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <User size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Author Pages & Bylines</h3>
          <InfoTooltip title="Author Signals for SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Author pages:</strong> Create a dedicated page for each content author with their bio, credentials, social profiles, and list of published articles.</li>
              <li><strong className="text-slate-900 dark:text-white">Bylines:</strong> Every article should have a visible author name that links to their author page. Anonymous content ranks poorly for YMYL topics.</li>
              <li><strong className="text-slate-900 dark:text-white">Schema markup:</strong> Use Person schema on author pages and Article schema with author properties on all content.</li>
              <li><strong className="text-slate-900 dark:text-white">Google Knowledge Panel:</strong> Authors who are well-established may get their own Knowledge Panel. This requires consistent use of the same name across authoritative sites.</li>
              <li><strong className="text-slate-900 dark:text-white">Reviewer/editor:</strong> For YMYL content, having a qualified reviewer or medical/legal/financial editor adds an additional trust signal.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400/20 to-teal-400/20 flex items-center justify-center shrink-0 border border-slate-200/50 dark:border-white/10">
              <User size={24} className="text-white/40" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Stuart Verschoyle</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-400/10 text-sky-500 dark:text-sky-400 font-medium">SEO &amp; Content Strategy</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
                12 years in technical and editorial SEO for publishers and product teams. Focuses on structured content, Core Web Vitals, and E-E-A-T signals that survive algorithm and AI-overview changes.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>42 articles</span>
                <span>Published: 16 April 2026</span>
                <span>Reviewed by: Jordan Ellis, Lead Editor</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-teal-400/60 leading-relaxed">
            This author byline pattern demonstrates: visible credentials, publication date, article count (establishing expertise), and a named reviewer for additional trust.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Trust Signals Checklist</h3>
          <InfoTooltip title="Building Trust Signals" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">These elements collectively build trust:</strong> No single element is a magic bullet, but together they form a comprehensive trust profile that both users and search quality raters look for.</li>
              <li><strong className="text-slate-900 dark:text-white">Footer trust:</strong> Business address, phone number, company registration, and industry certifications in the footer appear on every page.</li>
              <li><strong className="text-slate-900 dark:text-white">Social proof:</strong> Real testimonials with names, companies, and photos. Link to third-party review platforms (Trustpilot, G2) where possible.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[
            'Clear "About Us" page with team photos',
            'Physical business address displayed',
            'Phone number and multiple contact methods',
            'HTTPS with valid SSL certificate',
            'Privacy policy and terms of service',
            'Editorial policy / correction policy',
            'Author bylines on all articles',
            'Dated content with "last updated" stamps',
            'Genuine testimonials with attribution',
            'Third-party review platform links',
            'Industry certifications and awards',
            'Transparent pricing (where applicable)',
            'Accessible customer support',
            'No deceptive ads or dark patterns',
            'Clear refund/cancellation policies',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-2 rounded bg-slate-100 dark:bg-slate-900/30 text-xs text-slate-500 dark:text-slate-400">
              <div className="w-4 h-4 rounded border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/5 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[8px] text-emerald-600 dark:text-emerald-400">&#10003;</span>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </SeoSection>
  );
}
