"use client";
import React from "react";

export default function AiLabSection(){
    return (
              <div className="space-y-6">
                <div className="text-[#66FCF1] font-mono text-lg mb-4">=== AI LABORATORY ===</div>
                <div className="border border-[#66FCF1]/30 rounded p-6 bg-[#66FCF1]/5">
                  <h3 className="text-[#66FCF1] font-mono text-lg mb-4">Current Research Areas</h3>
                  <div className="space-y-3 font-mono text-sm text-gray-300">
                    <p>• Machine Learning Model Optimization</p>
                    <p>• Natural Language Processing Applications</p>
                    <p>• Computer Vision for Real-time Applications</p>
                    <p>• Reinforcement Learning in Game Development</p>
                    <p>• Neural Architecture Search Algorithms</p>
                  </div>
                </div>
                {/* <div className="border border-[#C3073F]/30 rounded p-6 bg-[#C3073F]/5">
                  <h3 className="text-[#C3073F] font-mono text-lg mb-4">Recent Publications</h3>
                  <div className="space-y-2 font-mono text-sm text-gray-300">
                    <p>• "Optimizing Neural Networks for Edge Computing" - AI Conference 2024</p>
                    <p>• "Novel Approaches to Few-Shot Learning" - ML Journal 2023</p>
                    <p>• "Ethical AI in Production Systems" - Tech Ethics Symposium 2023</p>
                  </div> */}
                {/* </div> */}
              </div>
            )
}