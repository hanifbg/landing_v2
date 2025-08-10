"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function TrackPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [proformaId, setProformaId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if proforma ID is provided
    if (!proformaId.trim()) {
      setError(t('order.track.proformaIdRequired'));
      return;
    }

    // If proforma ID is provided, contact number is required
    if (!contactNumber.trim()) {
      setError(t('order.track.contactNumberRequired'));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Navigate to detail-track with the proforma ID value
      router.push(`/detail-track/${proformaId.trim()}`);
    } catch {
      setError(t('common.tryAgain'));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('order.track.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('order.track.subtitle')}
          </p>
        </div>

        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleTrackOrder} className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="space-y-6">
              {/* Proforma ID */}
              <div>
                <label htmlFor="proformaId" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('order.track.proformaId')}
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    KDY
                  </span>
                  <input
                    type="text"
                    id="proformaId"
                    value={proformaId}
                    onChange={(e) => setProformaId(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder-gray-500"
                    placeholder="Proforma Id atau Order Number"
                    required
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('order.track.contactNumber')}
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    +62
                  </span>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder-gray-500"
                    placeholder="Contact Number"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('order.track.tracking')}
                  </div>
                ) : (
                  <>
                    {t('order.track.trackButton')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="w-5 h-5 text-red-400 mr-2 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
