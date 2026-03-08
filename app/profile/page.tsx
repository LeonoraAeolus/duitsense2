'use client';

import { useState } from 'react';
import { Info, ArrowRight, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  const handleGenerate = () => {
    router.push('/');
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">My Profile</h1>
        <p className="text-slate-500">Tell us about your finances to get your readiness verdict.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 space-y-12">
          <PersonalForm />
          <hr className="border-slate-100" />
          <IncomeForm />
          <hr className="border-slate-100" />
          <DebtsForm />
          <hr className="border-slate-100" />
          <GoalsForm />

          <div className="pt-6 flex justify-end">
            <button 
              onClick={handleGenerate}
              className="bg-[#2962FF] hover:bg-[#2962FF]/90 text-white px-8 py-3 rounded-xl font-medium flex items-center transition-colors"
            >
              Save My Info & Generate Path
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TooltipLabel({ label, tooltip }: { label: string, tooltip: string }) {
  return (
    <div className="flex items-center mb-2 group relative">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="ml-2 text-slate-400 hover:text-[#2962FF] cursor-help">
        <Info className="w-4 h-4" />
      </div>
      <div className="absolute bottom-full left-0 mb-2 w-64 bg-slate-900 text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {tooltip}
        <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  );
}

function PersonalForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Personal & Family</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <TooltipLabel label="Full Name" tooltip="As per your NRIC." />
          <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="e.g. Amir Bin Ahmad" defaultValue="Amir Bin Ahmad" />
        </div>
        <div>
          <TooltipLabel label="Age" tooltip="Used to calculate maximum loan tenure." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="e.g. 30" defaultValue="30" />
        </div>
        <div>
          <TooltipLabel label="Marital Status" tooltip="Affects joint loan eligibility and tax reliefs." />
          <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]">
            <option>Single</option>
            <option>Married</option>
          </select>
        </div>
        <div>
          <TooltipLabel label="Dependents" tooltip="Number of children or parents you support for tax relief." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="0" defaultValue="0" />
        </div>
      </div>
    </div>
  );
}

function IncomeForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Income & EPF</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <TooltipLabel label="Gross Monthly Salary (RM)" tooltip="Your salary before any deductions like EPF or SOCSO." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="6000" defaultValue="6000" />
        </div>
        <div>
          <TooltipLabel label="Net Monthly Salary (RM)" tooltip="The actual amount credited to your bank account." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="5200" defaultValue="5200" />
        </div>
        <div>
          <TooltipLabel label="EPF Account 1 Balance (RM)" tooltip="Retirement account." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="100000" defaultValue="100000" />
        </div>
        <div>
          <TooltipLabel label="EPF Account 2 Balance (RM)" tooltip="Can be used for housing downpayment, education, etc." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="45000" defaultValue="45000" />
        </div>
        <div>
          <TooltipLabel label="EPF Account 3 Balance (RM)" tooltip="Flexible withdrawal account." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="10000" defaultValue="10000" />
        </div>
        <div>
          <TooltipLabel label="Other Fixed Income (RM)" tooltip="Consistent monthly allowances or rental income." />
          <input type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="0" defaultValue="0" />
        </div>
      </div>
    </div>
  );
}

