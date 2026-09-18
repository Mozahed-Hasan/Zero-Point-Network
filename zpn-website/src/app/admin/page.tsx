"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("dashboard");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsLoggedIn(true);
        setSubmissions(data.submissions);
      } else {
        setError(data.message || "ভুল পাসওয়ার্ড");
      }
    } catch {
      setError("নেটওয়ার্ক ত্রুটি");
    }
    setLoading(false);
  };

  const handleAction = async (id: number, action: string) => {
    if (action === 'permanentDelete') {
      if (!confirm("আপনি কি নিশ্চিত যে এটি স্থায়ীভাবে মুছে ফেলতে চান?")) return;
    }
    
    try {
      const res = await fetch("/api/admin/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (action === 'permanentDelete') {
          setSubmissions(prev => prev.filter(s => s.id !== id));
        } else {
          setSubmissions(prev => prev.map(s => s.id === id ? { ...s, isDeleted: action === 'delete' } : s));
        }
      } else {
        alert(data.message || "কোনো সমস্যা হয়েছে");
      }
    } catch {
      alert("নেটওয়ার্ক ত্রুটি");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    setSubmissions([]);
    router.push("/");
  };

  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)' }}>
        <header style={{ padding: '15px 0', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image src="/Main logo.png" alt="ZPN Logo" width={180} height={65} style={{ objectFit: 'contain' }} />
            <h1 style={{ fontSize: '1.4rem', color: 'var(--gray-900)', margin: 0, fontWeight: 800 }}>এডমিন প্যানেল</h1>
          </div>
        </header>
        <div className="admin-login-container" style={{ minHeight: 'calc(100vh - 72px)', paddingTop: 0 }}>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <h2>এডমিন লগইন</h2>
            <p>ড্যাশবোর্ডে প্রবেশ করতে পাসওয়ার্ড দিন</p>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="পাসওয়ার্ড দিন" 
              required 
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit" disabled={loading} className="btn btn-primary">
              {loading ? "অপেক্ষা করুন..." : "প্রবেশ করুন"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const connectionReqs = submissions.filter(s => s.type === "connection" && !s.isDeleted);
  const complaints = submissions.filter(s => s.type === "complaint" && !s.isDeleted);
  const deletedItems = submissions.filter(s => s.isDeleted);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)' }}>
      <header style={{ padding: '15px 0', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Image src="/Main logo.png" alt="ZPN Logo" width={180} height={65} style={{ objectFit: 'contain' }} />
          </div>
          <h1 style={{ flex: 2, textAlign: 'center', fontSize: '1.4rem', color: 'var(--gray-900)', margin: 0, fontWeight: 800 }}>ড্যাশবোর্ড</h1>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <button onClick={handleLogout} className="btn btn-primary" style={{ backgroundColor: '#DC2626', borderColor: '#DC2626', padding: '8px 16px' }}>লগ আউট</button>
          </div>
        </div>
      </header>
      <div className="admin-dashboard container" style={{paddingTop: "40px", paddingBottom: "80px", minHeight: "calc(100vh - 76px)"}}>
        <div className="admin-tabs">
          <button 
            className={`admin-tab ${currentTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentTab('dashboard')}
          >
            ড্যাশবোর্ড
          </button>
          <button 
            className={`admin-tab ${currentTab === 'recycle' ? 'active' : ''}`}
            onClick={() => setCurrentTab('recycle')}
          >
            রিসাইকেল বিন ({deletedItems.length})
          </button>
        </div>

        {currentTab === 'dashboard' ? (
          <>
            <div className="admin-section">
              <h2>নতুন সংযোগের আবেদন ({connectionReqs.length})</h2>
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>তারিখ</th>
                      <th>নাম</th>
                      <th>ফোন</th>
                      <th>এলাকা</th>
                      <th>প্যাকেজ</th>
                      <th>বিস্তারিত</th>
                      <th>অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {connectionReqs.map(req => (
                      <tr key={req.id}>
                        <td>{new Date(req.createdAt).toLocaleString("bn-BD")}</td>
                        <td>{req.fullName}</td>
                        <td>{req.phone}</td>
                        <td>{req.area}</td>
                        <td>{req.package}</td>
                        <td>{req.message}</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleAction(req.id, 'delete')}>ডিলিট</button>
                        </td>
                      </tr>
                    ))}
                    {connectionReqs.length === 0 && (
                      <tr><td colSpan={7} style={{textAlign:'center'}}>কোনো আবেদন নেই</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-section" style={{marginTop: '60px'}}>
              <h2>অভিযোগ সমূহ ({complaints.length})</h2>
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>তারিখ</th>
                      <th>নাম</th>
                      <th>ফোন</th>
                      <th>এলাকা</th>
                      <th>অভিযোগের ধরন</th>
                      <th>বিস্তারিত</th>
                      <th>অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map(req => (
                      <tr key={req.id}>
                        <td>{new Date(req.createdAt).toLocaleString("bn-BD")}</td>
                        <td>{req.fullName || "-"}</td>
                        <td>{req.phone || "-"}</td>
                        <td>{req.area}</td>
                        <td>{req.package}</td>
                        <td>{req.message}</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleAction(req.id, 'delete')}>ডিলিট</button>
                        </td>
                      </tr>
                    ))}
                    {complaints.length === 0 && (
                      <tr><td colSpan={7} style={{textAlign:'center'}}>কোনো অভিযোগ নেই</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="admin-section">
            <h2>রিসাইকেল বিন ({deletedItems.length})</h2>
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>তারিখ</th>
                    <th>ধরন</th>
                    <th>নাম / ফোন</th>
                    <th>এলাকা</th>
                    <th>প্যাকেজ / অভিযোগ</th>
                    <th>অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedItems.map(req => (
                    <tr key={req.id}>
                      <td>{new Date(req.createdAt).toLocaleString("bn-BD")}</td>
                      <td>{req.type === 'connection' ? 'সংযোগ' : 'অভিযোগ'}</td>
                      <td>{req.fullName || "-"}<br/><small>{req.phone}</small></td>
                      <td>{req.area}</td>
                      <td>{req.package}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button className="btn btn-sm btn-success" onClick={() => handleAction(req.id, 'restore')}>রিস্টোর</button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleAction(req.id, 'permanentDelete')}>স্থায়ীভাবে ডিলিট</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {deletedItems.length === 0 && (
                    <tr><td colSpan={6} style={{textAlign:'center'}}>রিসাইকেল বিন ফাঁকা</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
