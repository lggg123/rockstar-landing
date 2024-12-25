'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { isValidSuiAddress } from "@mysten/sui.js/utils";

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhitelistModal({ isOpen, onClose }: WhitelistModalProps) {
  const [whitelistForm, setWhitelistForm] = useState({
    wallet: '',
    telegram: '',
    twitter: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Show loading toast
    const loadingToast = toast.loading(
      <div className="font-audiowide">
        Encrypting data for transmission...
      </div>
    );

    try {
      // Validate SUI address
      if (!isValidSuiAddress(whitelistForm.wallet)) {
        toast.error(
          <div className="font-audiowide">
            Invalid SUI wallet address detected
          </div>
        );
        return;
      }

      const response = await fetch('/api/whitelist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...whitelistForm,
          timestamp: new Date().toISOString(),
          network: 'sui'
        })
      });
      
      const data = await response.json();

      if (data.success) {
        toast.dismiss(loadingToast);
        toast.success(
          <div className="space-y-2">
            <p className="font-audiowide text-cyan-400">Access Granted</p>
            <p className="text-sm">Welcome to the syndicate, operative</p>
            <p className="text-xs text-gray-400">IPFS Hash: {data.hash.slice(0, 10)}...</p>
          </div>
        );
        onClose();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        <div className="space-y-2">
          <p className="font audiowide text-pink-500">Access Denied</p>
          <p className="text-sm">{error instanceof Error ? error.message : 'Operation failed. Try again later.'}</p>
        </div>
      );
      console.error('Whitelist submission error:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-black/90 border-2 border-cyan-400/30 rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-audiowide text-cyan-400 mb-6">Join the Whitelist</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2 font-orbitron text-sm">SUI Wallet Address</label>
            <input
              type="text"
              value={whitelistForm.wallet}
              onChange={(e) => setWhitelistForm(prev => ({ ...prev, wallet: e.target.value }))}
              className="w-full bg-black/60 border-2 border-cyan-400/30 rounded px-4 py-2 text-white font-orbitron focus:border-cyan-400 focus:outline-none"
              placeholder="0x..."
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2 font-orbitron text-sm">Telegram Username</label>
            <input
              type="text"
              value={whitelistForm.telegram}
              onChange={(e) => setWhitelistForm(prev => ({ ...prev, telegram: e.target.value }))}
              className="w-full bg-black/60 border-2 border-cyan-400/30 rounded px-4 py-2 text-white font-orbitron focus:border-cyan-400 focus:outline-none"
              placeholder="@username"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2 font-orbitron text-sm">Twitter Handle</label>
            <input
              type="text"
              value={whitelistForm.twitter}
              onChange={(e) => setWhitelistForm(prev => ({ ...prev, twitter: e.target.value }))}
              className="w-full bg-black/60 border-2 border-cyan-400/30 rounded px-4 py-2 text-white font-orbitron focus:border-cyan-400 focus:outline-none"
              placeholder="@handle"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2 font-orbitron text-sm">Email Address</label>
            <input
              type="email"
              value={whitelistForm.email}
              onChange={(e) => setWhitelistForm(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-black/60 border-2 border-cyan-400/30 rounded px-4 py-2 text-white font-orbitron focus:border-cyan-400 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-black/60 border-2 border-pink-500/30 hover:border-pink-500 rounded text-pink-500 font-orbitron transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-black/60 border-2 border-cyan-400/30 hover:border-cyan-400 rounded text-cyan-400 font-orbitron transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
