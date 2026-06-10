"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Sun,
  Moon,
  Grid,
  Users,
  CalendarDays,
  CalendarClock,
  Settings,
  Info,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  MessageSquare,
  Star,
  Activity,
  CheckCircle2,
  X,
  Menu,
  ArrowLeft
} from "lucide-react";

// Mock Data
const allDoctors = [
  { id: 1, name: "Dr. Ralph Edwards", role: "Dermatologist", price: "$20/hour", image: "/doc1.png", rating: 5, reviews: 124, exp: "Over 10 years in clinical dermatology. Treats a wide range of conditions from severe acne to autoimmune skin diseases.", specialities: ["General Dermatology", "Skin Allergy Treatment", "Acne & Scarring Care"] },
  { id: 2, name: "Dr. Ronald Richards", role: "Neurologist", price: "$20/hour", image: "/doc2.png", rating: 4, reviews: 89, exp: "Specialist in neurodegenerative diseases and brain trauma.", specialities: ["Migraine Treatment", "Stroke Rehabilitation", "Epilepsy Management"] },
  { id: 3, name: "Dr. Albert Boje", role: "Dentist", price: "$20/hour", image: "/doc3.png", rating: 5, reviews: 210, exp: "Expert in cosmetic dentistry and oral surgery.", specialities: ["Cosmetic Dentistry", "Oral Surgery", "Orthodontics"] },
  { id: 4, name: "Dr. Floyd Miles", role: "Neurologist", price: "$20/hour", image: "/doc1.png", rating: 4, reviews: 56, exp: "Specializes in pediatric neurology.", specialities: ["Pediatric Neurology", "Autism Spectrum", "Developmental Delays"] },
  { id: 5, name: "Dr. Leslie Alexander", role: "Psychiatrist", price: "$20/hour", image: "/doc2.png", rating: 5, reviews: 178, exp: "Focuses on cognitive behavioral therapy and adult ADHD.", specialities: ["CBT", "Adult ADHD", "Anxiety Disorders"] },
  { id: 6, name: "Dr. Brooklyn Crean", role: "General Practice", price: "$30/hour", image: "/doc3.png", rating: 5, reviews: 340, exp: "Family medicine practitioner with a focus on preventative care.", specialities: ["Preventative Care", "Annual Checkups", "Chronic Disease Management"] },
  { id: 7, name: "Dr. Courtney Henry", role: "Cardiologist", price: "$20/hour", image: "/doc1.png", rating: 5, reviews: 145, exp: "Expert in interventional cardiology and heart failure.", specialities: ["Interventional Cardiology", "Heart Failure", "Echocardiography"] },
  { id: 8, name: "Dr. Eleanor Pena", role: "Psychiatrist", price: "$32/hour", image: "/doc2.png", rating: 4, reviews: 92, exp: "Adolescent psychiatry and mood disorders.", specialities: ["Adolescent Psychiatry", "Mood Disorders", "Depression"] }
];

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:30 PM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM", "05:30 PM"
];

const baseCalendarDays = [
  { day: 1, currentMonth: false }, { day: 2, currentMonth: false }, { day: 3, currentMonth: false }, 
  { day: 4, currentMonth: true }, { day: 5, currentMonth: true }, { day: 6, currentMonth: true }, { day: 7, currentMonth: true },
  { day: 8, currentMonth: true }, { day: 9, currentMonth: true }, { day: 10, currentMonth: true }, { day: 11, currentMonth: true }, { day: 12, currentMonth: true }, { day: 13, currentMonth: true }, { day: 14, currentMonth: true },
  { day: 15, currentMonth: true }, { day: 16, currentMonth: true }, { day: 17, currentMonth: true }, { day: 18, currentMonth: true }, { day: 19, currentMonth: true }, { day: 20, currentMonth: true }, { day: 21, currentMonth: true },
  { day: 22, currentMonth: true }, { day: 23, currentMonth: true }, { day: 24, currentMonth: true }, { day: 25, currentMonth: true }, { day: 26, currentMonth: true }, { day: 27, currentMonth: true }, { day: 28, currentMonth: true },
  { day: 29, currentMonth: true }, { day: 30, currentMonth: true }, { day: 31, currentMonth: true }
];

