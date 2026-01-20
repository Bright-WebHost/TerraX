import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">{title}</h1>
        <p className="mt-6 text-xl text-blue-200 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}