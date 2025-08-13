import React from 'react';
import { Clock, Star, Wine, Utensils } from 'lucide-react';

export default function Dining() {
  const menuHighlights = [
    {
      name: 'Grilled Serbian Lamb',
      description: 'Tender lamb with traditional herbs, roasted vegetables, and house-made ajvar',
      price: '€28',
      category: 'Main Course'
    },
    {
      name: 'Adriatic Sea Bass',
      description: 'Fresh sea bass with Mediterranean herbs, olive tapenade, and seasonal greens',
      price: '€32',
      category: 'Main Course'
    },
    {
      name: 'Wild Mushroom Risotto',
      description: 'Creamy Arborio rice with local forest mushrooms and truffle oil',
      price: '€24',
      category: 'Vegetarian'
    },
    {
      name: 'Woodland Chocolate Soufflé',
      description: 'Rich dark chocolate soufflé with berry compote and vanilla ice cream',
      price: '€12',
      category: 'Dessert'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" 
               style={{backgroundImage: 'url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Fine Dining</h1>
            <p className="text-xl">Culinary excellence in an elegant setting</p>
          </div>
        </div>
      </section>

      {/* Restaurant Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-900 mb-6">
                The Garden <span className="text-green-600">Restaurant</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Experience exceptional cuisine in our award-winning restaurant, where our talented chefs 
                create masterful dishes using the finest local and international ingredients. Our elegant 
                dining room offers panoramic views of the resort's gardens and pool area.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-stone-900">Breakfast</div>
                    <div className="text-stone-600">7:00 - 11:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-stone-900">Dinner</div>
                    <div className="text-stone-600">18:00 - 23:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Wine className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-stone-900">Wine Bar</div>
                    <div className="text-stone-600">16:00 - 01:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-stone-900">Michelin Guide</div>
                    <div className="text-stone-600">Recommended</div>
                  </div>
                </div>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Reserve a Table
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Menu Highlights</h2>
            <p className="text-xl text-stone-600">
              A selection of our chef's signature dishes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuHighlights.map((dish, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{dish.name}</h3>
                    <span className="text-sm text-green-600 font-medium">{dish.category}</span>
                  </div>
                  <span className="text-2xl font-bold text-amber-500">{dish.price}</span>
                </div>
                <p className="text-stone-600 leading-relaxed">{dish.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Special Dining Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Wine className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-4">Wine Tasting</h3>
              <p className="text-stone-600 mb-6">
                Discover exceptional Serbian wines with our sommelier-guided tastings every Friday evening.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">Learn More</button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Utensils className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-4">Chef's Table</h3>
              <p className="text-stone-600 mb-6">
                An exclusive dining experience featuring a multi-course menu prepared by our executive chef.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">Learn More</button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-4">Private Dining</h3>
              <p className="text-stone-600 mb-6">
                Intimate private dining rooms perfect for special celebrations and business meetings.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}