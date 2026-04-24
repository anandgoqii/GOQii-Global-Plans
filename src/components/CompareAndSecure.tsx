import { Check, X } from 'lucide-react';

export function ComparePlans() {
  return (
    <section className="py-24 bg-neutral-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">Compare Plans</h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-neutral-50/50 border-b border-neutral-200 text-neutral-500 uppercase text-xs tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-5 font-medium min-w-[200px]">Feature</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[120px]">Chronic</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[120px]">Lifestyle</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[120px]">Mind</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-5 font-medium text-neutral-900">Coach Support</td>
                <td className="px-6 py-5 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                <td className="px-6 py-5 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                <td className="px-6 py-5 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-5 font-medium text-neutral-900">Doctor Access</td>
                <td className="px-6 py-5 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                <td className="px-6 py-5 text-center"><X className="w-5 h-5 mx-auto text-neutral-300" /></td>
                <td className="px-6 py-5 text-center"><X className="w-5 h-5 mx-auto text-neutral-300" /></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-5 font-medium text-neutral-900">Fitness Plans</td>
                <td className="px-6 py-5 text-center"><X className="w-5 h-5 mx-auto text-neutral-300" /></td>
                <td className="px-6 py-5 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                <td className="px-6 py-5 text-center"><X className="w-5 h-5 mx-auto text-neutral-300" /></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-5 font-medium text-neutral-900">Meditation</td>
                <td className="px-6 py-5 text-center"><X className="w-5 h-5 mx-auto text-neutral-300" /></td>
                <td className="px-6 py-5 text-center"><X className="w-5 h-5 mx-auto text-neutral-300" /></td>
                <td className="px-6 py-5 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors bg-neutral-50/30">
                <td className="px-6 py-5 font-medium text-neutral-900">Device Support</td>
                <td className="px-6 py-5 text-center font-bold text-neutral-700">BYOD</td>
                <td className="px-6 py-5 text-center font-bold text-neutral-700">BYOD</td>
                <td className="px-6 py-5 text-center font-bold text-neutral-700">BYOD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function TrustedSecure() {
  const points = [
    'ISO 27001 Certified',
    'HIPAA Aligned',
    'GDPR Ready',
    'PDPL Compliant',
    'Data Residency Enabled',
    'RBAC Access Control'
  ];

  return (
    <section className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-8">
          Trusted and Secure
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-neutral-600 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              {point}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-neutral-400">
          Your data is protected based on your region.
        </p>
      </div>
    </section>
  );
}
