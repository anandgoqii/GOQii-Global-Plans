import { Smartphone, Watch, Compass, HeartPulse, ActivitySquare, Waves } from 'lucide-react';
import { motion } from 'motion/react';

export function ConnectedAndDevices() {
  return (
    <section className="bg-white">
      {/* Connected Section */}
      <div className="py-24 px-4 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center">
             {/* Abstract connected visual */}
             <div className="relative w-full max-w-sm aspect-square">
               <div className="absolute inset-0 bg-neutral-50 rounded-full border border-neutral-100"></div>
               
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-dashed border-neutral-200 rounded-full"
               >
                  <div className="absolute top-0 left-1/2 -ml-6 -mt-6 bg-white p-3 rounded-2xl shadow-lg border border-neutral-100 text-teal-600">
                    <ActivitySquare className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-1/4 right-0 -mr-4 bg-white p-3 rounded-2xl shadow-lg border border-neutral-100 text-indigo-600 rotate-90">
                    <Waves className="w-6 h-6 -rotate-90" />
                  </div>
                  <div className="absolute bottom-1/4 left-0 -ml-4 bg-white p-3 rounded-2xl shadow-lg border border-neutral-100 text-emerald-600 -rotate-90">
                    <HeartPulse className="w-6 h-6 rotate-90" />
                  </div>
               </motion.div>
               
               <div className="absolute inset-8 bg-neutral-100 rounded-full border border-neutral-200"></div>
               <div className="absolute inset-x-0 top-1/2 -mt-16 text-center z-10 flex flex-col items-center">
                 <div className="w-32 h-32 bg-neutral-900 rounded-full flex items-center justify-center text-white shadow-xl mb-4 relative z-20">
                   <div className="font-semibold text-2xl tracking-tighter">GOQii</div>
                 </div>
                 <div className="text-sm font-semibold text-neutral-500 uppercase tracking-widest bg-white/80 backdrop-blur px-4 py-1.5 rounded-full shadow-sm border border-neutral-100">
                   Central Hub
                 </div>
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight mb-6 leading-[1.1]">
              Your Health,<br/>Fully Connected
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mb-8 rounded-full"></div>
            <p className="text-xl text-neutral-600 mb-6 font-medium">
              Sleep, stress, activity, and nutrition are all connected.
            </p>
            <p className="text-lg text-neutral-500 leading-relaxed">
              GOQii brings everything together into one intelligent system that continuously adapts to you. No more fragmented data across multiple apps. We analyze the big picture to give you holistic recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Devices Section */}
      <div className="bg-neutral-900 text-white overflow-hidden relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\' fill=\'%23ffffff\' fill-opacity=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-7xl mx-auto py-24 px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-8 tracking-wider uppercase">
              Bring Your Own Device (BYOD)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]">
              Works With Your<br/>Existing Devices
            </h2>
            <p className="text-xl text-neutral-300 max-w-lg mb-8 font-light">
              No mandatory hardware required. All your data, unified in one place.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
               {[
                 { icon: Smartphone, label: 'Apple Health' },
                 { icon: Smartphone, label: 'Google Fit' },
                 { icon: Watch, label: 'Wearables' },
                 { icon: Compass, label: 'Manual tracking' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 py-3 border-b border-white/10">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                     <item.icon className="w-5 h-5 text-neutral-400" />
                   </div>
                   <span className="font-medium">{item.label}</span>
                 </div>
               ))}
            </div>
            
            <button className="mt-10 bg-white text-neutral-900 px-8 py-4 rounded-xl font-medium hover:bg-neutral-100 transition-colors">
              View Compatible Integrations
            </button>
          </div>
          
          <div className="relative h-[400px] sm:h-[500px]">
            {/* Visual representation of devices syncing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                 <motion.div 
                   animate={{ y: [0, -10, 0] }} 
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
                 >
                   <Watch className="w-8 h-8 text-neutral-400" />
                   <div>
                     <div className="h-1.5 w-12 bg-white/20 rounded-full mb-2"></div>
                     <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [0, 10, 0] }} 
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                   className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between mt-12"
                 >
                   <Smartphone className="w-8 h-8 text-neutral-400" />
                   <div>
                     <div className="h-1.5 w-16 bg-emerald-500/50 rounded-full mb-2"></div>
                     <div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [0, -8, 0] }} 
                   transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="aspect-square bg-neutral-800 rounded-2xl border border-emerald-500/30 p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden"
                 >
                   <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/10 blur-xl rounded-full"></div>
                   <ActivitySquare className="w-8 h-8 text-emerald-400 relative z-10" />
                   <div className="relative z-10">
                     <div className="text-xl font-bold text-white mb-1">Synced</div>
                     <div className="text-xs text-emerald-400">Just now</div>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [0, 12, 0] }} 
                   transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                   className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between mt-12"
                 >
                   <Compass className="w-8 h-8 text-neutral-400" />
                   <div>
                     <div className="h-1.5 w-8 bg-white/20 rounded-full mb-2"></div>
                     <div className="h-1.5 w-12 bg-white/10 rounded-full"></div>
                   </div>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
