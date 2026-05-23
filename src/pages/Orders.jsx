import PageHeader from "../components/PageHeader";

import orderData from "../orders.json"; 

export default function Orders() {
  // Helper function untuk warna status agar lebih menarik
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700";
      case "Pending": return "bg-yellow-100 text-yellow-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Orders" breadcrumb="Dashboard / Orders">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          + Add Order
        </button>
      </PageHeader>

      <main className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-4 font-semibold text-gray-600 text-sm">Order ID</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Customer</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Date</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-gray-600 text-sm text-right">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr key={order.orderID} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="p-4 text-sm text-gray-700 font-mono">#{order.orderID}</td>
                  <td className="p-4 text-sm font-medium text-gray-900">{order.customerName}</td>
                  <td className="p-4 text-sm text-gray-500">{order.orderDate}</td>
                  <td className="p-4 text-xs">
                    <span className={`px-3 py-1 rounded-full font-medium ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-semibold text-gray-800 text-right">
                    Rp {order.totalPrice.toLocaleString('id-ID')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}