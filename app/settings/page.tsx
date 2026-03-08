'use client';

import { Shield, Bell, Database, Trash2 } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-500">Manage your account preferences and data privacy.</p>
      </div>

      <div className="space-y-6">
        {/* Account Security */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-5 h-5 text-[#2962FF] mr-3" />
            <h2 className="text-lg font-bold text-slate-900">Account Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-50">
              <div>
                <p className="font-medium text-sm text-slate-900">Email Address</p>
                <p className="text-xs text-slate-500">amir@example.com</p>
              </div>
              <button className="text-sm text-[#2962FF] font-medium">Change</button>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-medium text-sm text-slate-900">Password</p>
                <p className="text-xs text-slate-500">Last changed 3 months ago</p>
              </div>
              <button className="text-sm text-[#2962FF] font-medium">Update</button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center mb-4">
            <Bell className="w-5 h-5 text-[#2962FF] mr-3" />
            <h2 className="text-lg font-bold text-slate-900">Notifications</h2>
          </div>
          <div className="space-y-4">
            <ToggleRow 
              title="Tax Relief Reminders" 
              description="Get notified before tax season to maximize your reliefs."
              defaultChecked={true}
            />
            <ToggleRow 
              title="Property Market Updates" 
              description="Weekly updates on interest rates and housing policies."
              defaultChecked={false}
            />
          </div>
        </div>

        {/* Data Privacy */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center mb-4">
            <Database className="w-5 h-5 text-[#2962FF] mr-3" />
            <h2 className="text-lg font-bold text-slate-900">Data Privacy</h2>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            We believe your financial data belongs to you. You can request a copy of your data or permanently delete your account and all associated records.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Export My Data
            </button>
            <button className="px-4 py-2 border border-red-200 bg-red-50 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 transition-colors flex items-center">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({ title, description, defaultChecked }: { title: string, description: string, defaultChecked: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium text-sm text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2962FF]"></div>
      </label>
    </div>
  );
}
