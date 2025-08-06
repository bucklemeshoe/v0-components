export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rematch V0 Components
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Component library for the Rematch Padel platform
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">🎨 Storybook Available</h2>
          <p className="text-gray-600 mb-6">
            View all components in Storybook for better development experience
          </p>
          <a 
            href="http://localhost:6006" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open Storybook →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">🏆 Tournament Player Card</h3>
            <p className="text-gray-600">Player verification card with QR code</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">➕ Add Components</h3>
            <p className="text-gray-600">Create new components with V0</p>
          </div>
        </div>
      </div>
    </main>
  )
}