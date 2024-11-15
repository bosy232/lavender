import React, { useState } from 'react';
import { CreditCard, PaypalIcon } from 'lucide-react';

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment submitted');
  };

  return (
    <section id="payment" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Secure Payment Options</h2>
          <p className="mt-4 text-lg text-gray-600">Choose your preferred payment method</p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-3 px-4 rounded-lg border ${
                  paymentMethod === 'card'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                    : 'border-gray-300 text-gray-700'
                } transition-colors`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Credit Card</span>
                </div>
              </button>
              
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`flex-1 py-3 px-4 rounded-lg border ${
                  paymentMethod === 'paypal'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                    : 'border-gray-300 text-gray-700'
                } transition-colors`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-bold text-[#003087]">Pay</span>
                  <span className="font-bold text-[#009cde]">Pal</span>
                </div>
              </button>
            </div>

            {paymentMethod === 'card' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVC</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="123"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Pay Now
                </button>
              </form>
            ) : (
              <div className="text-center">
                <button
                  onClick={() => window.location.href = 'https://www.paypal.com'}
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-md bg-[#009cde] text-white hover:bg-[#008ac7] transition-colors"
                >
                  Continue with PayPal
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  You will be redirected to PayPal to complete your payment securely.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;