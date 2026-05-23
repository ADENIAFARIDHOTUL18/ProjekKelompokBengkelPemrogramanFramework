import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Framework Directory</h1>
          <p className="text-gray-500">Temukan tools terbaik untuk project masa depanmu</p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cari nama atau deskripsi..."
              className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="w-full md:w-64 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
            onChange={(e) => setSelectedTag(e.target.value)} // Fix: dari setSelectedTerm ke setSelectedTag
          >
            <option value="">Semua Kategori</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Results Info */}
        <p className="mb-6 text-sm text-gray-500">
          Menampilkan <span className="font-bold text-blue-600">{filteredFrameworks.length}</span> framework
        </p>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col border border-gray-100 p-6 rounded-2xl shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>
                <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  {item.details.releaseYear}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>

              <div className="mb-4 pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Developer</p>
                <p className="text-sm font-semibold text-gray-700">{item.details.developer}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 text-[10px] font-bold uppercase rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Visit Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Tidak ada framework yang cocok dengan pencarianmu.</p>
          </div>
        )}
      </div>
    </div>
  );
}