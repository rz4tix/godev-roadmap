import { useState } from 'react';
import React from 'react';
import { roadmapData, finalOutcomes } from './data';
import { Month, Week, Day } from './types';
import { ChevronDown, ChevronRight, CheckCircle2, AlertTriangle, BookOpen, Code2, GitMerge, Layout, Server, Target, Terminal, Briefcase } from 'lucide-react';

const DayCard: React.FC<{ day: Day }> = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 border-2 border-sky-100 rounded-2xl bg-sky-50/30 overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-transparent hover:bg-sky-50/50 text-left transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center font-mono text-sm font-bold text-slate-700 shadow-sm">
            D{day.day}
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-800">{day.title}</h4>
            <p className="text-sm text-slate-500 font-medium mt-0.5">{day.goal}</p>
          </div>
        </div>
        {isOpen ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
      </button>

      {isOpen && (
        <div className="px-6 py-6 border-t border-sky-100 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/50">
          <div className="space-y-6">
            <div>
              <h5 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                <Code2 size={16} className="text-sky-500"/> Tech & Concepts
              </h5>
              <div className="flex flex-wrap gap-2 mb-3">
                {day.technologies.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-600 text-xs font-mono font-bold">{t}</span>
                ))}
              </div>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 font-medium">
                {day.concepts.map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>

            <div>
              <h5 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                <Terminal size={16} className="text-slate-500"/> Hands-on Building
              </h5>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <p className="text-sm"><strong className="text-sky-600">Task:</strong> <span className="text-slate-600 font-medium">{day.codingTasks}</span></p>
                <p className="text-sm"><strong className="text-amber-500">Mini-Challenge:</strong> <span className="text-slate-600 font-medium">{day.miniChallenges}</span></p>
                <p className="text-sm"><strong className="text-emerald-600">Testing:</strong> <span className="text-slate-600 font-medium">{day.testingRequirements}</span></p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                <Briefcase size={16} className="text-orange-400"/> Real-world Scenario
              </h5>
              <p className="text-sm px-4 py-3 bg-orange-50 border border-orange-100 rounded-xl text-slate-700 leading-relaxed font-medium">
                {day.realWorldScenarios}
              </p>
            </div>

            <div>
              <h5 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                <Target size={16} className="text-purple-400"/> Outputs & Standards
              </h5>
              <ul className="space-y-3 text-sm text-slate-600 font-medium bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0"/>
                  <span><strong>Deliverable:</strong> {day.deliverables}</span>
                </li>
                <li className="flex items-start gap-3">
                  <GitMerge size={16} className="text-purple-500 mt-0.5 shrink-0"/>
                  <span><strong>GitHub PR:</strong> {day.githubExpectations}</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen size={16} className="text-sky-500 mt-0.5 shrink-0"/>
                  <span><strong>Docs:</strong> {day.documentationTasks}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const WeekView: React.FC<{ week: Week }> = ({ week }) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            Week {week.week}: {week.theme}
          </h3>
          <span className="bg-sky-500 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest">ACTIVE</span>
        </div>
        <p className="text-slate-600 text-md">{week.whyItMatters}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-red-50/50 border border-red-100 p-5 rounded-xl">
          <h4 className="flex items-center gap-2 font-bold text-red-600 mb-2 uppercase text-xs tracking-wider">
            <AlertTriangle size={16}/> Junior Pitfalls
          </h4>
          <p className="text-sm text-slate-700">{week.juniorMistakes}</p>
        </div>
        <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-xl">
          <h4 className="flex items-center gap-2 font-bold text-emerald-600 mb-2 uppercase text-xs tracking-wider">
            <CheckCircle2 size={16}/> Mid-Level Mindset
          </h4>
          <p className="text-sm text-slate-700">{week.midLevelMindset}</p>
        </div>
      </div>

      <div className="space-y-4">
        {week.days.length > 0 ? (
          week.days.map(d => <DayCard key={d.day} day={d} />)
        ) : (
          <div className="p-8 border-2 border-slate-200 border-dashed rounded-2xl bg-slate-50 text-center">
            <p className="text-slate-500 font-medium italic">Expandable daily tasks for this week follow the intensive structural pattern shown in Month 1.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const MonthView: React.FC<{ month: Month }> = ({ month }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-start mb-8 pb-8 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-widest mb-1">
            <span>MONTH {month.month}</span>
            <span className="text-slate-300">•</span>
            <span>{month.title.split(':')[0]}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">{month.title}</h2>
          <p className="text-slate-500 mt-2 max-w-2xl">{month.focus}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
              <Layout size={16} className="text-sky-500"/> Capstone Project
            </h3>
            <p className="text-sm font-bold text-slate-800 leading-relaxed">{month.capstoneProject}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Server className="text-purple-500" size={16}/> Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{month.architectureReview}</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Target className="text-emerald-500" size={16}/> Performance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{month.performanceReview}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex-1 bg-slate-900 rounded-2xl p-6 text-white shadow-md">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-sky-400" size={16}/> Production Checklist
            </h3>
            <ul className="space-y-3">
              {month.productionChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-12">
        {month.weeks.length > 0 ? (
          month.weeks.map(w => <WeekView key={w.week} week={w} />)
        ) : (
          <div className="text-center p-12 bg-slate-50 rounded-2xl border-2 border-slate-200 border-dashed">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Detailed syllabus follows the Month 1 and 2 patterns.</h3>
            <p className="text-slate-500 font-medium">Includes daily coding scenarios, GitHub PR mandates, and architectural reviews.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FinalOutcomesView() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="border-b border-slate-200 pb-8 mb-8">
        <div className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-1">Graduation</div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Final Roadmap Outcomes</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-white shadow-xl">
          <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-2">Target Skill Level</h3>
          <p className="text-2xl font-bold text-white mb-8">{finalOutcomes.skillLevel}</p>
          
          <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-4">Job Roles Unlocked</h3>
          <ul className="space-y-4">
            {finalOutcomes.jobTypes.map(job => (
              <li key={job} className="flex items-center gap-3 text-slate-300 font-medium">
                <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                 {job}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-4">Final Portfolio Artifacts</h3>
          <ul className="space-y-3">
            {finalOutcomes.portfolio.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-medium">
                <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">0{i+1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
         <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xs uppercase font-bold text-emerald-500 tracking-widest mb-4">Ready to Use in Production</h3>
          <div className="flex flex-wrap gap-2">
            {finalOutcomes.technologiesMastered.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded font-medium text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
           <h3 className="text-xs uppercase font-bold text-orange-500 tracking-widest mb-4">Areas for Continual Learning</h3>
           <ul className="space-y-3">
            {finalOutcomes.weakAreasToContinue.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                <div className="w-2 h-2 rounded bg-orange-200 shrink-0 border border-orange-300"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 text-center">
        <h3 className="text-xs uppercase font-bold text-sky-600 tracking-widest mb-3">The Path to Senior</h3>
        <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed text-sm font-medium">
          {finalOutcomes.nextSteps}
        </p>
      </div>

    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<number | 'outcomes'>(1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500 rounded flex items-center justify-center shadow-sm">
            <span className="font-bold text-white font-mono">Go</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
            Entry <span className="text-slate-300">&rarr;</span> Mid-Level <span className="text-sky-600">Golang Backend</span>
          </h1>
        </div>
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#" className="font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
            5-Month Intensive Curriculum
          </a>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors hidden md:block">Download RFC Template</button>
        </div>
      </header>

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        {/* Sidebar Nav */}
        <nav className="w-64 p-6 flex-col gap-2 shrink-0 border-r border-slate-200 bg-slate-100 hidden md:flex sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Path Progress</div>
          {roadmapData.map(month => {
            const isCompleted = typeof activeTab === 'number' && month.month < activeTab;
            const isCompletedWithOutcomes = activeTab === 'outcomes';
            const done = isCompleted || isCompletedWithOutcomes;

            return (
              <button
                key={month.month}
                onClick={() => setActiveTab(month.month)}
                className={`w-full flex items-center gap-3 text-left p-3 rounded-lg transition-all duration-200 ${
                  activeTab === month.month 
                    ? 'bg-white border-2 border-sky-500 shadow-md ring-4 ring-sky-50' 
                    : done
                      ? 'bg-white border border-slate-200 shadow-sm opacity-60 grayscale hover:grayscale-0'
                      : 'bg-slate-50 border border-slate-200 hover:bg-white'
                }`}
              >
                <div className={`font-mono text-xs font-bold w-6 h-6 rounded flex items-center justify-center shrink-0 ${activeTab === month.month ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  0{month.month}
                </div>
                <div className={`text-sm ${activeTab === month.month ? 'font-bold text-slate-900' : 'font-semibold text-slate-700 line-clamp-1'}`}>
                  {month.title.split(':')[0]}
                </div>
              </button>
            );
          })}
          
          <div className="my-2 border-t border-slate-200"></div>
          
          <button
              onClick={() => setActiveTab('outcomes')}
              className={`w-full flex items-center gap-3 text-left p-3 rounded-lg transition-all duration-200 ${
                activeTab === 'outcomes' 
                  ? 'bg-white border-2 border-emerald-500 shadow-md ring-4 ring-emerald-50' 
                  : 'bg-slate-50 border border-slate-200 hover:bg-white'
              }`}
            >
              <div className={`font-mono text-xs font-bold w-6 h-6 rounded flex items-center justify-center shrink-0 ${activeTab === 'outcomes' ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                <Target size={14} />
              </div>
              <div className={`text-sm ${activeTab === 'outcomes' ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>
                Final Outcomes
              </div>
            </button>

            <div className="mt-auto pt-6">
              <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl text-white shadow-md">
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Level Prediction</div>
                <div className="text-lg font-bold">Mid-Level SE</div>
                <div className="w-full bg-slate-700 h-1 rounded-full mt-3 overflow-hidden">
                  <div className="bg-sky-400 h-full transition-all duration-500" style={{width: activeTab === 'outcomes' ? '100%' : `${(activeTab as number) * 20}%`}}></div>
                </div>
                <div className="text-[10px] mt-2 text-slate-400 text-right">{activeTab === 'outcomes' ? '100%' : `${(activeTab as number) * 20}%`} Readiness</div>
              </div>
            </div>
        </nav>

        {/* Mobile nav */}
        <div className="flex md:hidden overflow-x-auto p-4 gap-2 border-b border-slate-200 bg-white sticky top-16 z-20 w-full">
            {roadmapData.map(month => (
              <button
                key={month.month}
                onClick={() => setActiveTab(month.month)}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-bold border ${activeTab === month.month ? 'bg-sky-50 text-sky-700 border-sky-200' : 'bg-white text-slate-600 border-slate-200'}`}
              >
                M{month.month}
              </button>
            ))}
            <button
              onClick={() => setActiveTab('outcomes')}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-bold border ${activeTab === 'outcomes' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-slate-600 border-slate-200'}`}
            >
              Outcomes
            </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full bg-white p-6 md:p-8 md:my-6 md:mr-6 md:rounded-2xl md:border md:border-slate-200 md:shadow-sm overflow-hidden">
          {activeTab === 'outcomes' ? (
            <FinalOutcomesView />
          ) : (
            <MonthView month={roadmapData.find(m => m.month === activeTab)!} />
          )}
        </main>
      </div>
    </div>
  );
}


