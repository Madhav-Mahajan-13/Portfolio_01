"use client";
import React from "react";
import { profileData } from "@/data/profileData";

export default function ProfileSection() {
  return (
    <div className="space-y-6">
      <div className="text-[#66FCF1] font-mono text-lg mb-4">=== USER PROFILE ===</div>

      <div className="space-y-4">
        <section>
          <h3 className="text-[#C3073F] font-mono text-md mb-2">NAME</h3>
          <div className="ml-4 font-mono text-sm text-gray-300">
            <p>{profileData.name}</p>
          </div>
        </section>

        <section>
          <h3 className="text-[#C3073F] font-mono text-md mb-2">BIO</h3>
          <div className="ml-4 font-mono text-sm text-gray-300 leading-relaxed">
            <p>{profileData.bio}</p>
          </div>
        </section>

        <section>
          <h3 className="text-[#C3073F] font-mono text-md mb-2">EDUCATION</h3>
          <div className="ml-4 font-mono text-sm text-gray-300 space-y-2">
            {profileData.education.map((edu, index) => (
              <div key={index}>
                <p className="text-[#66FCF1]">{edu.degree}</p>
                <p>• {edu.institution} ({edu.year})</p>
                <p>• Focus: {edu.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[#C3073F] font-mono text-md mb-2">HOBBIES & INTERESTS</h3>
          <div className="ml-4 font-mono text-sm text-gray-300">
            {profileData.hobbies.map((hobby, index) => (
              <p key={index}>• {hobby}</p>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[#C3073F] font-mono text-md mb-2">GITHUB</h3>
          <div className="ml-4 font-mono text-sm text-[#66FCF1]">
            <a
              href={profileData.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {profileData.github_name}
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-[#C3073F] font-mono text-md mb-2">CONTACT</h3>
          <div className="ml-4 font-mono text-sm text-gray-300">
            <p className="text-[#66FCF1]">{profileData.contact}</p>
          </div>
        </section>
      </div>

      <div className="mt-4 p-3 border border-[#66FCF1]/30 rounded bg-[#66FCF1]/5">
        <p className="font-mono text-xs text-gray-400">
          Tip: Type 'cd ..' to return to main directory
        </p>
      </div>
    </div>
  );
}