export default function BookingSystem() {
  const [selectedDoctor, setSelectedDoctor] = useState(allDoctors[0]);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedDay, setSelectedDay] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const doctors = allDoctors.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleBook = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    setShowBookingModal(false);
    showToast(`Appointment confirmed with ${selectedDoctor.name}!`);
  };

  return (
    <div className={`flex h-screen font-sans overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* 1. Thin Left Sidebar (Hidden on Mobile) */}
      <aside className={`hidden md:flex w-20 flex-col items-center py-6 flex-shrink-0 z-20 shadow-xl rounded-r-3xl relative transition-colors ${isDarkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-900 text-slate-400'}`}>
        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-10 shadow-lg shadow-indigo-500/30">
          <Activity size={24} strokeWidth={2.5} />
        </div>
        
        <p className="text-[10px] uppercase font-bold tracking-widest mb-6">Menu</p>
        
        <nav className="flex flex-col gap-6 w-full items-center flex-1">
          <button onClick={() => showToast("Dashboard View")} className="p-3 rounded-xl hover:bg-slate-800 transition-colors"><Grid size={22} /></button>
          <button onClick={() => showToast("Patients List")} className="p-3 rounded-xl hover:bg-slate-800 transition-colors"><Users size={22} /></button>
          <button className="p-3 rounded-xl bg-slate-800 text-white shadow-inner relative">
            <CalendarDays size={22} />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-500 rounded-l-full"></div>
          </button>
          <button onClick={() => showToast("Schedule View")} className="p-3 rounded-xl hover:bg-slate-800 transition-colors"><CalendarClock size={22} /></button>
        </nav>

        <div className="flex flex-col gap-4 w-full items-center">
          <button onClick={() => showToast("Settings opened")} className="p-3 rounded-xl hover:bg-slate-800 transition-colors"><Settings size={22} /></button>
          <button onClick={() => showToast("Help & Info")} className="p-3 rounded-xl hover:bg-slate-800 transition-colors"><Info size={22} /></button>
        </div>
      </aside>

      {/* Main App Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Top Header */}
        <header className={`h-20 border-b flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-10 transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center gap-3">
            <button className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`} onClick={() => showToast("Menu opened")}>
              <Menu size={24} />
            </button>
            <a href="/" className={`p-2 rounded-xl transition-colors flex items-center justify-center ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`} title="Back to Home">
              <ArrowLeft size={20} />
            </a>
            <h1 className="text-xl md:text-2xl font-semibold">Appointment</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={() => showToast("No new notifications")} className={`p-2.5 rounded-full border transition-colors relative ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
              <Bell size={20} />
              <span className={`absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 ${isDarkMode ? 'border-slate-800' : 'border-white'}`}></span>
            </button>
            
            <div className={`flex items-center border rounded-full p-1 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <button onClick={() => setIsDarkMode(false)} className={`p-2 rounded-full transition-colors ${!isDarkMode ? 'bg-white shadow-sm text-indigo-500' : 'text-slate-400 hover:text-slate-200'}`}><Sun size={18} /></button>
              <button onClick={() => setIsDarkMode(true)} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-900 shadow-sm text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}><Moon size={18} /></button>
            </div>
            
            <div className={`flex items-center gap-3 pl-4 border-l transition-colors ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Razaam</p>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>raza@example.com</p>
              </div>
              <div className={`w-10 h-10 rounded-full overflow-hidden border-2 shadow-sm ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-white bg-slate-200'}`}>
                <div className="w-full h-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">R</div>
              </div>
            </div>
          </div>
        </header>

        {/* 3-Column Content Layout */}
        <div className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row custom-scrollbar">
          
          {/* Column 1: Booking Appointment (Left) */}
          <div className={`w-full lg:w-[340px] border-b lg:border-b-0 lg:border-r flex flex-col lg:overflow-y-auto custom-scrollbar flex-shrink-0 p-4 md:p-6 lg:p-8 transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <h2 className="text-lg font-semibold mb-6">Booking Appointment</h2>
            
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">June 2025</h3>
              <div className="flex gap-2">
                <button onClick={() => showToast("Previous month")} className={`p-1.5 rounded-lg border transition-colors ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}><ChevronLeft size={16} /></button>
                <button onClick={() => showToast("Next month")} className={`p-1.5 rounded-lg border transition-colors ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}><ChevronRight size={16} /></button>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-8">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className={`font-medium py-2 ${day === 'Sun' ? 'text-rose-500' : (isDarkMode ? 'text-slate-400' : 'text-slate-400')}`}>{day}</div>
              ))}
              {baseCalendarDays.map((d, i) => {
                const isActive = d.currentMonth && d.day === selectedDay;
                return (
                  <button 
                    key={i} 
                    onClick={() => d.currentMonth && setSelectedDay(d.day)}
                    disabled={!d.currentMonth}
                    className={`py-2.5 rounded-full flex items-center justify-center w-8 h-8 mx-auto transition-all
                      ${!d.currentMonth ? (isDarkMode ? 'text-slate-700' : 'text-slate-300') : 
                        isActive ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30' : 
                        i % 7 === 0 ? 'text-rose-500 hover:bg-rose-500/10' : (isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100')}
                    `}
                  >
                    {d.day}
                  </button>
                );
              })}
            </div>

            {/* Time Slots */}
            <h3 className="font-medium mb-4">Wed, {selectedDay} June 2025</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {timeSlots.map(time => {
                const isSelected = selectedTime === time;
                const isDisabled = time === '11:00 AM';
                return (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    disabled={isDisabled}
                    className={`py-2.5 px-2 rounded-xl text-sm font-medium border transition-all ${
                      isSelected 
                        ? 'border-indigo-600 text-indigo-600 bg-indigo-50 shadow-sm dark:bg-indigo-500/20 dark:border-indigo-500 dark:text-indigo-400' 
                        : isDisabled 
                          ? (isDarkMode ? 'border-slate-800 bg-slate-900 text-slate-700 cursor-not-allowed' : 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed')
                          : (isDarkMode ? 'border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50')
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>

            {/* Patient Concerns */}
            <h3 className="font-medium mb-4">Patient Concerns</h3>
            <div className={`border rounded-2xl p-4 flex-1 min-h-[120px] transition-colors ${isDarkMode ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50/50 border-indigo-100'}`}>
              <textarea 
                className={`w-full h-full bg-transparent resize-none text-sm placeholder-slate-400 focus:outline-none ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}
                placeholder="Describe your symptoms..."
                defaultValue="Red, itchy skin for a week. Worse after sun.&#10;Symptoms:&#10;• Flaky patches&#10;• Mild burning&#10;• Skin sensitivity"
              />
            </div>
          </div>

          {/* Column 2: Doctor List (Middle) */}
          <div className={`w-full lg:flex-1 flex flex-col lg:overflow-hidden relative transition-colors ${isDarkMode ? 'bg-slate-950/50' : 'bg-slate-50/50'}`}>
            
            {/* Middle Header */}
            <div className="p-4 md:p-6 lg:p-8 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Doctor List</h2>
              
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search Doctor" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full sm:w-64 pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-900'}`}
                  />
                </div>
                <button onClick={() => showToast("Filters applied")} className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium shadow-sm transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
                  Filter <Filter size={16} />
                </button>
              </div>
            </div>
            
            {/* Doctor Grid */}
            <div className="lg:flex-1 lg:overflow-y-auto custom-scrollbar p-4 md:p-6 lg:p-8 pt-0 pb-8 lg:pb-8">
              {doctors.length === 0 ? (
                <div className="text-center py-20 text-slate-500">No doctors found matching "{searchQuery}"</div>
              ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  {doctors.map(doc => (
                    <motion.div 
                      key={doc.id}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedDoctor(doc)}
                      className={`rounded-2xl p-5 border transition-all cursor-pointer ${
                        selectedDoctor.id === doc.id 
                          ? (isDarkMode ? 'bg-slate-800 border-indigo-500 shadow-md shadow-indigo-900/20' : 'bg-white border-indigo-500 shadow-md shadow-indigo-100') 
                          : (isDarkMode ? 'bg-slate-900 border-slate-800 shadow-sm hover:shadow-md' : 'bg-white border-slate-100 shadow-sm hover:shadow-md')
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className={`w-20 h-24 rounded-xl overflow-hidden relative flex-shrink-0 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                          <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-indigo-900/30 text-indigo-500' : 'bg-indigo-50 text-indigo-300'}`}>
                            <Image 
                              src={doc.image} 
                              alt={doc.name} 
                              fill 
                              className="object-cover"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{doc.name}</h4>
                          <div className={`flex items-center gap-2 text-sm mt-1 mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            <Activity size={14} className="text-indigo-500" />
                            <span>{doc.role}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <div className={`flex items-center justify-center w-5 h-5 rounded ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                              $
                            </div>
                            <span>{doc.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-5">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedDoctor(doc); handleBook(); }}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm shadow-indigo-600/20"
                        >
                          Book Now
                        </button>
                        <button 
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedDoctor(doc); 
                            const el = document.getElementById('detail-doctor');
                            if(el && window.innerWidth < 1024) el.scrollIntoView({behavior: 'smooth'});
                            else showToast(`Viewing details for ${doc.name}`); 
                          }}
                          className={`flex-1 border py-2.5 rounded-xl text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                        >
                          Detail
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); showToast(`Messaging ${doc.name}`); }}
                          className={`p-2.5 border rounded-xl transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                          <MessageSquare size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Detail Doctor (Right) */}
          <div id="detail-doctor" className={`w-full lg:w-[320px] xl:w-[360px] border-t lg:border-t-0 lg:border-l flex flex-col lg:overflow-y-auto custom-scrollbar flex-shrink-0 transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-6">Detail Doctor</h2>
              
              <div className={`w-full aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative shadow-inner ${isDarkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}>
                 <Image 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name} 
                    fill 
                    className="object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{selectedDoctor.name}</h3>
              
              <div className={`flex items-center justify-between mb-8 pb-6 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-50 text-slate-500'}`}>
                  <Activity size={14} className="text-indigo-500" />
                  <span>{selectedDoctor.role}</span>
                </div>
                <div className={`flex items-center gap-1.5 font-semibold px-3 py-1.5 rounded-full text-sm ${isDarkMode ? 'bg-green-900/20 text-slate-200' : 'bg-green-50 text-slate-700'}`}>
                  <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>$</span>
                  <span>{selectedDoctor.price.split('/')[0].replace('$', '')}</span>
                  <span className={`font-normal ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>/hr</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <span className={`w-6 h-6 rounded flex items-center justify-center text-xs ${isDarkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>★</span>
                  Experience
                </h4>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {selectedDoctor.exp}
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <span className={`w-6 h-6 rounded flex items-center justify-center text-xs ${isDarkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>✧</span>
                  Speciality
                </h4>
                <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {selectedDoctor.specialities.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-slate-600' : 'bg-slate-300'}`}></div> {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-3">Reviews</h4>
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < selectedDoctor.rating ? "currentColor" : "none"} className={i >= selectedDoctor.rating ? (isDarkMode ? "text-slate-700" : "text-slate-300") : ""} />
                  ))}
                </div>
                <p className={`text-sm italic p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
                  "{selectedDoctor.name.split(' ')[1]} was clear, caring, and professional. My condition improved fast thanks to his treatment plan. Highly recommended!"
                </p>
              </div>
              
            </div>
            
            <div className={`p-4 md:p-6 border-t sticky bottom-0 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
              <button 
                onClick={handleBook}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-600/20 text-lg"
              >
                Book Appointment
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Modal Overlay */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`w-full max-w-md rounded-3xl shadow-2xl overflow-hidden my-auto ${isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}
            >
              <div className={`p-6 border-b flex justify-between items-center ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <h3 className="text-xl font-bold">Patient Details</h3>
                <button onClick={() => setShowBookingModal(false)} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
                <div className={`flex items-center gap-4 p-4 rounded-2xl mb-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
                  <div className={`w-14 h-14 rounded-xl overflow-hidden relative ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <Image src={selectedDoctor.image} alt={selectedDoctor.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{selectedDoctor.name}</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{selectedTime} • Jun {selectedDay}, 2025</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Your Information</h4>
                  
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'}`}
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/3">
                      <label className={`block text-xs font-semibold mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Age</label>
                      <input 
                        type="number" 
                        placeholder="30" 
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'}`}
                      />
                    </div>
                    <div className="flex-1">
                      <label className={`block text-xs font-semibold mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Phone No.</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'}`}
                    />
                  </div>
                </div>

                <div className={`space-y-3 mb-8 pt-6 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Consultation Fee</span>
                    <span className="font-medium text-green-500">{selectedDoctor.price}</span>
                  </div>
                </div>

                <button 
                  onClick={confirmBooking}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={20} /> Confirm & Pay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`absolute bottom-8 right-8 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 ${isDarkMode ? 'bg-slate-800 text-white border border-slate-700' : 'bg-slate-900 text-white'}`}
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <span className="font-medium text-sm md:text-base">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom Scrollbar Styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: ${isDarkMode ? '#334155' : '#e2e8f0'}; border-radius: 20px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: ${isDarkMode ? '#475569' : '#cbd5e1'}; }
      `}} />
    </div>
  );
}

