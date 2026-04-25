import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, GraduationCap, Cpu, FileCheck, FileText, ExternalLink, Play, Globe } from 'lucide-react';

// --- Page 1: 首頁 (個人經歷) ---
const InfoPage = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden min-h-[600px]"
  >
    {/* Left Panel */}
    <div className="md:w-1/3 bg-[#f3eae4] p-12 flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-6">
        <User className="w-16 h-16 text-gray-500" />
      </div>
      <h1 className="text-3xl font-bold text-[#333] mb-4">吳衫憲</h1>
      <p className="text-[#b35736] font-medium leading-relaxed">
        目前就讀於國立高雄科技大學航技系
      </p>
      <div className="mt-auto pt-12 flex items-center gap-2 text-gray-400 uppercase tracking-widest text-xs font-bold">
        <FileText className="w-4 h-4" />
        PORTFOLIO
      </div>
    </div>

    {/* Right Panel */}
    <div className="md:w-2/3 p-12 bg-white flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Experience */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 text-[#b35736] bg-[#fdf5f2] rounded-lg border border-[#feedea]">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-[#121212]">打工經歷</h2>
          </div>
          <div className="pl-12">
            <span className="text-gray-400 text-xs font-bold block mb-1">2025 ~ 現在</span>
            <p className="text-lg font-medium text-[#333]">打工實習生</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 text-[#b35736] bg-[#fdf5f2] rounded-lg border border-[#feedea]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-[#121212]">實習經歷</h2>
          </div>
          <div className="pl-12">
            <span className="text-gray-400 text-xs font-bold block mb-1">2025 ~ 2025</span>
            <p className="text-lg font-medium text-[#333]">御風輪實習</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 text-[#b35736] bg-[#fdf5f2] rounded-lg border border-[#feedea]">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-[#121212]">電腦技能</h2>
          </div>
          <div className="pl-12 space-y-2">
            <div>
              <p className="font-bold text-[#333]">辦公應用軟體</p>
              <p className="text-sm text-gray-500">Word, Excel, PowerPoint</p>
            </div>
            <div className="pt-2">
              <p className="font-bold text-[#333]">專案應用軟體</p>
              <p className="text-sm text-gray-500">Project Management Tools</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 text-[#b35736] bg-[#fdf5f2] rounded-lg border border-[#feedea]">
              <FileCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-[#121212]">專業證照</h2>
          </div>
          <div className="pl-12 space-y-2">
            <div>
              <p className="font-bold text-[#333]">四小證</p>
              <p className="text-sm text-gray-500">基礎安全訓練等</p>
            </div>
            <div className="pt-2">
              <p className="font-bold text-[#333]">其它證照</p>
              <p className="text-sm text-gray-500">專業技術證照</p>
            </div>
          </div>
        </section>
      </div>

      {/* Bio */}
      <section className="bg-[#fff9f7] p-8 rounded-xl border-l-4 border-[#b35736]">
        <div className="flex items-center gap-3 mb-4 text-[#b35736]">
          <User className="w-5 h-5" />
          <h2 className="text-xl font-bold">自傳</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          熱愛海洋與航海技術，專注於航技專業學習，並積極參與實習與校外打工，培養實務經驗與團隊合作能力。
        </p>
      </section>
    </div>
  </motion.div>
);

// --- Page 2: 3/9 旅行規劃 ---
const TravelPlanningPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="relative w-full h-[80vh] rounded-xl overflow-hidden bg-gray-900 shadow-2xl"
  >
    <img 
      src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000" 
      alt="Travel Background"
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-black text-white tracking-[0.2em] relative">
        3/9 旅行規劃
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[6px] bg-[#b35736]"></div>
      </h1>
      
      {/* Slider Indicators Placeholder */}
      <div className="absolute bottom-12 flex items-center gap-4 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full">
        <span className="text-white/50 text-sm">‹</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
        <span className="text-white/50 text-sm">›</span>
        <div className="w-px h-4 bg-white/20 mx-2"></div>
        <span className="text-white text-xs flex items-center gap-1">
          <ExternalLink className="w-3 h-3" /> SLIDE MODE
        </span>
      </div>
    </div>
  </motion.div>
);

// --- Page 3: 3/14 ai圖片 ---
const AIImagePage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-16 text-center"
  >
    <div className="w-24 h-24 bg-[#fdf5f2] rounded-3xl mx-auto flex items-center justify-center mb-8 border border-[#feedea]">
      <Globe className="w-12 h-12 text-[#b35736]" />
    </div>
    
    <h2 className="text-4xl font-bold text-[#121212] mb-6 tracking-tight">3/14 ai圖片</h2>
    <p className="text-gray-500 text-xl max-w-lg mx-auto leading-relaxed mb-12">
      這是一個 3D 模型項目的展示網址，點擊下方按鈕即可跳轉查看。
    </p>
    
    <a 
      href="https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-10 py-5 bg-[#b35736] text-white rounded-xl font-bold text-lg hover:bg-[#964a2d] transition-all shadow-lg hover:shadow-xl active:scale-95"
    >
      查看 3D 模型 <ExternalLink className="w-6 h-6" />
    </a>
    
    <div className="mt-16 text-gray-300 text-[10px] break-all font-mono">
      網址：https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L
    </div>
    <div className="flex justify-center gap-1 mt-4">
      <div className="w-4 h-1 rounded-full bg-gray-100"></div>
      <div className="w-6 h-1 rounded-full bg-[#b35736]"></div>
      <div className="w-4 h-1 rounded-full bg-gray-100"></div>
    </div>
  </motion.div>
);

// --- Page 4: 3/23 旅行規劃影片 ---
const VideoPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-5xl mx-auto"
  >
    <div className="bg-[#0f0f0f] p-4 rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-4 mb-6 pl-4 border-l-[6px] border-[#b35736]">
        <h2 className="text-3xl font-black text-white tracking-wide">3/23 旅行規劃影片</h2>
      </div>
      
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 relative group">
        <video 
          className="w-full h-full object-contain"
          controls
        >
          <source src="input_file_0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </motion.div>
);

// --- Main Navigation & Shell ---
export default function App() {
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', label: '首頁 (個人經歷)' },
    { id: 'travel', label: '3/9 旅行規劃' },
    { id: 'ai', label: '3/14 ai圖片' },
    { id: 'video', label: '3/23 旅行規劃' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-gray-900 font-sans p-6 md:p-12">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-[#b35736] text-white shadow-xl shadow-[#b35736]/20' 
                : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Content Rendering */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'info' && <InfoPage key="info" />}
          {activeTab === 'travel' && <TravelPlanningPage key="travel" />}
          {activeTab === 'ai' && <AIImagePage key="ai" />}
          {activeTab === 'video' && <VideoPage key="video" />}
        </AnimatePresence>
      </div>

      {/* Simplified Footer */}
      <div className="mt-24 text-center text-gray-600 text-[10px] tracking-widest uppercase font-bold">
        © 2026 吳衫憲 - 國立高雄科技大學航技系
      </div>
    </div>
  );
}
