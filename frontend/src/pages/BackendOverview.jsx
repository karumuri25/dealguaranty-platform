import React from "react";
import { Server, Database, ShieldCheck, Activity, Cloud, GitBranch } from "lucide-react";

export default function BackendOverview() {
  const sections = [
    {
      icon: <Server className="text-blue-600" size={26} />,
      title: "Core Backend Stack",
      items: [
        "Node.js + Express REST API",
        "PostgreSQL as primary relational database",
        "Redis for caching and rate limiting",
        "JWT-based auth with refresh tokens",
        "Zod / Joi for request validation",
      ],
    },
    {
      icon: <Database className="text-emerald-600" size={26} />,
      title: "Domain Models",
      items: [
        "User: customer, provider, admin roles",
        "Service: category, pricing, duration, location",
        "Booking: status, schedule, payment reference",
        "Review: rating, comments, service & user link",
        "Payout: provider earnings, settlement status",
      ],
    },
    {
      icon: <GitBranch className="text-indigo-600" size={26} />,
      title: "Key API Endpoints",
      items: [
        "POST /auth/register, POST /auth/login, POST /auth/refresh",
        "GET /services, GET /services/:id",
        "POST /bookings, GET /bookings/:id, GET /bookings?role=provider",
        "POST /reviews, GET /services/:id/reviews",
        "GET /me/dashboard (role-aware summary)",
      ],
    },
    {
      icon: <Cloud className="text-sky-600" size={26} />,
      title: "Infrastructure & Deployment",
      items: [
        "Containerized with Docker",
        "Deployed on cloud (AWS/GCP/Azure) behind API Gateway / Load Balancer",
        "Managed PostgreSQL (RDS/Cloud SQL)",
        "Redis via managed cache service",
        "Static frontend on CDN with HTTPS everywhere",
      ],
    },
    {
      icon: <ShieldCheck className="text-rose-600" size={26} />,
      title: "Security & Compliance",
      items: [
        "HTTPS-only, HSTS enabled",
        "JWT + role-based access control",
        "Input validation & output encoding",
        "Encrypted secrets via cloud secret manager",
        "Audit logs for bookings, payouts, and logins",
      ],
    },
    {
      icon: <Activity className="text-amber-600" size={26} />,
      title: "SRE & Observability",
      items: [
        "Structured JSON logging with correlation IDs",
        "Metrics: request latency, error rate, bookings/min",
        "Health checks: /health, /ready",
        "Dashboards for API, DB, and cache performance",
        "Alerting on SLO breaches (availability, latency)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3">DealGuaranty Backend Architecture</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            This page captures the production-grade backend design for DealGuaranty—API surface,
            data models, infrastructure, and SRE practices—so it’s interview-ready and implementation-ready.
          </p>
        </header>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2 text-gray-700">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-3">Implementation Notes</h2>
          <p className="text-gray-700 mb-2">
            The backend is designed as a single API service initially, with a clear path to
            split into domain-oriented services (Auth, Booking, Payments, Provider) if scale demands.
          </p>
          <p className="text-gray-700">
            All critical flows—booking creation, payment confirmation, provider payouts—are
            instrumented with logs and metrics to support SRE practices and incident response.
          </p>
        </div>
      </div>
    </div>
  );
}

