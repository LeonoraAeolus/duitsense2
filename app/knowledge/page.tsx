'use client';

import { useState } from 'react';
import { Sparkles, ChevronRight, BookOpen, FileText, ShieldAlert, Landmark } from 'lucide-react';

const categories = [
  { id: 'dsr', name: 'Understanding DSR', icon: FileText },
  { id: 'tax', name: '2026 Tax Guide', icon: Landmark },
  { id: 'epf', name: 'EPF 101', icon: BookOpen },
  { id: 'insurance', name: 'Insurance Gaps', icon: ShieldAlert },
];

const articles = {
  tax: [
    { id: 'housing-interest', title: '2026 Housing Interest Relief' },
    { id: 'lifestyle', title: 'Maximizing Lifestyle Reliefs' },
    { id: 'medical', title: 'Medical Expenses Deductions' },
  ]
};

export default function KnowledgeHub() {
  const [activeCategory, setActiveCategory] = useState('tax');
  const [activeArticle, setActiveArticle] = useState('housing-interest');

  return (
    <div className="max-w-6xl mx-auto p-8 h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Knowledge Hub</h1>
        <p className="text-slate-500">Bite-sized financial wisdom to help you make better decisions.</p>
      </div>

      <div className="flex-1 flex gap-8 min-h-0">
        {/* Left Column: Topics */}
        <div className="w-64 shrink-0 flex flex-col gap-6 overflow-y-auto pr-4">
          {categories.map(cat => (
            <div key={cat.id}>
              <button 
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center w-full text-left font-semibold text-sm mb-3 ${activeCategory === cat.id ? 'text-[#2962FF]' : 'text-slate-700 hover:text-slate-900'}`}
              >
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.name}
              </button>
              
              {activeCategory === cat.id && cat.id === 'tax' && (
                <div className="pl-6 space-y-2 border-l-2 border-slate-100 ml-2">
                  {articles.tax.map(article => (
                    <button
                      key={article.id}
                      onClick={() => setActiveArticle(article.id)}
                      className={`block text-sm w-full text-left py-1 ${activeArticle === article.id ? 'text-[#2962FF] font-medium' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      {article.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Content Reader */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            {/* Breadcrumbs */}
            <div className="flex items-center text-xs font-medium text-slate-500 mb-4">
              <span>Learning</span>
              <ChevronRight className="w-3 h-3 mx-1" />
              <span>Tax Reliefs</span>
              <ChevronRight className="w-3 h-3 mx-1" />
              <span className="text-slate-900">2026 Housing Interest</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">2026 Housing Interest Relief</h2>
          </div>

          <div className="p-8 overflow-y-auto">
            {/* AI Summary Box */}
            <div className="bg-gradient-to-br from-[#2962FF]/5 to-[#00C853]/5 border border-[#2962FF]/20 rounded-xl p-5 mb-8">
              <div className="flex items-center text-[#2962FF] font-semibold text-sm mb-2">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Summary (30-second read)
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                For 2026, you can claim up to <strong>RM10,000</strong> in tax relief on housing loan interest for your first residential property. This applies for 3 consecutive years from the date the interest is first paid. For a RM600k property, this could effectively reduce your tax bill by roughly RM2,400 annually depending on your tax bracket.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-slate prose-sm max-w-none">
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Who is eligible?</h3>
              <p className="text-slate-700 mb-4">To qualify for this relief, you must meet the following criteria:</p>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6">
                <li>You are a Malaysian citizen or resident.</li>
                <li>The property is your first residential property.</li>
                <li>The sale and purchase agreement is signed between Jan 1, 2025, and Dec 31, 2027.</li>
                <li>The property is not used to generate rental income.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">How to claim?</h3>
              <p className="text-slate-700 mb-6">When filing your e-BE form, look for the &quot;Housing Loan Interest&quot; section under Reliefs. You will need to keep the annual interest statement from your bank as proof. The bank usually provides this statement by February each year.</p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Common Mistakes</h3>
              <p className="text-slate-700 mb-6">Many taxpayers forget that this relief is only valid for <strong>three consecutive years</strong>. If you start claiming in 2026, your last eligible year will be 2028. Do not continue claiming in 2029, as this will trigger an LHDN audit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
