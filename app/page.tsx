'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ChevronDown, ChevronUp, TrendingUp, Shield, Landmark, PiggyBank } from 'lucide-react';

export default function Dashboard() {
  const [goldenMoves, setGoldenMoves] = useState(false);
  const [expandedLife, setExpandedLife] = useState(false);

  const readinessScore = goldenMoves ? 85 : 65;
  const verdictColor = goldenMoves ? 'text-[#00C853]' : 'text-[#FFD600]';
  const verdictBg = goldenMoves ? 'bg-[#00C853]/10' : 'bg-[#FFD600]/10';
  const verdictText = goldenMoves ? 'On Track' : 'Needs Attention';

  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Hi Amir, you are <span className={verdictColor}>{readinessScore}% Ready</span> for your RM600k Goal.
          </h1>
          <p className="text-slate-500 mt-2">Based on your latest profile update.</p>
        </div>
        <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
          <span className="text-sm font-medium text-slate-700">Apply Golden Moves</span>
          <button 
            onClick={() => setGoldenMoves(!goldenMoves)}
            className={`w-11 h-6 rounded-full transition-colors relative ${goldenMoves ? 'bg-[#2962FF]' : 'bg-slate-300'}`}
          >
            <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${goldenMoves ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Verdict Card */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F5F7FA" strokeWidth="8" />
              <motion.circle 
                cx="50" cy="50" r="40" fill="transparent" 
                stroke={goldenMoves ? '#00C853' : '#FFD600'} 
                strokeWidth="8" 
                strokeDasharray="251.2" 
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * readinessScore) / 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${verdictColor}`}>{readinessScore}%</span>
            </div>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">The Verdict: {verdictText}</h2>
          <p className="text-slate-500 text-sm">
            {goldenMoves 
              ? "By restructuring your car loan and maximizing EPF, you're well within the safe zone for a RM600k mortgage."
              : "Your current Debt Service Ratio (DSR) is slightly high. Banks might view your application as risky."}
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <PillarCard 
            icon={PiggyBank} 
            title="EPF Optimization" 
            current="RM45,000" 
            potential={goldenMoves ? "RM52,000" : null}
            status={goldenMoves ? 'good' : 'warning'}
          />
          <PillarCard 
            icon={Landmark} 
            title="Tax Efficiency" 
            current="RM1,200 relief" 
            potential={goldenMoves ? "RM3,500 relief" : null}
            status={goldenMoves ? 'good' : 'warning'}
          />
          <PillarCard 
            icon={Shield} 
            title="Risk Profile (DSR)" 
            current={goldenMoves ? "55%" : "68%"} 
            potential={goldenMoves ? null : "55%"}
            status={goldenMoves ? 'good' : 'danger'}
            progress={goldenMoves ? 55 : 68}
          />
          <PillarCard 
            icon={TrendingUp} 
            title="Investment Buffer" 
            current="RM10,000" 
            potential={goldenMoves ? "RM15,000" : null}
            status="good"
          />
        </div>
      </div>

      {/* Your Life, Upgraded */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-900">Your Life, Upgraded</h3>
          <button 
            onClick={() => setExpandedLife(!expandedLife)}
            className="text-[#2962FF] text-sm font-medium flex items-center hover:underline"
          >
            {expandedLife ? 'Read Less' : 'Read More'}
            {expandedLife ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
          </button>
        </div>
        <div className="text-slate-600 text-sm leading-relaxed">
          <p>
            Imagine moving into your RM600k dream home without the constant anxiety of living paycheck to paycheck. 
            By implementing the Golden Moves, you&apos;re not just getting approved for a loan; you&apos;re building a sustainable lifestyle.
          </p>
          {expandedLife && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 space-y-3"
            >
              <p>
                <strong>The Emotional Roadmap:</strong> Right now, the &quot;Bank-speak&quot; feels overwhelming. But once your DSR drops to 55%, you shift from hoping for approval to negotiating the best rates. 
              </p>
              <p>
                You&apos;ll have a RM15k emergency buffer, meaning a sudden car repair won&apos;t derail your mortgage payments. Your tax reliefs will be fully optimized, effectively giving you a &quot;bonus&quot; every April to fund your home renovations.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function PillarCard({ icon: Icon, title, current, potential, status, progress }: any) {
  const statusColors = {
    good: 'text-[#00C853] bg-[#00C853]/10',
    warning: 'text-[#FFD600] bg-[#FFD600]/10',
    danger: 'text-red-500 bg-red-500/10',
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 flex flex-col justify-between">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-lg ${statusColors[status as keyof typeof statusColors]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h4 className="font-semibold text-slate-900 text-sm">{title}</h4>
      </div>
      <div>
        <div className="text-xs text-slate-500 mb-1">Current</div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-slate-900">{current}</div>
          {progress && (
            <div className="w-8 h-8 relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F5F7FA" strokeWidth="12" />
                <motion.circle 
                  cx="50" cy="50" r="40" fill="transparent" 
                  stroke={status === 'good' ? '#00C853' : status === 'warning' ? '#FFD600' : '#ef4444'} 
                  strokeWidth="12" 
                  strokeDasharray="251.2" 
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 - (251.2 * progress) / 100 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>
        
        {potential && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 pt-2 border-t border-slate-100"
          >
            <div className="text-xs text-[#00C853] font-medium flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              Potential: {potential}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
