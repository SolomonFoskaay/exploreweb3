import React from 'react';

const SocialMediaLinks = ({ formData, handleInputChange, loading }) => (
  <>
    <div className="flex flex-col">
      <label htmlFor="twitter" className="mb-2 capitalize text-purple-500 text-xl">Twitter:</label>
      <span className="text-sm text-gray-400 mb-1">format https://x.com/ExploreSolXyz</span>
      <input
        type="text"
        id="twitter"
        name="twitter"
        value={formData.twitter}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter twitter"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="discord" className="mb-2 capitalize text-purple-500 text-xl">Discord:</label>
      <span className="text-sm text-gray-400 mb-1">format https://discord.gg/YwySjzW</span>
      <input
        type="text"
        id="discord"
        name="discord"
        value={formData.discord}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter discord"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="telegram" className="mb-2 capitalize text-purple-500 text-xl">Telegram:</label>
      <span className="text-sm text-gray-400 mb-1">format https://t.me/solana</span>
      <input
        type="text"
        id="telegram"
        name="telegram"
        value={formData.telegram}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter telegram"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="solarplex" className="mb-2 capitalize text-purple-500 text-xl">Solarplex:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz</span>
      <input
        type="text"
        id="solarplex"
        name="solarplex"
        value={formData.solarplex}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter solarplex"
      />
    </div>
  </>
);

export default SocialMediaLinks;
