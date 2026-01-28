
import React, { useState } from 'react';
import { TICKET_TYPES } from '../constants';

const Tickets: React.FC = () => {
  const [selectedTicketId, setSelectedTicketId] = useState(TICKET_TYPES[0].id);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedTicket = TICKET_TYPES.find(t => t.id === selectedTicketId)!;
  const totalPrice = selectedTicket.price * quantity;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    // In a real app, this would hit an API
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-10 min-h-[70vh] text-center animate-fadeIn">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6">
          <i className="fa-solid fa-check"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-500 text-sm mb-8">Your tickets for Kondaveedu Fort have been successfully booked. You will receive an email shortly.</p>
        
        <div className="w-full bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 mb-8 text-left">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Entry Pass</span>
            <span className="text-xs font-bold text-amber-600">#{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <h3 className="font-bold text-lg mb-1">{selectedTicket.name}</h3>
          <div className="flex gap-4 text-xs text-gray-600 mt-2">
            <div><i className="fa-solid fa-calendar mr-1"></i> {date}</div>
            <div><i className="fa-solid fa-users mr-1"></i> {quantity} Person(s)</div>
          </div>
          <div className="mt-6 flex justify-center">
             <i className="fa-solid fa-qrcode text-6xl text-gray-800"></i>
          </div>
        </div>

        <button 
          onClick={() => setIsSuccess(false)}
          className="w-full py-4 rounded-2xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors"
        >
          Book Another Ticket
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Book Entry Tickets</h1>
      <p className="text-sm text-gray-500 mb-8">Secure your visit to the historical Kondaveedu hills.</p>

      <form onSubmit={handleBooking} className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Select Visit Date</label>
          <div className="relative">
            <i className="fa-solid fa-calendar absolute left-4 top-1/2 -translate-y-1/2 text-amber-600"></i>
            <input 
              type="date" 
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-amber-500 transition-all outline-none border"
            />
          </div>
        </div>

        {/* Ticket Type Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Select Ticket Type</label>
          <div className="grid grid-cols-1 gap-3">
            {TICKET_TYPES.map((type) => (
              <label 
                key={type.id} 
                className={`relative flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${selectedTicketId === type.id ? 'border-amber-600 bg-amber-50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                <input 
                  type="radio" 
                  name="ticketType" 
                  className="hidden" 
                  checked={selectedTicketId === type.id}
                  onChange={() => setSelectedTicketId(type.id)}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-900">{type.name}</span>
                    <span className="text-amber-600 font-bold">₹{type.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-tight">{type.description}</p>
                </div>
                {selectedTicketId === type.id && (
                  <div className="ml-3 text-amber-600">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Number of Persons</label>
          <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl w-fit border border-gray-100">
            <button 
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-600 active:scale-90 transition-transform"
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span className="w-8 text-center font-bold text-lg">{quantity}</span>
            <button 
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-600 active:scale-90 transition-transform"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        {/* Summary Sticky-like Footer in Form */}
        <div className="pt-8 border-t border-gray-100 space-y-4">
          <div className="flex justify-between items-center text-gray-500 text-sm">
            <span>Subtotal ({quantity} x ₹{selectedTicket.price})</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between items-center text-gray-500 text-sm">
            <span>Booking Fee (5%)</span>
            <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold text-gray-900">
            <span>Total Amount</span>
            <span className="text-amber-600">₹{(totalPrice * 1.05).toFixed(2)}</span>
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-amber-200 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Pay</span>
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
      </form>

      {/* Security Note */}
      <div className="mt-8 flex items-center gap-3 p-4 bg-blue-50 rounded-2xl text-blue-800">
        <i className="fa-solid fa-shield-halved text-xl"></i>
        <div className="text-[10px] leading-tight font-medium">
          Payments are secure and encrypted. Tickets are non-refundable but transferable to another date up to 24 hours before visit.
        </div>
      </div>
    </div>
  );
};

export default Tickets;
