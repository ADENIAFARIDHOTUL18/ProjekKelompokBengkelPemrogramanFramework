import PageHeader from "../components/PageHeader";
// Sesuaikan path import sesuai lokasi file customers.json Anda
import customerData from "../customers.json";

export default function Customers() {
  // Helper untuk memberikan warna pada label Loyalty
  const getLoyaltyStyle = (level) => {
    switch (level) {
      case "Gold": return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Silver": return "bg-slate-100 text-slate-700 border border-slate-200";
      case "Bronze": return "bg-orange-100 text-orange-700 border border-orange-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Customers" 
        breadcrumb="Dashboard / Customers"
      >
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Add Customer
        </button>
      </PageHeader>

      <main className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-4 font-semibold text-gray-600 text-sm">ID</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Customer Name</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Email</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Phone</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.customerID} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="p-4 text-sm text-gray-500 font-mono">#{customer.customerID}</td>
                  <td className="p-4 text-sm font-medium text-gray-900">{customer.customerName}</td>
                  <td className="p-4 text-sm text-gray-600">{customer.email}</td>
                  <td className="p-4 text-sm text-gray-600">{customer.phone}</td>
                  <td className="p-4 text-xs">
                    <span className={`px-3 py-1 rounded-md font-bold uppercase tracking-wider ${getLoyaltyStyle(customer.loyalty)}`}>
                      {customer.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Footer simpel jika data kosong */}
          {customerData.length === 0 && (
            <div className="p-10 text-center text-gray-400">
              No customers found.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}