function DebtsForm() {
  const [debts, setDebts] = useState(() => [{ id: Date.now(), type: 'Car Loan', customType: '', monthly: 800, outstanding: 45000 }]);

  const addDebt = () => {
    setDebts([...debts, { id: Date.now(), type: 'Car Loan', customType: '', monthly: 0, outstanding: 0 }]);
  };

  const updateDebt = (id: number, field: string, value: any) => {
    setDebts(debts.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const removeDebt = (id: number) => {
    setDebts(debts.filter(d => d.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Current Debts</h2>
      <div className="space-y-6">
        {debts.map((debt, index) => (
          <div key={debt.id} className="grid grid-cols-12 gap-4 items-start relative">
            <div className="col-span-4 space-y-2">
              <TooltipLabel label="Debt Type" tooltip="Car loan, personal loan, credit card, etc." />
              <select 
                value={debt.type}
                onChange={(e) => updateDebt(debt.id, 'type', e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]"
              >
                <option>Car Loan</option>
                <option>Personal Loan</option>
                <option>Credit Card</option>
                <option>Other (Custom)</option>
              </select>
              {debt.type === 'Other (Custom)' && (
                <input 
                  type="text" 
                  placeholder="Specify debt type"
                  value={debt.customType}
                  onChange={(e) => updateDebt(debt.id, 'customType', e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" 
                />
              )}
            </div>
            <div className="col-span-4">
              <TooltipLabel label="Monthly Commitment (RM)" tooltip="How much you pay every month." />
              <input type="number" 
                value={debt.monthly || ''}
                onChange={(e) => updateDebt(debt.id, 'monthly', e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="800" />
            </div>
            <div className="col-span-3">
              <TooltipLabel label="Outstanding Balance (RM)" tooltip="Total amount left to pay." />
              <input type="number" 
                value={debt.outstanding || ''}
                onChange={(e) => updateDebt(debt.id, 'outstanding', e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="45000" />
            </div>
            {debts.length > 1 && (
              <div className="col-span-1 flex items-center justify-center pt-8">
                <button 
                  onClick={() => removeDebt(debt.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-2"
                  title="Remove debt"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ))}
        <button onClick={addDebt} className="text-[#2962FF] text-sm font-medium hover:underline">+ Add another debt</button>
      </div>
    </div>
  );
}

function GoalsForm() {
  const [goals, setGoals] = useState(() => [{ id: Date.now(), type: 'Property', customType: '', amount: 600000, year: 'This Year' }]);

  const addGoal = () => {
    setGoals([...goals, { id: Date.now(), type: 'Property', customType: '', amount: 0, year: 'This Year' }]);
  };

  const updateGoal = (id: number, field: string, value: any) => {
    setGoals(goals.map(g => g.id === id ? { ...g, [field]: value } : g));
  };

  const removeGoal = (id: number) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Lifestyle & Goals</h2>
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <div key={goal.id} className="grid grid-cols-12 gap-4 items-start relative">
            <div className="col-span-4 space-y-2">
              <TooltipLabel label="Goal Type" tooltip="Property, car, travel, education, etc." />
              <select 
                value={goal.type}
                onChange={(e) => updateGoal(goal.id, 'type', e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]"
              >
                <option>Property</option>
                <option>Car</option>
                <option>Travel</option>
                <option>Child Education</option>
                <option>Other (Custom)</option>
              </select>
              {goal.type === 'Other (Custom)' && (
                <input 
                  type="text" 
                  placeholder="Specify goal type"
                  value={goal.customType}
                  onChange={(e) => updateGoal(goal.id, 'customType', e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" 
                />
              )}
            </div>
            <div className="col-span-4">
              <TooltipLabel label="Target Amount (RM)" tooltip="The estimated cost of your goal." />
              <input type="number" 
                value={goal.amount || ''}
                onChange={(e) => updateGoal(goal.id, 'amount', e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]" placeholder="600000" />
            </div>
            <div className="col-span-3">
              <TooltipLabel label="Target Year" tooltip="When do you plan to achieve this?" />
              <select 
                value={goal.year}
                onChange={(e) => updateGoal(goal.id, 'year', e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF]/50 focus:border-[#2962FF]"
              >
                <option>This Year</option>
                <option>Next Year</option>
                <option>In 2-3 Years</option>
                <option>In 5+ Years</option>
              </select>
            </div>
            {goals.length > 1 && (
              <div className="col-span-1 flex items-center justify-center pt-8">
                <button 
                  onClick={() => removeGoal(goal.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-2"
                  title="Remove goal"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ))}
        <button onClick={addGoal} className="text-[#2962FF] text-sm font-medium hover:underline">+ Add another goal</button>
      </div>
    </div>
  );
}
