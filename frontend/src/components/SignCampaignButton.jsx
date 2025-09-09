import React, { useState } from "react";
import { signCampaign } from "../hooks/useWallet";

export default function SignCampaignButton({ provider, campaign, onSigned }) {
  const [loading, setLoading] = useState(false);

  const handleSign = async () => {
    setLoading(true);
    try {
      const res = await signCampaign(provider, campaign);
      // отправь res.signature и campaign на бэкенд
      onSigned && onSigned(res);
    } catch (e) {
      console.error(e);
      alert("Ошибка подписи: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleSign} disabled={loading}>
      {loading ? "Подписываем…" : "Подписать кампанию"}
    </button>
  );
}
